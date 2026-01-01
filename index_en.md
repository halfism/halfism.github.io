---
layout: default
title: Home
lang: en
---

{% include header.html %}

<main class="pt-20">
    <!-- Hero Section -->
    <section class="py-20 md:py-32 bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div class="md:w-1/2 space-y-6">
                    <div class="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                        👋 Welcome to my portfolio
                    </div>
                    <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        Hello, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">halfism</span>
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        A passionate developer focused on creating meaningful and efficient solutions through code. Focused on building modern Web applications and improving user experience.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" class="px-6 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
                            View My Work
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
                                <div class="text-sm font-bold text-gray-900 dark:text-white">Full Stack</div>
                                <div class="text-xs text-gray-500">Web & Mobile</div>
                            </div>
                        </div>

                        <div class="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style="animation-duration: 4s; animation-delay: 1s;">
                            <div class="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                <i class="fa fa-lightbulb-o text-xl"></i>
                            </div>
                            <div>
                                <div class="text-sm font-bold text-gray-900 dark:text-white">Innovator</div>
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
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                <div class="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="card-base p-8 md:p-10 bg-white dark:bg-[#161b22]">
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Hello! I'm <strong class="text-primary">halfism</strong>, a passionate developer with a love for creating efficient, beautiful, and functional software. I enjoy tackling complex problems and turning ideas into reality through code.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        My journey in programming started several years ago, and since then, I've been constantly learning and expanding my skill set. I believe in writing clean, maintainable code and following best practices to deliver high-quality solutions.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                    </p>

                    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-4 text-xl">
                                <i class="fa fa-code-fork"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">Open Source</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Active contributor to various open-source projects and maintainer of my own repositories.</p>
                        </div>
                        <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-green-500/30 transition-colors">
                            <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-4 text-xl">
                                <i class="fa fa-graduation-cap"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">Lifelong Learner</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Constantly expanding knowledge and keeping up with the latest technology trends.</p>
                        </div>
                        <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-purple-500/30 transition-colors">
                            <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-4 text-xl">
                                <i class="fa fa-users"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">Team Player</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Enjoy working in teams and participating in collaborative development projects.</p>
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
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
                    <p class="text-gray-500 dark:text-gray-400">Explore some of my recent work and contributions</p>
                </div>
                <a href="https://github.com/{{ site.github_username }}?tab=repositories" target="_blank" class="text-primary font-medium hover:text-blue-700 flex items-center gap-2 group">
                    View All Projects <i class="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
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
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Web Application</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">Full-featured web application with responsive design and modern UI components. Implemented user authentication, real-time data synchronization, and personalized dashboards.</p>
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
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Data Analysis Tool</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">Powerful tool for data visualization and analysis with advanced statistical functions. Helps users identify data trends, generate reports, and make data-driven decisions.</p>
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
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">API Service</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">High-performance RESTful API service with authentication and rate limiting. Supports thousands of concurrent requests with sub-50ms average response time.</p>
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
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Always learning, striving for excellence</p>
                <div class="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Skills List -->
                <div class="space-y-6">
                    <div class="card-base p-6 bg-white dark:bg-[#161b22]">
                        <h3 class="text-lg font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <i class="fa fa-code text-primary"></i> Core Technologies
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
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Interested in working together or have any questions? Feel free to reach out!
                </p>
                <a href="mailto:{{ site.email }}" class="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30">
                    <i class="fa fa-envelope"></i> Contact Me
                </a>
            </div>
        </div>
    </section>
    <!-- Contact -->
    <section id="contact" class="py-20 bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Collaborate?</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Whether you have a project idea or just want to say hi, feel free to reach out.
                </p>
                <div class="flex justify-center gap-4">
                    <a href="mailto:{{ site.email }}" class="px-8 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
                        Send Email
                    </a>
                    <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="px-8 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-all">
                        Twitter DM
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

{% include footer.html %}
