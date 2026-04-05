---
layout: default
title: 联系我
permalink: /contact/
---

<section class="contact-page section">
    <div class="container">
        <header class="contact-header text-center mb-16">
            <h1 class="mb-4">📬 联系我</h1>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                有项目想法、合作机会或只是想打个招呼？欢迎通过以下方式联系我！
            </p>
        </header>

        <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-wrapper">
                <form action="https://formspree.io/f/{{ site.contact.form_id }}" method="POST" class="contact-form" id="contact-form">

                    <!-- Name Field -->
                    <div class="form-group">
                        <label for="name">姓名 <span class="required">*</span></label>
                        <input type="text"
                               id="name"
                               name="name"
                               required
                               placeholder="请输入您的姓名"
                               autocomplete="name">
                        <span class="error-message" id="name-error"></span>
                    </div>

                    <!-- Email Field -->
                    <div class="form-group">
                        <label for="email">邮箱 <span class="required">*</span></label>
                        <input type="email"
                               id="email"
                               name="email"
                               required
                               placeholder="your@email.com"
                               autocomplete="email">
                        <span class="error-message" id="email-error"></span>
                    </div>

                    <!-- Subject Field -->
                    <div class="form-group">
                        <label for="subject">主题</label>
                        <select id="subject" name="subject">
                            <option value="">请选择咨询类型</option>
                            <option value="project">项目合作</option>
                            <option value="job">工作机会</option>
                            <option value="consulting">技术咨询</option>
                            <option value="feedback">反馈建议</option>
                            <option value="other">其他</option>
                        </select>
                    </div>

                    <!-- Budget Field (Conditional) -->
                    <div class="form-group" id="budget-group" style="display: none;">
                        <label for="budget">预算范围</label>
                        <select id="budget" name="budget">
                            <option value="">请选择预算范围</option>
                            <option value="<5k">少于 $5,000</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value=">50k">$50,000+</option>
                        </select>
                    </div>

                    <!-- Message Field -->
                    <div class="form-group">
                        <label for="message">留言内容 <span class="required">*</span></label>
                        <textarea id="message"
                                  name="message"
                                  rows="6"
                                  required
                                  placeholder="请详细描述您的需求或想法..."
                                  minlength="10"></textarea>
                        <span class="error-message" id="message-error"></span>
                        <span class="char-count"><span id="char-count">0</span>/500</span>
                    </div>

                    <!-- Honeypot for Spam Protection -->
                    <input type="text" name="_gotcha" style="display:none">

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn--primary btn--lg btn--full" id="submit-btn">
                        <span class="btn-text">发送消息</span>
                        <span class="btn-loading" style="display: none;">
                            <i class="fa fa-spinner fa-spin"></i> 发送中...
                        </span>
                    </button>

                    <!-- Success/Error Messages -->
                    <div class="form-message" id="form-message" style="display: none;"></div>

                </form>
            </div>

            <!-- Contact Info Sidebar -->
            <aside class="contact-info">
                <!-- Direct Contact -->
                <div class="info-card">
                    <h3><i class="fa fa-paper-plane"></i> 直接联系</h3>
                    <div class="info-items">
                        <a href="mailto:{{ site.email }}" class="info-item">
                            <i class="fa fa-envelope"></i>
                            <span>{{ site.email }}</span>
                        </a>
                    </div>
                </div>

                <!-- Social Links -->
                <div class="info-card">
                    <h3><i class="fa fa-share-alt"></i> 社交媒体</h3>
                    <div class="social-links">
                        {% for social in site.socials %}
                        <a href="{{ social[1].url }}" target="_blank" rel="noopener noreferrer"
                           class="social-link" aria-label="{{ social[0] }}">
                            <i class="fa {{ social[1].icon }}"></i>
                            <span>{{ social[0] | capitalize }}</span>
                        </a>
                        {% endfor %}
                    </div>
                </div>

                <!-- Availability -->
                <div class="info-card availability">
                    <h3><i class="fa fa-clock-o"></i> 可用时间</h3>
                    <div class="availability-status online">
                        <span class="status-dot"></span>
                        <span class="status-text">通常在 24 小时内回复</span>
                    </div>
                    <div class="timezone">
                        <i class="fa fa-globe"></i>
                        时区：{{ site.author.location }} (UTC+8)
                    </div>
                </div>

                <!-- FAQ -->
                <div class="info-card faq">
                    <h3><i class="fa fa-question-circle"></i> 常见问题</h3>
                    <details class="faq-item">
                        <summary>您接受远程工作吗？</summary>
                        <p>是的！我有丰富的远程协作经验，可以灵活安排工作时间。</p>
                    </details>
                    <details class="faq-item">
                        <summary>项目报价如何？</summary>
                        <p>根据项目复杂度和工期定价，可提供详细的项目评估和报价单。</p>
                    </details>
                    <details class="faq-item">
                        <summary>如何开始合作？</summary>
                        <p>填写上方表单简要说明需求，我会尽快与您联系进行深入沟通。</p>
                    </details>
                </div>
            </aside>
        </div>
    </div>
</section>

