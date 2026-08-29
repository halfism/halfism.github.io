#!/usr/bin/env python3
"""Generate placeholder PNG assets for halfism.github.io.

Zero third-party dependencies: hand-rolls minimal RGB PNGs via zlib/struct.
Run from anywhere:  python tools/gen_placeholder_assets.py
"""
import os
import zlib
import struct

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "assets", "img")
ICONS = os.path.join(IMG, "icons")

BG = (59, 130, 246)   # brand blue #3b82f6
FG = (255, 255, 255)  # white


def png_chunk(tag, data):
    chunk = tag + data
    return struct.pack(">I", len(data)) + chunk + struct.pack(">I", zlib.crc32(chunk) & 0xffffffff)


def write_png(path, w, h, rgb):
    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0)  # 8-bit, color type 2 (RGB)
    stride = w * 3
    raw = bytearray()
    for y in range(h):
        raw.append(0)  # filter type 0 (none) per row
        raw.extend(rgb[y * stride:(y + 1) * stride])
    idat = zlib.compress(bytes(raw), 9)
    with open(path, "wb") as f:
        f.write(sig + png_chunk(b"IHDR", ihdr) + png_chunk(b"IDAT", idat) + png_chunk(b"IEND", b""))


def solid(w, h, color):
    return bytes(color) * (w * h)


def with_h(w, h, bg, fg):
    px = bytearray(solid(w, h, bg))
    bw = int(w * 0.6)
    bh = int(h * 0.6)
    x0 = (w - bw) // 2
    y0 = (h - bh) // 2
    t = max(2, int(min(w, h) * 0.12))

    def setp(x, y):
        if 0 <= x < w and 0 <= y < h:
            i = (y * w + x) * 3
            px[i:i + 3] = fg

    for y in range(y0, y0 + bh):
        for x in range(x0, x0 + t):
            setp(x, y)
        for x in range(x0 + bw - t, x0 + bw):
            setp(x, y)
    my = y0 + bh // 2 - t // 2
    for y in range(my, my + t):
        for x in range(x0, x0 + bw):
            setp(x, y)
    return bytes(px)


def main():
    os.makedirs(ICONS, exist_ok=True)
    for s in (72, 96, 128, 144, 152, 192, 384, 512):
        out = os.path.join(ICONS, f"icon-{s}x{s}.png")
        write_png(out, s, s, with_h(s, s, BG, FG))
        print("wrote", out)
    write_png(os.path.join(IMG, "avatar.png"), 256, 256, with_h(256, 256, BG, FG))
    print("wrote avatar.png")
    write_png(os.path.join(IMG, "og-image.png"), 1200, 630, solid(1200, 630, BG))
    print("wrote og-image.png")


if __name__ == "__main__":
    main()
