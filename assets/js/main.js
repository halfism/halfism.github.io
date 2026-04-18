/**
 * halfism.github.io - Main JavaScript
 * Version: 3.0 (Refactored)
 */

(function() {
    'use strict';

    var SCROLL_THRESHOLD = 300;
    var ANIMATION_THRESHOLD = 0.1;

    function $(selector) { return document.querySelector(selector); }
    function $$(selector) { return document.querySelectorAll(selector); }

    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() { func.apply(context, args); }, wait);
        };
    }

    // ============================================
    // Theme Management (unified data-theme only)
    // ============================================
    var ThemeManager = {
        STORAGE_KEY: 'theme',

        init: function() {
            var theme = localStorage.getItem(this.STORAGE_KEY) ||
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            this.applyTheme(theme);
        },

        applyTheme: function(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            this.updateUI(theme === 'dark');
        },

        toggle: function() {
            var current = document.documentElement.getAttribute('data-theme') || 'light';
            var next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem(this.STORAGE_KEY, next);
            this.applyTheme(next);

            // Update aria-pressed on toggle button
            var toggleBtn = document.getElementById('theme-toggle-btn');
            if (toggleBtn) toggleBtn.setAttribute('aria-pressed', next === 'dark');

            return next;
        },

        updateUI: function(isDark) {
            var theme = isDark ? 'dark' : 'light';

            var mobileIcon = $('#theme-icon-mobile');
            var footerIcon = $('#theme-icon-footer');
            var switchIcon = $('#theme-switch-icon');

            if (mobileIcon) mobileIcon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
            if (footerIcon) footerIcon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
            if (switchIcon) switchIcon.className = isDark ? 'fa fa-moon-o' : 'fa fa-sun-o';
            if (switchIcon) switchIcon.style.color = isDark ? '#c9d1d9' : '#f59e0b';

            var knob = $('#theme-switch-knob');
            if (knob) {
                if (isDark) { knob.classList.remove('translate-x-1'); knob.classList.add('translate-x-6'); }
                else { knob.classList.add('translate-x-1'); knob.classList.remove('translate-x-6'); }
            }

            var toggleBtn = document.getElementById('theme-toggle-btn');
            if (toggleBtn) toggleBtn.setAttribute('aria-pressed', isDark);
        }
    };

    // ============================================
    // Back to Top
    // ============================================
    var BackToTop = {
        element: null,
        isVisible: false,

        init: function() {
            this.element = $('#back-to-top');
            if (!this.element) return;
            this.bindEvents();
        },

        bindEvents: function() {
            var self = this;
            window.addEventListener('scroll', debounce(function() { self.onScroll(); }, 10));
            this.element.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },

        onScroll: function() {
            var shouldShow = window.scrollY > SCROLL_THRESHOLD;
            if (shouldShow !== this.isVisible) {
                this.isVisible = shouldShow;
                if (shouldShow) {
                    this.element.style.display = 'block';
                    this.element.classList.remove('opacity-0', 'invisible');
                    this.element.classList.add('opacity-100', 'visible');
                } else {
                    this.element.classList.add('opacity-0', 'invisible');
                    this.element.classList.remove('opacity-100', 'visible');
                    var self = this;
                    setTimeout(function() {
                        if (!self.isVisible) self.element.style.display = 'none';
                    }, 300);
                }
            }
        }
    };

    // ============================================
    // Reading Progress
    // ============================================
    var ReadingProgress = {
        element: null,

        init: function() {
            this.element = $('#reading-progress');
            if (!this.element) return;
            this.bindEvents();
        },

        bindEvents: function() {
            var self = this;
            window.addEventListener('scroll', debounce(function() { self.update(); }, 10));
            this.update();
        },

        update: function() {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            this.element.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }
    };

    // ============================================
    // Scroll Animations
    // ============================================
    var ScrollAnimations = {
        init: function() {
            if (!('IntersectionObserver' in window)) {
                $$('.animate-on-scroll').forEach(function(el) { el.classList.add('is-visible'); });
                return;
            }

            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: ANIMATION_THRESHOLD });

            $$('.animate-on-scroll').forEach(function(el) { observer.observe(el); });
        }
    };

    // ============================================
    // Mobile Menu
    // ============================================
    var MobileMenu = {
        toggle: null,
        menu: null,
        isOpen: false,

        init: function() {
            this.toggle = $('#menu-toggle');
            this.menu = $('#mobile-menu');
            if (!this.toggle || !this.menu) return;
            this.bindEvents();
        },

        bindEvents: function() {
            var self = this;
            this.toggle.addEventListener('click', function() { self.toggleMenu(); });
            $$('#mobile-menu a').forEach(function(link) {
                link.addEventListener('click', function() {
                    if (!self.menu.classList.contains('hidden')) self.closeMenu();
                });
            });
        },

        toggleMenu: function() {
            this.isOpen = !this.isOpen;
            this.menu.classList.toggle('hidden', !this.isOpen);
            this.toggle.setAttribute('aria-expanded', this.isOpen);
            var icon = this.toggle.querySelector('i');
            if (icon) icon.className = this.isOpen ? 'fa fa-times text-xl' : 'fa fa-bars text-xl';
        },

        closeMenu: function() {
            this.isOpen = false;
            this.menu.classList.add('hidden');
            this.toggle.setAttribute('aria-expanded', 'false');
            var icon = this.toggle.querySelector('i');
            if (icon) icon.className = 'fa fa-bars text-xl';
        }
    };

    // ============================================
    // Smooth Scroll
    // ============================================
    var SmoothScroll = {
        init: function() {
            $$('a[href^="#"]').forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    var href = this.getAttribute('href');
                    if (href === '#' || href === '') return;
                    var target = $(href);
                    if (target) {
                        e.preventDefault();
                        window.scrollTo({
                            top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                            behavior: 'smooth'
                        });
                        MobileMenu.closeMenu();
                    }
                });
            });
        }
    };

    // ============================================
    // Skill Progress Animation
    // ============================================
    var SkillProgress = {
        init: function() {
            if (!('IntersectionObserver' in window)) return;
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.progress-bar__fill').forEach(function(bar) {
                            var width = bar.style.width;
                            bar.style.width = '0%';
                            setTimeout(function() { bar.style.width = width; }, 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            $$('.skill-progress, .progress-bar').forEach(function(el) { observer.observe(el); });
        }
    };

    // ============================================
    // Public API
    // ============================================
    window.toggleTheme = function() { return ThemeManager.toggle(); };

    // ============================================
    // Initialize
    // ============================================
    function init() {
        ThemeManager.init();
        BackToTop.init();
        ReadingProgress.init();
        ScrollAnimations.init();
        MobileMenu.init();
        SmoothScroll.init();
        SkillProgress.init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