<style>
    .contact-page {
        padding: 60px 0;
    }

    .contact-header h1 {
        font-size: clamp(2.5rem, 6vw, 4rem);
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    /* Grid Layout */
    .contact-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 48px;
        align-items: start;
    }

    /* Form Styles */
    .contact-form-wrapper {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        border: 1px solid var(--color-border-light);
    }

    [data-theme="dark"] .contact-form-wrapper,
    .dark .contact-form-wrapper {
        background: var(--color-bg-secondary);
        border-color: var(--color-border);
    }

    .form-group {
        margin-bottom: 24px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: var(--color-text);
        font-size: 0.95rem;
    }

    .required {
        color: #ef4444;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 14px 16px;
        border: 2px solid var(--color-border);
        border-radius: 10px;
        font-size: 1rem;
        font-family: inherit;
        transition: all 0.3s;
        background: white;
        color: var(--color-text);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--color-text-muted);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 140px;
    }

    .form-group select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 14px center;
        padding-right: 40px;
    }

    .error-message {
        display: block;
        color: #ef4444;
        font-size: 0.85rem;
        margin-top: 6px;
        min-height: 20px;
    }

    .char-count {
        float: right;
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-top: 4px;
    }

    /* Button States */
    .btn--full {
        width: 100%;
        padding: 16px 32px;
        font-size: 1.05rem;
        margin-top: 12px;
    }

    .btn--full:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }

    /* Form Message */
    .form-message {
        padding: 16px 20px;
        border-radius: 10px;
        margin-top: 20px;
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .form-message.success {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #34d399;
    }

    .form-message.error {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #f87171;
    }

    /* Sidebar */
    .contact-info {
        position: sticky;
        top: 100px;
    }

    .info-card {
        background: var(--color-bg-secondary);
        padding: 28px;
        border-radius: 16px;
        margin-bottom: 24px;
        border: 1px solid var(--color-border-light);
    }

    .info-card h3 {
        font-size: 1.15rem;
        font-weight: 600;
        margin-bottom: 18px;
        color: var(--color-text);
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .info-card h3 i {
        color: var(--color-primary);
    }

    /* Info Items */
    .info-items {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .info-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--color-bg-tertiary);
        border-radius: 10px;
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: all 0.2s;
    }

    .info-item:hover {
        background: var(--color-primary);
        color: white;
        transform: translateX(5px);
    }

    .info-item i {
        font-size: 1.1rem;
        width: 20px;
        text-align: center;
    }

    /* Social Links */
    .social-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: var(--color-bg-tertiary);
        border-radius: 10px;
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s;
    }

    .social-link:hover {
        background: var(--color-primary);
        color: white;
        transform: translateY(-2px);
    }

    /* Availability */
    .availability-status {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
        font-size: 0.95rem;
        color: var(--color-text-secondary);
    }

    .status-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #10b981;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .timezone {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    /* FAQ */
    .faq-item {
        margin-bottom: 12px;
        border-bottom: 1px solid var(--color-border-light);
        padding-bottom: 12px;
    }

    .faq-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .faq-item summary {
        cursor: pointer;
        font-weight: 500;
        color: var(--color-text);
        list-style: none;
        padding: 8px 0;
    }

    .faq-item summary::-webkit-details-marker {
        display: none;
    }

    .faq-item summary::before {
        content: '▶';
        margin-right: 10px;
        font-size: 0.75rem;
        transition: transform 0.2s;
        color: var(--color-primary);
    }

    .faq-item[open] summary::before {
        transform: rotate(90deg);
    }

    .faq-item p {
        margin: 8px 0 0 22px;
        font-size: 0.9rem;
        line-height: 1.6;
        color: var(--color-text-secondary);
    }

    @media (max-width: 1024px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }

        .contact-info {
            position: static;
        }
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const subjectSelect = document.getElementById('subject');
    const budgetGroup = document.getElementById('budget-group');
    const messageTextarea = document.getElementById('message');
    const charCountSpan = document.getElementById('char-count');
    const submitBtn = document.getElementById('submit-btn');

    // Show/hide budget field based on subject
    subjectSelect.addEventListener('change', function() {
        if (this.value === 'project') {
            budgetGroup.style.display = 'block';
        } else {
            budgetGroup.style.display = 'none';
        }
    });

    // Character count
    messageTextarea.addEventListener('input', function() {
        const count = this.value.length;
        charCountSpan.textContent = count;

        if (count > 500) {
            charCountSpan.parentElement.classList.add('over-limit');
        } else {
            charCountSpan.parentElement.classList.remove('over-limit');
        }
    });

    // Form validation and submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Basic validation
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // Validate name
        const name = document.getElementById('name').value.trim();
        if (!name || name.length < 2) {
            document.getElementById('name-error').textContent = '请输入有效的姓名（至少2个字符）';
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            document.getElementById('email-error').textContent = '请输入有效的邮箱地址';
            isValid = false;
        }

        // Validate message
        const message = messageTextarea.value.trim();
        if (!message || message.length < 10) {
            document.getElementById('message-error').textContent = '留言内容至少需要10个字符';
            isValid = false;
        }

        if (!isValid) return;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').style.display = 'none';
        submitBtn.querySelector('.btn-loading').style.display = 'inline-flex';

        try {
            // Submit to Formspree
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showMessage('success', '✅ 消息发送成功！我会尽快回复您。');
                form.reset();
                charCountSpan.textContent = '0';
                budgetGroup.style.display = 'none';
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('error', '❌ 发送失败，请稍后重试或直接邮件联系。');
        } finally {
            // Reset button state
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').style.display = 'inline';
                submitBtn.querySelector('.btn-loading').style.display = 'none';
            }, 2000);
        }
    });
});

function showMessage(type, text) {
    const messageEl = document.getElementById('form-message');
    messageEl.className = `form-message ${type}`;
    messageEl.innerHTML = `<p>${text}</p>`;
    messageEl.style.display = 'block';

    // Auto hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}
</script>
