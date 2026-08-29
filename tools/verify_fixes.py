#!/usr/bin/env python3
"""Static pre-build verification for halfism.github.io fixes.

No Ruby/Jekyll available locally, so this checks the invariants that the
planned fixes must satisfy: YAML validity, asset existence, template
dependencies, sw.js precache cleanup, and removed/cleaned data fields.
"""
import os
import sys
import glob
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def p(*a): return os.path.join(ROOT, *a)

results = []
def check(name, cond, detail=""):
    results.append((name, bool(cond), detail))

# 1. YAML validity for all config/data files
yaml_files = [p("_config.yml")] + sorted(glob.glob(p("_data", "*.yml"))) + sorted(glob.glob(p("_data", "locales", "*.yml")))
data = {}
for fp in yaml_files:
    rel = os.path.relpath(fp, ROOT).replace(os.sep, "/")
    try:
        with open(fp, encoding="utf-8") as fh:
            data[rel] = yaml.safe_load(fh)
        check(f"YAML valid: {rel}", True)
    except Exception as e:
        check(f"YAML valid: {rel}", False, str(e)[:120])

# 2. Asset files exist
icons = [f"icon-{s}x{s}.png" for s in (72, 96, 128, 144, 152, 192, 384, 512)]
for ic in icons:
    check(f"asset: icons/{ic}", os.path.exists(p("assets/img/icons", ic)))
check("asset: avatar.png", os.path.exists(p("assets/img/avatar.png")))
check("asset: og-image.png", os.path.exists(p("assets/img/og-image.png")))
check("asset: resume.html", os.path.exists(p("assets/resume.html")))
check("asset: resume_en.html", os.path.exists(p("assets/resume_en.html")))

# 3. blog dedupe
with open(p("blog.html"), encoding="utf-8") as fh:
    blog_src = fh.read()
check("blog.html permalink /blog/", "permalink: /blog/" in blog_src)
check("blog/index.md removed", not os.path.exists(p("blog/index.md")))

# 4. socials unified to _config
with open(p("_includes/footer.html"), encoding="utf-8") as fh:
    footer_src = fh.read()
check("footer uses site.socials", "site.socials" in footer_src)
check("footer no site.data.socials", "site.data.socials" not in footer_src)
check("_data/socials.yml removed", not os.path.exists(p("_data/socials.yml")))

# 5. sw.js precache cleanup
with open(p("sw.js"), encoding="utf-8") as fh:
    sw_src = fh.read()
check("sw.js no '/about/'", "'/about/'" not in sw_src)
check("sw.js no '/contact/'", "'/contact/'" not in sw_src)

# 6. _config socials structure
cfg = data.get("_config.yml", {})
socials = cfg.get("socials", {}) or {}
for k in ("github", "twitter", "linkedin", "email"):
    s = socials.get(k, {}) or {}
    check(f"socials.{k}.url", bool(s.get("url")))
    check(f"socials.{k}.icon", bool(s.get("icon")))

# 7. locales blog key (blog.html uses t.blog.*)
zh = data.get("_data/locales/zh.yml", {}) or {}
en = data.get("_data/locales/en.yml", {}) or {}
zh_inner = zh.get("zh", zh)  # tolerate single- or double-nested layout
en_inner = en.get("en", en)
check("locales zh.blog", "blog" in (zh_inner or {}))
check("locales en.blog", "blog" in (en_inner or {}))

# 8. removed/cleaned data fields
sk = data.get("_data/skills.yml", {}) or {}
cert = data.get("_data/certificates.yml", {}) or {}
lang_has_color = any("color" in (lang or {}) for lang in sk.get("languages", []) or [])
cert_has_color = any("color" in (c or {}) for c in cert)
check("skills.languages no color", not lang_has_color)
check("certificates no color", not cert_has_color)

# Summary
passed = sum(1 for _, ok, _ in results if ok)
failed = [r for r in results if not r[1]]
print(f"\n==== Verification: {passed}/{len(results)} passed ====")
for name, ok, detail in results:
    line = f"[{'PASS' if ok else 'FAIL'}] {name}"
    if detail and not ok:
        line += f" -> {detail}"
    print(line)
if failed:
    print(f"\n{len(failed)} FAILED")
    sys.exit(1)
print("\nALL PASSED")
