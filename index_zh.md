---
layout: default
title: 首页
lang: zh
---

{% include header.html %}

<main class="pt-24">
    <!-- 英雄区域 -->
    <section class="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="md:w-1/2 space-y-6">
                    <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark">
                        你好，我是 <span class="text-primary">halfism</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-600 max-w-lg">
                        一位热爱通过代码创造有意义且高效解决方案的开发者。
                    </p>
                    <div class="flex flex-wrap gap-4 pt-2">
                        <a href="#projects" class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-custom font-medium flex items-center gap-2 shadow-lg shadow-primary/20">
                            查看我的作品 <i class="fa fa-arrow-right"></i>
                        </a>
                        <a href="#contact" class="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg transition-custom font-medium border border-gray-200 flex items-center gap-2 shadow-md">
                            联系我 <i class="fa fa-envelope"></i>
                        </a>
                    </div>
                    <div class="flex items-center gap-4 pt-4">
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-custom">
                            <i class="fa fa-github text-xl"></i>
                        </a>
                        <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white transition-custom">
                            <i class="fa fa-twitter text-xl"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-700 hover:text-white transition-custom">
                            <i class="fa fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-custom">
                            <i class="fa fa-youtube-play text-xl"></i>
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 relative">
                    <div class="w-full max-w-md mx-auto">
                        <div class="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform hover:scale-[1.02] transition-custom">
                            <img src="https://picsum.photos/seed/developer/600/600" alt="halfism profile" class="w-full h-auto">
                        </div>
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/30 rounded-2xl blur-3xl -z-10"></div>

                        <!-- 浮动技能标签 -->
                        <div class="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 transform rotate-[-5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-code text-primary text-xl"></i>
                            <span class="font-medium">开发者</span>
                        </div>
                        <div class="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 transform rotate-[5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-lightbulb-o text-yellow-500 text-xl"></i>
                            <span class="font-medium">创新者</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">关于我</h2>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div class="max-w-3xl mx-auto">
                <div class="bg-gray-50 rounded-2xl p-8 shadow-sm">
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                        你好！我是 <strong class="text-primary">halfism</strong>，一位对创造高效、美观且实用软件充满热情的开发者。我喜欢解决复杂问题，并通过代码将想法变为现实。
                    </p>
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                        我的编程之旅始于几年前，从那时起我就一直在不断学习和扩展自己的技能。我相信应该编写干净、可维护的代码，并遵循最佳实践来交付高质量的解决方案。
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        当我不在编码时，你可能会发现我在探索新技术、为开源项目做贡献，或者与开发者社区分享我的知识。
                    </p>

                    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <i class="fa fa-code-fork text-primary text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">开源贡献</h3>
                            <p class="text-gray-600">积极参与各种开源项目，并维护自己的代码仓库。</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <i class="fa fa-graduation-cap text-green-600 text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">终身学习</h3>
                            <p class="text-gray-600">不断扩展知识面，紧跟最新技术趋势。</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <i class="fa fa-users text-purple-600 text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">团队协作</h3>
                            <p class="text-gray-600">喜欢在团队中工作，参与协作开发项目。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 项目展示 -->
    <section id="projects" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">我的项目</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">探索我的一些近期作品和贡献。点击任意项目可在 GitHub 上查看更多详情。</p>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 项目卡片 1 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            JavaScript
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">Web 应用程序</h3>
                        <p class="text-gray-600 mb-4">具有响应式设计和现代 UI 组件的全功能 Web 应用程序。实现了用户认证、实时数据同步和个性化仪表板等功能。</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">React</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Node.js</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">MongoDB</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-3"><i class="fa fa-star mr-1"></i> 120</span>
                            <span><i class="fa fa-code-fork mr-1"></i> 35</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- 项目卡片 2 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Python
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">数据分析工具</h3>
                        <p class="text-gray-600 mb-4">具有高级统计功能的数据可视化和分析的强大工具。帮助用户识别数据趋势，生成报告并做出数据驱动的决策。</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Python</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Pandas</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Matplotlib</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-3"><i class="fa fa-star mr-1"></i> 89</span>
                            <span><i class="fa fa-code-fork mr-1"></i> 24</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- 项目卡片 3 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Go
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">API 服务</h3>
                        <p class="text-gray-600 mb-4">具有身份验证和速率限制功能的高性能 RESTful API 服务。支持数千个并发请求，平均响应时间低于 50ms。</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Go</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Docker</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-3"><i class="fa fa-star mr-1"></i> 210</span>
                            <span><i class="fa fa-code-fork mr-1"></i> 67</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- 项目卡片 4 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project4/600/400" alt="Project 4" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                            移动端
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">移动应用</h3>
                        <p class="text-gray-600 mb-4">具有离线功能和同步特性的跨平台移动应用程序。已在 App Store 和 Google Play 上获得 4.8 星评分。</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Flutter</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Firebase</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Redux</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-3"><i class="fa fa-star mr-1"></i> 156</span>
                            <span><i class="fa fa-code-fork mr-1"></i> 42</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- 项目卡片 5 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project5/600/400" alt="Project 5" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            DevOps
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">CI/CD 流水线</h3>
                        <p class="text-gray-600 mb-4">具有测试、构建和部署阶段的自动化部署流水线。将部署时间从 2 小时缩短到 15 分钟，减少了 90% 的人为错误。</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">GitHub Actions</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Kubernetes</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Terraform</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-3"><i class="fa fa-star mr-1"></i> 98</span>
                            <span><i class="fa fa-code-fork mr-1"></i> 31</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- 项目卡片 6 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project6/600/400" alt="Project 6" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                            机器学习
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">机器学习模型</h3>
                        <p class="text-gray-600 mb-4">具有用户友好界面的预测分析机器学习模型。准确率达到 94%，已成功应用于多个业务场景。</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">TensorFlow</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Keras</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Flask</span>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <span class="mr-3"><i class="fa fa-star mr-1"></i> 142</span>
                            <span><i class="fa fa-code-fork mr-1"></i> 53</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="https://github.com/{{ site.github_username }}?tab=repositories" target="_blank" class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-custom font-medium shadow-lg shadow-primary/20">
                    查看所有项目 <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- 技能展示 -->
    <section id="skills" class="py-20 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">我的技能</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">在我的开发生涯中，我使用过各种技术和工具。</p>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- 技能图表 -->
                <div class="bg-gray-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-6">技术熟练度</h3>
                    <div class="h-80">
                        <canvas id="skillsChart"></canvas>
                    </div>
                </div>

                <!-- 技能列表 -->
                <div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- 技能类别 1 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-code text-primary"></i>
                                </div>
                                <h4 class="font-bold text-lg">编程语言</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">JavaScript / TypeScript</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Python</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Go</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Java</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-primary h-2 rounded-full" style="width: 70%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 技能类别 2 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-globe text-green-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">Web 开发</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">React / Vue</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-green-600 h-2 rounded-full" style="width: 90%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Node.js</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">HTML / CSS</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-green-600 h-2 rounded-full" style="width: 95%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">REST APIs</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 技能类别 3 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-database text-purple-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">数据库</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">MongoDB</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">PostgreSQL</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-purple-600 h-2 rounded-full" style="width: 80%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">MySQL</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-purple-600 h-2 rounded-full" style="width: 75%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Redis</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-purple-600 h-2 rounded-full" style="width: 70%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 技能类别 4 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-cogs text-yellow-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">DevOps</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Docker</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-yellow-600 h-2 rounded-full" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Git</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-yellow-600 h-2 rounded-full" style="width: 90%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">CI/CD</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-yellow-600 h-2 rounded-full" style="width: 80%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">AWS / Azure</span>
                                    <div class="w-24 bg-gray-200 rounded-full h-2">
                                        <div class="bg-yellow-600 h-2 rounded-full" style="width: 75%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 联系部分 -->
    <section id="contact" class="py-20 bg-gradient-to-br from-primary/5 to-indigo-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">联系我</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">有项目想法或想合作吗？随时联系我。</p>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div class="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
                        <h3 class="text-xl font-bold mb-6">联系信息</h3>

                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                    <i class="fa fa-envelope text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">邮箱</h4>
                                    <p class="text-gray-600 mt-1">{{ site.email }}</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                    <i class="fa fa-github text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">GitHub</h4>
                                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="text-primary hover:underline mt-1 inline-block">github.com/{{ site.github_username }}</a>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                    <i class="fa fa-twitter text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Twitter</h4>
                                    <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="text-primary hover:underline mt-1 inline-block">@{{ site.twitter_username }}</a>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                    <i class="fa fa-map-marker text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">位置</h4>
                                    <p class="text-gray-600 mt-1">全球开发者</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                    <i class="fa fa-calendar text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">预约通话</h4>
                                    <a href="#" class="text-primary hover:underline mt-1 inline-block">安排一对一咨询</a>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h4 class="font-medium text-gray-900 mb-4">可提供服务</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">自由职业工作</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">开源协作</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">技术演讲</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">指导新人</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">代码审查</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">架构咨询</span>
                            </div>
                        </div>
                        
                        <div class="mt-10">
                            <h4 class="font-medium text-gray-900 mb-4">客户评价</h4>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="text-gray-600 italic">"Halfism是一位出色的专业人士，他不仅技术能力出众，而且沟通能力很强。我们的项目在他的帮助下提前完成了交付。"</p>
                                <p class="text-gray-900 font-medium mt-3">— 张总, 科技公司CEO</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm">
                        <h3 class="text-xl font-bold mb-6">给我留言</h3>

                        <form>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="张三">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="zhangsan@example.com">
                                </div>
                            </div>

                            <div class="mb-6">
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主题</label>
                                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="项目咨询">
                            </div>

                            <div class="mb-6">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息</label>
                                <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="告诉我你的项目或询问..."></textarea>
                            </div>

                            <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-custom font-medium flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                                发送消息 <i class="fa fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <script>
        // 技能图表
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('skillsChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: [
                        '前端开发',
                        '后端开发',
                        '数据库',
                        '移动端',
                        'DevOps',
                        '机器学习'
                    ],
                    datasets: [{
                        label: '技能水平',
                        data: [90, 85, 80, 70, 80, 65],
                        fill: true,
                        backgroundColor: 'rgba(22, 93, 255, 0.2)',
                        borderColor: 'rgba(22, 93, 255, 1)',
                        pointBackgroundColor: 'rgba(22, 93, 255, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(22, 93, 255, 1)'
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
        });
    </script>
</main>

{% include footer.html %}