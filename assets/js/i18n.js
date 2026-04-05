/**
 * Internationalization (i18n) System
 * Supports dynamic language switching with localStorage persistence
 */

class I18n {
    constructor() {
        this.currentLang = this.getStoredLang() || 'zh';
        this.translations = {};
        this.supportedLanguages = ['zh', 'en'];
    }

    // Initialize and load translations
    async init() {
        await this.loadTranslations(this.currentLang);
        this.applyLanguage();
        this.setupLanguageSwitcher();
    }

    // Get stored language preference
    getStoredLang() {
        return localStorage.getItem('preferred-language');
    }

    // Set language preference
    setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            console.warn(`Unsupported language: ${lang}`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);

        // Load and apply new language
        this.loadTranslations(lang).then(() => {
            this.applyLanguage();
            this.updateActiveSwitcher();

            // Dispatch custom event for other components
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        });
    }

    // Load translation file
    async loadTranslations(lang) {
        try {
            const response = await fetch(`/data/locales/${lang}.yml`);
            if (!response.ok) throw new Error(`Failed to load ${lang} translations`);

            // Note: In production, you'd use a YAML parser or JSON files
            const text = await response.text();
            this.translations = this.parseYAML(text);
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to inline translations
            this.translations = this.getFallbackTranslations(lang);
        }
    }

    // Simple YAML parser (for basic structures)
    parseYAML(yamlString) {
        const result = {};
        let currentSection = result;

        yamlString.split('\n').forEach(line => {
            line = line.trim();
            if (!line || line.startsWith('#')) return;

            if (line.endsWith(':') && !line.includes(': ')) {
                // It's a section header
                const key = line.slice(0, -1);
                result[key] = {};
                currentSection = result[key];
            } else if (line.includes(': ')) {
                const [key, value] = line.split(': ');
                currentSection[key] = this.cleanValue(value);
            }
        });

        return result;
    }

    cleanValue(value) {
        // Remove quotes and handle special characters
        return value.replace(/^["']|["']$/g, '');
    }

    // Fallback translations (embedded)
    getFallbackTranslations(lang) {
        const translations = {
            zh: {
                nav: {
                    home: '首页',
                    about: '关于我',
                    projects: '项目',
                    skills: '技能',
                    blog: '博客',
                    contact: '联系'
                },
                common: {
                    search: '搜索',
                    loading: '加载中...'
                },
                hero: {
                    welcome: '欢迎来到我的个人主页',
                    hi: '你好，我是'
                }
            },
            en: {
                nav: {
                    home: 'Home',
                    about: 'About',
                    projects: 'Projects',
                    skills: 'Skills',
                    blog: 'Blog',
                    contact: 'Contact'
                },
                common: {
                    search: 'Search',
                    loading: 'Loading...'
                },
                hero: {
                    welcome: 'Welcome to my homepage',
                    hi: "Hi, I'm"
                }
            }
        };

        return translations[lang] || translations.zh;
    }

    // Get translation by key (supports nested keys like 'nav.home')
    t(key, params = {}) {
        const keys = key.split('.');
        let value = this.translations;

        for (const k of keys) {
            value = value?.[k];
        }

        if (typeof value !== 'string') {
            return key; // Return key if translation not found
        }

        // Replace parameters like {{name}}
        return Object.entries(params).reduce(
            (str, [paramKey, paramValue]) =>
                str.replace(new RegExp(`\\{\\{${paramKey}\\}\\}`, 'g'), paramValue),
            value
        );
    }

    // Apply language to DOM elements with data-i18n attribute
    applyLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            if (translation && translation !== key) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Add direction attribute for RTL languages (if needed in future)
        // document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    }

    // Setup language switcher UI
    setupLanguageSwitcher() {
        // Find all language switchers
        document.querySelectorAll('[data-lang-switcher]').forEach(switcher => {
            switcher.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = switcher.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });

        this.updateActiveSwitcher();
    }

    // Update active state of language buttons
    updateActiveSwitcher() {
        document.querySelectorAll('[data-lang-switcher]').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === this.currentLang;
            btn.classList.toggle('active', isActive);

            // Show checkmark for active language
            const checkIcon = btn.querySelector('.check-icon');
            if (checkIcon) {
                checkIcon.style.display = isActive ? 'inline' : 'none';
            }
        });
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Check if language is RTL
    isRTL() {
        return ['ar', 'he', 'fa'].includes(this.currentLang);
    }
}

// Create global instance
const i18n = new I18n();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init().then(() => {
        console.log(`i18n initialized with language: ${i18n.getCurrentLanguage()}`);
    });
});

// Export for use in other scripts
window.i18n = i18n;
