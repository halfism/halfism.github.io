---
layout: default
title: 博客
lang: zh
permalink: /blog/
---

{% assign t = site.data.locales[page.lang][page.lang] %}

<main class="pt-20">
<section class="blog section">
    <div class="container">
        <header class="blog__header text-center mb-16">
            <h1 class="mb-4">{{ t.blog.title }}</h1>
            <p class="text-secondary max-w-2xl mx-auto text-lg">{{ t.blog.subtitle }}</p>
        </header>

        <!-- Filter Tags -->
        <div class="blog__filters mb-12 flex justify-center gap-3 flex-wrap">
            <button class="filter-btn active" data-filter="all">{{ t.blog.all }}</button>
            {% assign categories = site.posts | map: 'category' | uniq %}
            {% for category in categories %}
                <button class="filter-btn" data-filter="{{ category }}">{{ category }}</button>
            {% endfor %}
        </div>

        <!-- Posts Grid -->
        <div class="blog__grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for post in site.posts %}
            <article class="post-card animate-on-scroll" data-category="{{ post.category | default: t.common.uncategorized }}">
                {% if post.image %}
                <a href="{{ post.url }}" class="post-card__image">
                    <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy" width="400" height="220">
                    <div class="post-card__overlay"></div>
                </a>
                {% endif %}

                <div class="post-card__content">
                    <div class="post-card__meta">
                        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                            {{ post.date | date: "%Y-%m-%d" }}
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
                            <span class="tag tag--small">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}

                    <a href="{{ post.url }}" class="post-card__link">
                        {{ t.blog.read_more }} &rarr;
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>

        {% if site.posts.size == 0 %}
        <div class="blog__empty text-center py-20">
            <p class="text-secondary text-lg">{{ t.blog.no_posts }}</p>
        </div>
        {% endif %}
    </div>
</section>
</main>

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
        background: var(--color-bg-card);
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: all var(--transition-base);
        font-size: var(--font-size-sm);
        font-weight: 500;
    }

    .filter-btn:hover,
    .filter-btn.active {
        border-color: var(--color-primary);
        color: var(--color-primary);
        background: rgba(59, 130, 246, 0.05);
    }

    .post-card {
        background-color: var(--color-bg-card);
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        transition: all var(--transition-base);
        border: 1px solid var(--color-border-light);
    }

    .post-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
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
        transition: transform var(--transition-slow);
    }

    .post-card:hover .post-card__image img {
        transform: scale(1.05);
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
        padding: var(--space-6);
    }

    .post-card__meta {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        margin-bottom: var(--space-3);
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
    }

    .post-card__category {
        background-color: var(--color-bg-tertiary);
        padding: 4px 10px;
        border-radius: var(--radius-full);
        font-weight: 500;
        color: var(--color-primary);
    }

    .post-card__title {
        font-size: var(--font-size-xl);
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: var(--space-3);
    }

    .post-card__title a {
        color: var(--color-text);
        transition: color var(--transition-fast);
    }

    .post-card__title a:hover {
        color: var(--color-primary);
    }

    .post-card__excerpt {
        color: var(--color-text-secondary);
        line-height: var(--line-height-relaxed);
        margin-bottom: var(--space-4);
        font-size: var(--font-size-sm);
    }

    .post-card__tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
        margin-bottom: var(--space-4);
    }

    .tag--small {
        background-color: var(--color-bg-secondary);
        padding: 4px 12px;
        border-radius: 15px;
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
    }

    .post-card__link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-size-sm);
        transition: gap var(--transition-fast);
    }

    .post-card__link:hover {
        gap: 10px;
    }

    @media (max-width: 767px) {
        .blog__grid {
            grid-template-columns: 1fr !important;
        }
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var postCards = document.querySelectorAll('.post-card');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.dataset.filter;

            postCards.forEach(function(card) {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
</script>
