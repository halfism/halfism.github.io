---
layout: default
title: Home
lang: en
---

{% include header.html %}

<main class="pt-24">
    <!-- Hero Section -->
    <section class="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="md:w-1/2 space-y-6">
                    <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark">
                        Hello, I'm <span class="text-primary">halfism</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-600 max-w-lg">
                        A passionate developer focused on creating meaningful and efficient solutions through code.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-2">
                        <a href="#projects" class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-custom font-medium flex items-center gap-2 shadow-lg shadow-primary/20">
                            View My Work <i class="fa fa-arrow-right"></i>
                        </a>
                        <a href="#contact" class="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg transition-custom font-medium border border-gray-200 flex items-center gap-2 shadow-md">
                            Get In Touch <i class="fa fa-envelope"></i>
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

                        <!-- Floating Skill Tags -->
                        <div class="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 transform rotate-[-5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-code text-primary text-xl"></i>
                            <span class="font-medium">Developer</span>
                        </div>
                        <div class="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 transform rotate-[5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-lightbulb-o text-yellow-500 text-xl"></i>
                            <span class="font-medium">Innovator</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Me -->
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">About Me</h2>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div class="max-w-3xl mx-auto">
                <div class="bg-gray-50 rounded-2xl p-8 shadow-sm">
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                        Hello! I'm <strong class="text-primary">halfism</strong>, a passionate developer with a love for creating efficient,
                        beautiful, and functional software. I enjoy tackling complex problems and turning ideas into reality through code.
                    </p>
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                        My journey in programming started several years ago, and since then, I've been constantly learning and
                        expanding my skill set. I believe in writing clean, maintainable code and following best practices to
                        deliver high-quality solutions.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                        or sharing my knowledge with the developer community.
                    </p>

                    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <i class="fa fa-code-fork text-primary text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Open Source</h3>
                            <p class="text-gray-600">Active contributor to various open-source projects and maintainer of my own repositories.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <i class="fa fa-graduation-cap text-green-600 text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Lifelong Learner</h3>
                            <p class="text-gray-600">Constantly expanding my knowledge and staying up-to-date with the latest technologies.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <i class="fa fa-users text-purple-600 text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Collaborative</h3>
                            <p class="text-gray-600">Enjoy working in teams and contributing to collaborative development efforts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Showcase -->
    <section id="projects" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">My Projects</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">Explore some of my recent work and contributions. Click on any project to view more details on GitHub.</p>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            JavaScript
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">Web Application</h3>
                        <p class="text-gray-600 mb-4">A full-featured web application with responsive design and modern UI components.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">React</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Node.js</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">MongoDB</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- Project Card 2 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Python
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">Data Analysis Tool</h3>
                        <p class="text-gray-600 mb-4">A powerful tool for data visualization and analysis with advanced statistical features.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Python</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Pandas</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Matplotlib</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- Project Card 3 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Go
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">API Service</h3>
                        <p class="text-gray-600 mb-4">A high-performance RESTful API service with authentication and rate limiting.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Go</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Docker</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- Project Card 4 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project4/600/400" alt="Project 4" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Mobile
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">Mobile App</h3>
                        <p class="text-gray-600 mb-4">A cross-platform mobile application with offline capabilities and sync features.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Flutter</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Firebase</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Redux</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- Project Card 5 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project5/600/400" alt="Project 5" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            DevOps
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">CI/CD Pipeline</h3>
                        <p class="text-gray-600 mb-4">An automated deployment pipeline with testing, building, and deployment stages.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">GitHub Actions</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Kubernetes</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Terraform</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>

                <!-- Project Card 6 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-custom group">
                    <div class="relative overflow-hidden">
                        <img src="https://picsum.photos/seed/project6/600/400" alt="Project 6" class="w-full h-52 object-cover group-hover:scale-105 transition-custom duration-500">
                        <div class="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Machine Learning
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-custom">ML Model</h3>
                        <p class="text-gray-600 mb-4">A machine learning model for predictive analytics with a user-friendly interface.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">TensorFlow</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Keras</span>
                            <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Flask</span>
                        </div>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="https://github.com/{{ site.github_username }}?tab=repositories" target="_blank" class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-custom font-medium shadow-lg shadow-primary/20">
                    View All Projects <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Skills Showcase -->
    <section id="skills" class="py-20 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">My Skills</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">I've worked with a variety of technologies and tools throughout my development journey.</p>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Skills Chart -->
                <div class="bg-gray-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-6">Technical Proficiency</h3>
                    <div class="h-80">
                        <canvas id="skillsChart"></canvas>
                    </div>
                </div>

                <!-- Skills List -->
                <div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- Skills Category 1 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-code text-primary"></i>
                                </div>
                                <h4 class="font-bold text-lg">Programming</h4>
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

                        <!-- Skills Category 2 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-globe text-green-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">Web Development</h4>
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

                        <!-- Skills Category 3 -->
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i class="fa fa-database text-purple-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">Databases</h4>
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

                        <!-- Skills Category 4 -->
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

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-primary/5 to-indigo-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">Get In Touch</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">Have a project in mind or want to collaborate? Feel free to reach out to me.</p>
                <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div class="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
                        <h3 class="text-xl font-bold mb-6">Contact Information</h3>

                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                    <i class="fa fa-envelope text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Email</h4>
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
                                    <h4 class="font-medium text-gray-900">Location</h4>
                                    <p class="text-gray-600 mt-1">Global Developer</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h4 class="font-medium text-gray-900 mb-4">Available For</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Freelance Work</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Open Source Collaboration</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tech Talks</span>
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Mentorship</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm">
                        <h3 class="text-xl font-bold mb-6">Send Me a Message</h3>

                        <form>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="John Doe">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="john@example.com">
                                </div>
                            </div>

                            <div class="mb-6">
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="Project Inquiry">
                            </div>

                            <div class="mb-6">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom" placeholder="Tell me about your project or inquiry..."></textarea>
                            </div>

                            <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-custom font-medium flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                                Send Message <i class="fa fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <script>
        // Skills Chart
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('skillsChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: [
                        'Frontend',
                        'Backend',
                        'Database',
                        'Mobile',
                        'DevOps',
                        'Machine Learning'
                    ],
                    datasets: [{
                        label: 'Skill Level',
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