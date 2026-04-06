/**
 * halfism.github.io - Main JavaScript
 * Version: 2.0
 * Based on: SOLUTION.md Architecture
 */

(function() {
    'use strict';

    // ============================================
    // Constants
    // ============================================
    var SCROLL_THRESHOLD = 300;
    var ANIMATION_THRESHOLD = 0.1;

    // ============================================
    // Utilities
    // ============================================
    function $(selector) {
        return document.querySelector(selector);
    }

    function $$(selector) {
        return document.querySelectorAll(selector);
    }

    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }

    // ============================================
    // Theme Management
    // ============================================
    var ThemeManager = {
        STORAGE_KEY: 'theme',

        init: function() {
            var theme = localStorage.getItem(this.STORAGE_KEY) ||
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.setAttribute('data-theme', 'light');
            }

            this.updateUI(theme === 'dark');
        },

        toggle: function() {
            var isDark = document.documentElement.classList.toggle('dark');
            var theme = isDark ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);
            this.updateUI(isDark);
            return theme;
        },

        updateUI: function(isDark) {
            var theme = isDark ? 'dark' : 'light';
            
            // Update icons
            var mobileIcon = $('#theme-icon-mobile');
            var footerIcon = $('#theme-icon-footer');
            var switchIcon = $('#theme-switch-icon');
            
            if (mobileIcon) mobileIcon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
            if (footerIcon) footerIcon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
            if (switchIcon) switchIcon.className = theme === 'dark' ? 'fa fa-moon-o text-gray-300' : 'fa fa-sun-o text-yellow-500';
            
            // Update switch knob
            var knob = $('#theme-switch-knob');
            if (knob) {
                if (isDark) {
                    knob.classList.remove('translate-x-1');
                    knob.classList.add('translate-x-6');
                } else {
                    knob.classList.add('translate-x-1');
                    knob.classList.remove('translate-x-6');
                }
            }
        },

        getCurrentTheme: function() {
            return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        }
    };

    // ============================================
    // Back to Top Button
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
            
            // Scroll event with debounce
            window.addEventListener('scroll', debounce(function() {
                self.onScroll();
            }, 10));

            // Click event
            this.element.addEventListener('click', function() {
                self.scrollToTop();
            });
        },

        onScroll: function() {
            var shouldShow = window.scrollY > SCROLL_THRESHOLD;
            
            if (shouldShow !== this.isVisible) {
                this.isVisible = shouldShow;
                
                if (shouldShow) {
                    this.element.classList.remove('opacity-0', 'pointer-events-none');
                    this.element.classList.add('opacity-100', 'pointer-events-auto');
                } else {
                    this.element.classList.add('opacity-0', 'pointer-events-none');
                    this.element.classList.remove('opacity-100', 'pointer-events-auto');
                }
            }
        },

        scrollToTop: function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    // ============================================
    // Reading Progress Bar
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
            window.addEventListener('scroll', debounce(function() {
                self.update();
            }, 10));
            
            // Initial update
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
        observer: null,

        init: function() {
            if (!('IntersectionObserver' in window)) {
                // Fallback: show all elements
                $$('.animate-on-scroll').forEach(function(el) {
                    el.classList.add('animate-in');
                });
                return;
            }

            var self = this;
            this.observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        self.observer.unobserve(entry.target);
                    }
                });
            }, { threshold: ANIMATION_THRESHOLD });

            $$('.animate-on-scroll').forEach(function(el) {
                self.observer.observe(el);
            });
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
            
            this.toggle.addEventListener('click', function() {
                self.toggleMenu();
            });

            // Close on link click
            $$('#mobile-menu a').forEach(function(link) {
                link.addEventListener('click', function() {
                    if (!self.menu.classList.contains('hidden')) {
                        self.closeMenu();
                    }
                });
            });
        },

        toggleMenu: function() {
            this.isOpen = !this.isOpen;
            this.menu.classList.toggle('hidden', !this.isOpen);
            
            // Update icon
            var icon = this.toggle.querySelector('i');
            if (icon) {
                icon.className = this.isOpen ? 'fa fa-times text-xl' : 'fa fa-bars text-xl';
            }
        },

        closeMenu: function() {
            this.isOpen = false;
            this.menu.classList.add('hidden');
            var icon = this.toggle.querySelector('i');
            if (icon) {
                icon.className = 'fa fa-bars text-xl';
            }
        }
    };

    // ============================================
    // Smooth Scroll
    // ============================================
    var SmoothScroll = {
        init: function() {
            var self = this;
            
            $$('a[href^="#"]').forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    self.handleClick(e, this);
                });
            });
        },

        handleClick: function(e, anchor) {
            var href = anchor.getAttribute('href');
            
            if (href === '#' || href === '') return;

            var target = $(href);
            if (target) {
                e.preventDefault();
                
                var headerOffset = 80;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                MobileMenu.closeMenu();
            }
        }
    };

    // ============================================
    // Skill Progress Animation
    // ============================================
    var SkillProgress = {
        init: function() {
            if (!('IntersectionObserver' in window)) return;

            var self = this;
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        self.animateSkillBars(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            $$('.skill-progress').forEach(function(el) {
                observer.observe(el);
            });
        },

        animateSkillBars: function(container) {
            var bars = container.querySelectorAll('.skill-progress-bar');
            bars.forEach(function(bar) {
                var width = bar.dataset.width || '0%';
                bar.style.width = '0%';
                setTimeout(function() {
                    bar.style.width = width;
                }, 100);
            });
        }
    };

    // ============================================
    // Gallery (if exists)
    // ============================================
    var Gallery = {
        init: function() {
            // Gallery functionality handled in gallery.html
            // This is a placeholder for future enhancement
        }
    };

    // ============================================
    // Public API
    // ============================================
    window.toggleTheme = function() {
        return ThemeManager.toggle();
    };

    // ============================================
    // Initialize All Modules
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

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
