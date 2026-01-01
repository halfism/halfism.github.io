---
layout: default
title: 首页
lang: zh
---

{% include header.html %}

<main class="pt-20">
    <!-- Hero Section -->
    <section class="py-20 md:py-32 bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div class="md:w-1/2 space-y-6">
                    <div class="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                        👋 欢迎来到我的个人主页
                    </div>
                    <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        你好，我是 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">halfism</span>
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        一位热爱通过代码创造有意义且高效解决方案的开发者。专注于构建现代 Web 应用与提升用户体验。
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" class="px-6 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
                            查看我的作品
                        </a>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-all flex items-center gap-2">
                            <i class="fa fa-github text-lg"></i> GitHub
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center relative">
                    <div class="relative w-64 h-64 md:w-80 md:h-80">
                        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                        <div class="w-full h-full rounded-2xl bg-white dark:bg-gray-800 shadow-2xl flex items-center justify-center relative z-10 border border-gray-100 dark:border-gray-700 rotate-3 hover:rotate-0 transition-all duration-500">
                            <span class="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500">H</span>
                        </div>
                        
                        <!-- Floating Cards -->
                        <div class="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style="animation-duration: 3s;">
                            <div class="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                <i class="fa fa-code text-xl"></i>
                            </div>
                            <div>
                                <div class="text-sm font-bold text-gray-900 dark:text-white">全栈开发</div>
                                <div class="text-xs text-gray-500">Web & Mobile</div>
                            </div>
                        </div>

                        <div class="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style="animation-duration: 4s; animation-delay: 1s;">
                            <div class="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                <i class="fa fa-lightbulb-o text-xl"></i>
                            </div>
                            <div>
                                <div class="text-sm font-bold text-gray-900 dark:text-white">创新思维</div>
                                <div class="text-xs text-gray-500">Problem Solver</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Me -->
    <section id="about" class="py-20 bg-gray-50 dark:bg-[#0d1117]/50 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">关于我</h2>
                <div class="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="card-base p-8 md:p-10 bg-white dark:bg-[#161b22]">
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        你好！我是 <strong class="text-primary">halfism</strong>，一位对创造高效、美观且实用软件充满热情的开发者。我喜欢解决复杂问题，并通过代码将想法变为现实。
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        我的编程之旅始于几年前，从那时起我就一直在不断学习和扩展自己的技能。我相信应该编写干净、可维护的代码，并遵循最佳实践来交付高质量的解决方案。
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        当我不在编码时，你可能会发现我在探索新技术、为开源项目做贡献，或者与开发者社区分享我的知识。
                    </p>

                    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-4 text-xl">
                                <i class="fa fa-code-fork"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">开源贡献</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">积极参与各种开源项目，并维护自己的代码仓库。</p>
                        </div>
                        <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-green-500/30 transition-colors">
                            <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-4 text-xl">
                                <i class="fa fa-graduation-cap"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">终身学习</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">不断扩展知识面，紧跟最新技术趋势。</p>
                        </div>
                        <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-purple-500/30 transition-colors">
                            <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-4 text-xl">
                                <i class="fa fa-users"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">团队协作</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">喜欢在团队中工作，参与协作开发项目。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-20 bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div class="text-left">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">精选项目</h2>
                    <p class="text-gray-500 dark:text-gray-400">探索我的一些近期作品和贡献</p>
                </div>
                <a href="https://github.com/{{ site.github_username }}?tab=repositories" target="_blank" class="text-primary font-medium hover:text-blue-700 flex items-center gap-2 group">
                    查看所有项目 <i class="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1 -->
                <div class="card-base group overflow-hidden bg-white dark:bg-[#161b22] hover:shadow-xl transition-all duration-300">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                            JavaScript
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Web 应用程序</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">具有响应式设计和现代 UI 组件的全功能 Web 应用程序。实现了用户认证、实时数据同步和个性化仪表板等功能。</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">React</span>
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Node.js</span>
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">MongoDB</span>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div class="flex items-center gap-4 text-sm text-gray-500">
                                <span><i class="fa fa-star mr-1"></i> 120</span>
                                <span><i class="fa fa-code-fork mr-1"></i> 35</span>
                            </div>
                            <a href="https://github.com/{{ site.github_username }}" target="_blank" class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fa fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Project Card 2 -->
                <div class="card-base group overflow-hidden bg-white dark:bg-[#161b22] hover:shadow-xl transition-all duration-300">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                            Python
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">数据分析工具</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">具有高级统计功能的数据可视化和分析的强大工具。帮助用户识别数据趋势，生成报告并做出数据驱动的决策。</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Python</span>
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Pandas</span>
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Matplotlib</span>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div class="flex items-center gap-4 text-sm text-gray-500">
                                <span><i class="fa fa-star mr-1"></i> 89</span>
                                <span><i class="fa fa-code-fork mr-1"></i> 24</span>
                            </div>
                            <a href="https://github.com/{{ site.github_username }}" target="_blank" class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fa fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Project Card 3 -->
                <div class="card-base group overflow-hidden bg-white dark:bg-[#161b22] hover:shadow-xl transition-all duration-300">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                            Go
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">API 服务</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">具有身份验证和速率限制功能的高性能 RESTful API 服务。支持数千个并发请求，平均响应时间低于 50ms。</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Go</span>
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">PostgreSQL</span>
                            <span class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Docker</span>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div class="flex items-center gap-4 text-sm text-gray-500">
                                <span><i class="fa fa-star mr-1"></i> 210</span>
                                <span><i class="fa fa-code-fork mr-1"></i> 67</span>
                            </div>
                            <a href="https://github.com/{{ site.github_username }}" target="_blank" class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fa fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-20 bg-gray-50 dark:bg-[#0d1117]/50 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">我的技能</h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">不断学习，追求卓越</p>
                <div class="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Skills List -->
                <div class="space-y-6">
                    <div class="card-base p-6 bg-white dark:bg-[#161b22]">
                        <h3 class="text-lg font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <i class="fa fa-code text-primary"></i> 核心技术
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript / TypeScript</span>
                                    <span class="text-sm font-medium text-gray-500">90%</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">React / Vue</span>
                                    <span class="text-sm font-medium text-gray-500">85%</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js / Go</span>
                                    <span class="text-sm font-medium text-gray-500">80%</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">HTML5 / CSS3 / Tailwind</span>
                                    <span class="text-sm font-medium text-gray-500">95%</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Other Skills Section could be added here similar to Chinese version if it exists there, but for now I'll stick to what I see -->
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">联系我</h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    对合作感兴趣或有任何问题？欢迎随时联系！
                </p>
                <a href="mailto:{{ site.email }}" class="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30">
                    <i class="fa fa-envelope"></i> 发送邮件
                </a>
            </div>
        </div>
    </section>
    <!-- Contact -->
    <section id="contact" class="py-20 bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">准备好开始合作了吗？</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    无论您是有项目想法，还是只想打个招呼，我都随时欢迎。
                </p>
                <div class="flex justify-center gap-4">
                    <a href="mailto:{{ site.email }}" class="px-8 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
                        发送邮件
                    </a>
                    <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="px-8 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-all">
                        Twitter 私信
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

{% include footer.html %}
