---
layout: default
title: 关于我
permalink: /about/
---

<section class="about-page section">
    <div class="container">
        <!-- Hero Section -->
        <div class="about-hero">
            <div class="about-avatar">
                <img src="{{ site.author.avatar }}" alt="{{ site.author.name }}的头像"
                     onerror="this.src='https://api.dicebear.com/7.x/initials/svg?seed={{ site.author.name }}'">
                <div class="avatar-status online"></div>
            </div>

            <h1 class="about-name">{{ site.author.name }}</h1>
            <p class="about-tagline">{{ site.author.tagline_zh }}</p>
            <p class="about-location">
                <i class="fa fa-map-marker"></i> {{ site.author.location }}
                <span class="divider">|</span>
                <i class="fa fa-building"></i> {{ site.author.employer }}
            </p>

            <!-- Social Links -->
            <div class="about-socials">
                {% for social in site.socials %}
                <a href="{{ social[1].url }}" target="_blank" rel="noopener noreferrer"
                   class="social-link" aria-label="{{ social[0] }}">
                    <i class="fa {{ social[1].icon }}"></i>
                </a>
                {% endfor %}
            </div>
        </div>

        <!-- Bio Section -->
        <div class="about-bio">
            <h2><i class="fa fa-user"></i> 个人简介</h2>
            <div class="bio-content">
                <p>{{ site.author.bio_zh }}</p>
                <p>{{ site.author.bio_en }}</p>
            </div>
        </div>

        <!-- Skills Section -->
        <div class="about-skills">
            <h2><i class="fa fa-code"></i> 技能专长</h2>

            <div class="skills-grid">
                <!-- Core Skills -->
                <div class="skill-category">
                    <h3>核心技能</h3>
                    <div class="skill-bars">
                        {% for skill in site.data.skills.core_skills %}
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">{{ skill.name }}</span>
                                <span class="skill-level">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: {{ skill.level }}%"></div>
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                </div>

                <!-- Backend Tools -->
                <div class="skill-category">
                    <h3>后端技术</h3>
                    <div class="tech-tags">
                        {% for tool in site.data.skills.backend_tools %}
                        <span class="tech-tag">{{ tool }}</span>
                        {% endfor %}
                    </div>
                </div>

                <!-- Dev Tools -->
                <div class="skill-category">
                    <h3>开发工具</h3>
                    <div class="tech-tags">
                        {% for tool in site.data.skills.dev_tools %}
                        <span class="tech-tag">{{ tool }}</span>
                        {% endfor %}
                    </div>
                </div>

                <!-- Languages -->
                <div class="skill-category">
                    <h3>编程语言分布</h3>
                    <div class="language-stats">
                        {% for lang in site.data.skills.languages %}
                        <div class="lang-item">
                            <span class="lang-name">{{ lang.name }}</span>
                            <div class="lang-bar-wrapper">
                                <div class="lang-bar {{ lang.color }}" style="width: {{ lang.percentage }}%"></div>
                            </div>
                            <span class="lang-percent">{{ lang.percentage }}%</span>
                        </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>

        <!-- Experience Timeline -->
        <div class="about-experience">
            <h2><i class="fa fa-briefcase"></i> 经历时间线</h2>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2024 - 至今</div>
                        <h3>全栈开发工程师 / 自由职业者</h3>
                        <p>专注于 Web 应用开发、开源贡献和技术写作。使用现代技术栈构建高性能应用。</p>
                        <div class="timeline-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>TypeScript</span>
                            <span>Go</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2022 - 2024</div>
                        <h3>高级前端工程师</h3>
                        <p>负责大型 SaaS 产品的前端架构设计，带领团队完成多个核心模块开发。</p>
                        <div class="timeline-tags">
                            <span>Vue.js</span>
                            <span>Webpack</span>
                            <span>Docker</span>
                            <span>AWS</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">2020 - 2022</div>
                        <h3>前端开发工程师</h3>
                        <p>参与多个企业级项目开发，积累丰富的实战经验。</p>
                        <div class="timeline-tags">
                            <span>JavaScript</span>
                            <span>CSS</span>
                            <span>Git</span>
                            <span>Agile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fun Facts -->
        <div class="about-facts">
            <h2><i class="fa fa-heart"></i> 有趣的事实</h2>

            <div class="facts-grid">
                <div class="fact-card">
                    <div class="fact-icon">☕</div>
                    <div class="fact-number">1000+</div>
                    <div class="fact-label">杯咖啡</div>
                </div>
                <div class="fact-card">
                    <div class="fact-icon">📝</div>
                    <div class="fact-number">50+</div>
                    <div class="fact-label">篇技术文章</div>
                </div>
                <div class="fact-card">
                    <div class="fact-icon">🌟</div>
                    <div class="fact-number">500+</div>
                    <div class="fact-label">GitHub Stars</div>
                </div>
                <div class="fact-card">
                    <div class="fact-icon">🚀</div>
                    <div class="fact-number">20+</div>
                    <div class="fact-label">开源项目</div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="about-cta">
            <h2>想一起合作？</h2>
            <p>无论是项目合作、技术咨询还是只是打个招呼，都欢迎联系我！</p>
            <div class="cta-buttons">
                <a href="/#contact" class="btn btn--primary btn--lg">
                    <i class="fa fa-envelope"></i> 联系我
                </a>
                <a href="{{ site.socials.github.url }}" target="_blank" rel="noopener noreferrer"
                   class="btn btn--secondary btn--lg">
                    <i class="fa fa-github"></i> 查看 GitHub
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .about-page {
        padding: 60px 0;
    }

    /* Hero */
    .about-hero {
        text-align: center;
        margin-bottom: 60px;
    }

    .about-avatar {
        position: relative;
        display: inline-block;
        width: 180px;
        height: 180px;
        margin-bottom: 24px;
    }

    .about-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid var(--color-primary);
        box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3);
    }

    .avatar-status {
        position: absolute;
        bottom: 12px;
        right: 12px;
        width: 28px;
        height: 28px;
        background: #10b981;
        border-radius: 50%;
        border: 4px solid white;
    }

    .about-name {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 800;
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 12px;
    }

    .about-tagline {
        font-size: 1.25rem;
        color: var(--color-text-secondary);
        margin-bottom: 16px;
    }

    .about-location {
        color: var(--color-text-muted);
        font-size: 1rem;
        margin-bottom: 24px;
    }

    .about-location .divider {
        margin: 0 12px;
    }

    .about-socials {
        display: flex;
        justify-content: center;
        gap: 12px;
    }

    .social-link {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: var(--color-bg-secondary);
        color: var(--color-text-secondary);
        transition: all 0.3s;
        font-size: 1.25rem;
    }

    .social-link:hover {
        background: var(--color-primary);
        color: white;
        transform: translateY(-3px);
    }

    /* Sections */
    .about-bio,
    .about-skills,
    .about-experience,
    .about-facts,
    .about-cta {
        margin-top: 80px;
    }

    .about-bio h2,
    .about-skills h2,
    .about-experience h2,
    .about-facts h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--color-text);
    }

    /* Bio */
    .bio-content p {
        font-size: 1.125rem;
        line-height: 1.8;
        color: var(--color-text-secondary);
        margin-bottom: 16px;
    }

    /* Skills Grid */
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 32px;
    }

    .skill-category {
        background: var(--color-bg-secondary);
        padding: 28px;
        border-radius: 16px;
        border: 1px solid var(--color-border-light);
    }

    .skill-category h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 20px;
        color: var(--color-text);
    }

    .skill-bars {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .skill-item .skill-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 0.95rem;
    }

    .skill-name {
        color: var(--color-text);
        font-weight: 500;
    }

    .skill-level {
        color: var(--color-primary);
        font-weight: 600;
    }

    .skill-bar {
        height: 8px;
        background: var(--color-bg-tertiary);
        border-radius: 4px;
        overflow: hidden;
    }

    .skill-progress {
        height: 100%;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        border-radius: 4px;
        transition: width 1s ease-out;
    }

    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .tech-tag {
        padding: 8px 16px;
        background: var(--color-bg-tertiary);
        border-radius: 8px;
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        font-weight: 500;
        transition: all 0.2s;
    }

    .tech-tag:hover {
        background: var(--color-primary);
        color: white;
    }

    /* Language Stats */
    .language-stats {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .lang-item {
        display: grid;
        grid-template-columns: 120px 1fr 50px;
        align-items: center;
        gap: 12px;
        font-size: 0.9rem;
    }

    .lang-name {
        color: var(--color-text);
        font-weight: 500;
    }

    .lang-bar-wrapper {
        height: 10px;
        background: var(--color-bg-tertiary);
        border-radius: 5px;
        overflow: hidden;
    }

    .lang-bar {
        height: 100%;
        border-radius: 5px;
        transition: width 1s ease-out;
    }

    .bg-yellow-400 { background: #facc15; }
    .bg-blue-500 { background: #3b82f6; }
    .bg-cyan-500 { background: #06b6d4; }
    .bg-gray-400 { background: #9ca3af; }

    .lang-percent {
        text-align: right;
        color: var(--color-text-muted);
        font-weight: 600;
    }

    /* Timeline */
    .timeline {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        padding-left: 40px;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--color-border);
    }

    .timeline-item {
        position: relative;
        margin-bottom: 48px;
    }

    .timeline-marker {
        position: absolute;
        left: -33px;
        top: 6px;
        width: 16px;
        height: 16px;
        background: var(--color-primary);
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 3px var(--color-primary);
    }

    .timeline-content {
        background: var(--color-bg-secondary);
        padding: 24px;
        border-radius: 12px;
        border: 1px solid var(--color-border-light);
    }

    .timeline-date {
        display: inline-block;
        padding: 4px 12px;
        background: var(--color-primary);
        color: white;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 12px;
    }

    .timeline-content h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--color-text);
    }

    .timeline-content p {
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 16px;
    }

    .timeline-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .timeline-tags span {
        padding: 4px 12px;
        background: var(--color-bg-tertiary);
        border-radius: 6px;
        font-size: 0.85rem;
        color: var(--color-text-muted);
    }

    /* Facts Grid */
    .facts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 24px;
    }

    .fact-card {
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        color: white;
        padding: 32px 24px;
        border-radius: 16px;
        text-align: center;
        transition: transform 0.3s;
    }

    .fact-card:hover {
        transform: translateY(-5px);
    }

    .fact-icon {
        font-size: 3rem;
        margin-bottom: 12px;
    }

    .fact-number {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 4px;
    }

    .fact-label {
        opacity: 0.9;
        font-size: 1rem;
    }

    /* CTA */
    .about-cta {
        text-align: center;
        background: var(--color-bg-secondary);
        padding: 60px 40px;
        border-radius: 20px;
        margin-top: 80px;
    }

    .about-cta h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 16px;
        color: var(--color-text);
    }

    .about-cta p {
        font-size: 1.125rem;
        color: var(--color-text-secondary);
        margin-bottom: 32px;
    }

    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .skills-grid {
            grid-template-columns: 1fr;
        }

        .facts-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .lang-item {
            grid-template-columns: 1fr 80px 50px;
            gap: 8px;
        }

        .lang-name {
            font-size: 0.85rem;
        }
    }
</style>
