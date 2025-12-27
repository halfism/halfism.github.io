---
layout: default
title: 首页
lang: zh
---

{% include header.html %}

<main class="pt-20">
    <!-- 英雄区域 -->
    <section class="py-16 md:py-24 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="md:w-1/2 space-y-4">
                    <h1 class="text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-dark">
                        你好，我是 <span class="text-primary">halfism</span>
                    </h1>
                    <p class="text-lg md:text-xl text-gray-600 max-w-lg">
                        一位热爱通过代码创造有意义且高效解决方案的开发者。
                    </p>
                    <div class="flex flex-wrap gap-3 pt-2">
                        <a href="#projects" class="neumorphic-button primary">
                            查看我的作品
                        </a>
                        <a href="#contact" class="neumorphic-button">
                            联系我
                        </a>
                    </div>
                    <div class="flex items-center gap-3 pt-4">
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="neumorphic-icon w-10 h-10">
                            <i class="fa fa-github text-lg"></i>
                        </a>
                        <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="neumorphic-icon w-10 h-10">
                            <i class="fa fa-twitter text-lg"></i>
                        </a>
                        <a href="#" class="neumorphic-icon w-10 h-10">
                            <i class="fa fa-linkedin text-lg"></i>
                        </a>
                        <a href="#" class="neumorphic-icon w-10 h-10">
                            <i class="fa fa-youtube-play text-lg"></i>
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="w-64 h-64 md:w-80 md:h-80 relative">
                        <div class="neumorphic-icon w-full h-full rounded-full flex items-center justify-center">
                            <span class="text-4xl font-bold text-primary">H</span>
                        </div>
                        <!-- 浮动技能标签 -->
                        <div class="absolute -top-4 -left-4 neumorphic-card p-3 rounded-lg flex items-center gap-2 transform rotate-[-5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-code text-primary text-xl"></i>
                            <span class="font-medium">开发者</span>
                        </div>
                        <div class="absolute -bottom-6 -right-6 neumorphic-card p-3 rounded-lg flex items-center gap-2 transform rotate-[5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-lightbulb-o text-yellow-500 text-xl"></i>
                            <span class="font-medium">创新者</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">关于我</h2>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div class="max-w-3xl mx-auto">
                <div class="neumorphic-card p-6">
                    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                        你好！我是 <strong class="text-primary">halfism</strong>，一位对创造高效、美观且实用软件充满热情的开发者。我喜欢解决复杂问题，并通过代码将想法变为现实。
                    </p>
                    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                        我的编程之旅始于几年前，从那时起我就一直在不断学习和扩展自己的技能。我相信应该编写干净、可维护的代码，并遵循最佳实践来交付高质量的解决方案。
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        当我不在编码时，你可能会发现我在探索新技术、为开源项目做贡献，或者与开发者社区分享我的知识。
                    </p>

                    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="neumorphic-card p-5">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 neumorphic-icon">
                                <i class="fa fa-code-fork text-primary text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">开源贡献</h3>
                            <p class="text-gray-600">积极参与各种开源项目，并维护自己的代码仓库。</p>
                        </div>
                        <div class="neumorphic-card p-5">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 neumorphic-icon">
                                <i class="fa fa-graduation-cap text-green-600 text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">终身学习</h3>
                            <p class="text-gray-600">不断扩展知识面，紧跟最新技术趋势。</p>
                        </div>
                        <div class="neumorphic-card p-5">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 neumorphic-icon">
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
    <section id="projects" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">我的项目</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">探索我的一些近期作品和贡献。点击任意项目可在 GitHub 上查看更多详情。</p>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- 项目卡片 1 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full">
                            JavaScript
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Web 应用程序</h3>
                    <p class="text-gray-600 mb-3">具有响应式设计和现代 UI 组件的全功能 Web 应用程序。实现了用户认证、实时数据同步和个性化仪表板等功能。</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">React</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Node.js</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">MongoDB</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="mr-3"><i class="fa fa-star mr-1"></i> 120</span>
                        <span><i class="fa fa-code-fork mr-1"></i> 35</span>
                    </div>
                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- 项目卡片 2 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-green-600 text-white">
                            Python
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">数据分析工具</h3>
                    <p class="text-gray-600 mb-3">具有高级统计功能的数据可视化和分析的强大工具。帮助用户识别数据趋势，生成报告并做出数据驱动的决策。</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Python</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Pandas</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Matplotlib</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="mr-3"><i class="fa fa-star mr-1"></i> 89</span>
                        <span><i class="fa fa-code-fork mr-1"></i> 24</span>
                    </div>
                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- 项目卡片 3 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-blue-600 text-white">
                            Go
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">API 服务</h3>
                    <p class="text-gray-600 mb-3">具有身份验证和速率限制功能的高性能 RESTful API 服务。支持数千个并发请求，平均响应时间低于 50ms。</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Go</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">PostgreSQL</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Docker</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="mr-3"><i class="fa fa-star mr-1"></i> 210</span>
                        <span><i class="fa fa-code-fork mr-1"></i> 67</span>
                    </div>
                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- 项目卡片 4 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project4/600/400" alt="Project 4" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-orange-500 text-white">
                            移动端
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">移动应用</h3>
                    <p class="text-gray-600 mb-3">具有离线功能和同步特性的跨平台移动应用程序。已在 App Store 和 Google Play 上获得 4.8 星评分。</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Flutter</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Firebase</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Redux</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="mr-3"><i class="fa fa-star mr-1"></i> 156</span>
                        <span><i class="fa fa-code-fork mr-1"></i> 42</span>
                    </div>
                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- 项目卡片 5 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project5/600/400" alt="Project 5" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-purple-600 text-white">
                            DevOps
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">CI/CD 流水线</h3>
                    <p class="text-gray-600 mb-3">具有测试、构建和部署阶段的自动化部署流水线。将部署时间从 2 小时缩短到 15 分钟，减少了 90% 的人为错误。</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">GitHub Actions</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Kubernetes</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Terraform</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="mr-3"><i class="fa fa-star mr-1"></i> 98</span>
                        <span><i class="fa fa-code-fork mr-1"></i> 31</span>
                    </div>
                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- 项目卡片 6 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project6/600/400" alt="Project 6" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-red-500 text-white">
                            机器学习
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">机器学习模型</h3>
                    <p class="text-gray-600 mb-3">具有用户友好界面的预测分析机器学习模型。准确率达到 94%，已成功应用于多个业务场景。</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">TensorFlow</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Keras</span>
                        <span class="neumorphic-button reverse text-xs px-3 py-1 rounded text-gray-700 bg-transparent">Flask</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="mr-3"><i class="fa fa-star mr-1"></i> 142</span>
                        <span><i class="fa fa-code-fork mr-1"></i> 53</span>
                    </div>
                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        在 GitHub 上查看 <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>
            </div>

            <div class="text-center mt-10">
                <a href="https://github.com/{{ site.github_username }}?tab=repositories" target="_blank" class="neumorphic-button primary">
                    查看所有项目 <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- 技能展示 -->
    <section id="skills" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">我的技能</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">在我的开发生涯中，我使用过各种技术和工具。</p>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- 技能图表 -->
                <div class="neumorphic-card p-6">
                    <h3 class="text-xl font-bold mb-6">技术熟练度</h3>
                    <div class="h-80">
                        <canvas id="skillsChart"></canvas>
                    </div>
                </div>

                <!-- 技能列表 -->
                <div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <!-- 技能类别 1 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-code text-primary"></i>
                                </div>
                                <h4 class="font-bold text-lg">编程语言</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">JavaScript / TypeScript</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 90%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Python</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Go</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 75%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Java</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 70%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 技能类别 2 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-globe text-green-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">Web 开发</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">React / Vue</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 90%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Node.js</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">HTML / CSS</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 95%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">REST APIs</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 85%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 技能类别 3 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-database text-purple-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">数据库</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">MongoDB</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">PostgreSQL</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 80%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">MySQL</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 75%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Redis</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 70%"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 技能类别 4 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-cogs text-yellow-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">DevOps</h4>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Docker</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 85%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">Git</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 90%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">CI/CD</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 80%"></div>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between">
                                    <span class="text-gray-700">AWS / Azure</span>
                                    <div class="neumorphic-progress-container w-24">
                                        <div class="neumorphic-progress-bar" style="width: 75%"></div>
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
    <section id="contact" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">联系我</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">有项目想法或想合作吗？随时联系我。</p>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            </div>

            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="neumorphic-card p-6">
                        <h3 class="text-xl font-bold mb-6">联系信息</h3>

                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-envelope text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">邮箱</h4>
                                    <p class="text-gray-600 mt-1">{{ site.email }}</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-github text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">GitHub</h4>
                                    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="text-primary hover:underline mt-1 inline-block">github.com/{{ site.github_username }}</a>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-twitter text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Twitter</h4>
                                    <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="text-primary hover:underline mt-1 inline-block">@{{ site.twitter_username }}</a>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-map-marker text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">位置</h4>
                                    <p class="text-gray-600 mt-1">全球开发者</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-calendar text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">预约通话</h4>
                                    <a href="#" class="text-primary hover:underline mt-1 inline-block">安排一对一咨询</a>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <h4 class="font-medium text-gray-900 mb-4">可提供服务</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">自由职业工作</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">开源协作</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">技术演讲</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">指导新人</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">代码审查</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">架构咨询</span>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <h4 class="font-medium text-gray-900 mb-4">客户评价</h4>
                            <div class="neumorphic-card p-4">
                                <p class="text-gray-600 italic">"Halfism是一位出色的专业人士，他不仅技术能力出众，而且沟通能力很强。我们的项目在他的帮助下提前完成了交付。"</p>
                                <p class="text-gray-900 font-medium mt-3">— 张总, 科技公司CEO</p>
                            </div>
                        </div>
                    </div>

                    <div class="neumorphic-card p-6">
                        <h3 class="text-xl font-bold mb-6">给我留言</h3>

                        <form>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                                    <input type="text" id="name" class="neumorphic-input text-sm" placeholder="张三">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                                    <input type="email" id="email" class="neumorphic-input text-sm" placeholder="zhangsan@example.com">
                                </div>
                            </div>

                            <div class="mb-4">
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主题</label>
                                <input type="text" id="subject" class="neumorphic-input text-sm" placeholder="项目咨询">
                            </div>

                            <div class="mb-4">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息</label>
                                <textarea id="message" rows="5" class="neumorphic-textarea text-sm" placeholder="告诉我你的项目或询问..."></textarea>
                            </div>

                            <button type="submit" class="w-full neumorphic-button primary">
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