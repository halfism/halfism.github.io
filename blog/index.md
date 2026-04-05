---
layout: default
title: 博客
permalink: /blog/
---

<section class="blog section">
    <div class="container">
        <header class="blog__header text-center mb-16">
            <h1 class="mb-4">📝 技术博客</h1>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                分享开发经验、技术见解和项目心得
            </p>
        </header>

        <!-- Filter Tags -->
        <div class="blog__filters mb-12 flex justify-center gap-3 flex-wrap">
            <button class="filter-btn active" data-filter="all">全部</button>
            {% assign categories = site.posts | map: 'category' | uniq %}
            {% for category in categories %}
                <button class="filter-btn" data-filter="{{ category }}">{{ category }}</button>
            {% endfor %}
        </div>

        <!-- Posts Grid -->
        <div class="blog__grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for post in site.posts %}
            <article class="post-card" data-category="{{ post.category | default: '未分类' }}">
                {% if post.image %}
                <a href="{{ post.url }}" class="post-card__image">
                    <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
                    <div class="post-card__overlay"></div>
                </a>
                {% endif %}

                <div class="post-card__content">
                    <div class="post-card__meta">
                        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                            {{ post.date | date: "%Y年%m月%d日" }}
                        </time>
                        {% if post.category %}
                        <span class="post-card__category">{{ post.category }}</span>
                        {% endif %}
                    </div>

                    <h2 class="post-card__title">
                        <a href="{{ post.url }}">{{ post.title }}</a>
                    </h2>

                    {% if post.excerpt %}
                    <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                    {% endif %}

                    {% if post.tags %}
                    <div class="post-card__tags">
                        {% for tag in post.tags limit: 3 %}
                            <span class="tag--small">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}

                    <a href="{{ post.url }}" class="post-card__link">
                        阅读更多 →
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>

        {% if site.posts.size == 0 %}
        <div class="blog__empty text-center py-20">
            <p class="text-gray-500 text-lg">暂无文章，敬请期待...</p>
        </div>
        {% endif %}
    </div>
</section>

<style>
    .blog__header h1 {
        font-size: clamp(2.5rem, 6vw, 4rem);
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .filter-btn {
        padding: 8px 20px;
        border: 2px solid var(--color-border);
        border-radius: 25px;
        background: white;
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: all 0.3s;
        font-size: 0.95rem;
        font-weight: 500;
    }

    .filter-btn:hover,
    .filter-btn.active {
        border-color: var(--color-primary);
        color: var(--color-primary);
        background: rgba(59, 130, 246, 0.05);
    }

    .post-card {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        border: 1px solid var(--color-border-light);
    }

    .post-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    }

    .post-card__image {
        position: relative;
        display: block;
        height: 220px;
        overflow: hidden;
    }

    .post-card__image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .post-card:hover .post-card__image img {
        transform: scale(1.08);
    }

    .post-card__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3));
    }

    .post-card__content {
        padding: 28px;
    }

    .post-card__meta {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    .post-card__category {
        background: var(--color-bg-tertiary);
        padding: 4px 10px;
        border-radius: 12px;
        font-weight: 500;
        color: var(--color-primary);
    }

    .post-card__title {
        font-size: 1.35rem;
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 12px;
    }

    .post-card__title a {
        color: var(--color-text);
        transition: color 0.2s;
    }

    .post-card__title a:hover {
        color: var(--color-primary);
    }

    .post-card__excerpt {
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 18px;
        font-size: 0.95rem;
    }

    .post-card__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 18px;
    }

    .tag--small {
        background: var(--color-bg-secondary);
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.85rem;
        color: var(--color-text-muted);
    }

    .post-card__link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-primary);
        font-weight: 600;
        font-size: 0.95rem;
        transition: gap 0.2s;
    }

    .post-card__link:hover {
        gap: 10px;
    }

    @media (max-width: 768px) {
        .blog__grid {
            grid-template-columns: 1fr !important;
        }
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const postCards = document.querySelectorAll('.post-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter posts
            postCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
</script>
