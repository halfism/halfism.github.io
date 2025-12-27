---
layout: default
title: Home
lang: en
---

{% include header.html %}

<main class="pt-20">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="md:w-1/2 space-y-4">
                    <h1 class="text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-dark">
                        Hello, I'm <span class="text-primary">halfism</span>
                    </h1>
                    <p class="text-lg md:text-xl text-gray-600 max-w-lg">
                        A passionate developer focused on creating meaningful and efficient solutions through code.
                    </p>
                    <div class="flex flex-wrap gap-3 pt-2">
                        <a href="#projects" class="neumorphic-button primary">
                            View My Work
                        </a>
                        <a href="#contact" class="neumorphic-button">
                            Get In Touch
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
                        <!-- Floating Skill Tags -->
                        <div class="absolute -top-4 -left-4 neumorphic-card p-3 rounded-lg flex items-center gap-2 transform rotate-[-5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-code text-primary text-xl"></i>
                            <span class="font-medium">Developer</span>
                        </div>
                        <div class="absolute -bottom-6 -right-6 neumorphic-card p-3 rounded-lg flex items-center gap-2 transform rotate-[5deg] hover:rotate-0 transition-custom">
                            <i class="fa fa-lightbulb-o text-yellow-500 text-xl"></i>
                            <span class="font-medium">Innovator</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Me -->
    <section id="about" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">About Me</h2>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div class="max-w-3xl mx-auto">
                <div class="neumorphic-card p-6">
                    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                        Hello! I'm <strong class="text-primary">halfism</strong>, a passionate developer with a love for creating efficient,
                        beautiful, and functional software. I enjoy tackling complex problems and turning ideas into reality through code.
                    </p>
                    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                        My journey in programming started several years ago, and since then, I've been constantly learning and
                        expanding my skill set. I believe in writing clean, maintainable code and following best practices to
                        deliver high-quality solutions.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                        or sharing my knowledge with the developer community.
                    </p>

                    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="neumorphic-card p-5">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 neumorphic-icon">
                                <i class="fa fa-code-fork text-primary text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Open Source</h3>
                            <p class="text-gray-600">Active contributor to various open-source projects and maintainer of my own repositories.</p>
                        </div>
                        <div class="neumorphic-card p-5">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 neumorphic-icon">
                                <i class="fa fa-graduation-cap text-green-600 text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Lifelong Learner</h3>
                            <p class="text-gray-600">Constantly expanding my knowledge and staying up-to-date with the latest technologies.</p>
                        </div>
                        <div class="neumorphic-card p-5">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 neumorphic-icon">
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
    <section id="projects" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">My Projects</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">Explore some of my recent work and contributions. Click on any project to view more details on GitHub.</p>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Project Card 1 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full">
                            JavaScript
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Web Application</h3>
                    <p class="text-gray-600 mb-3">A full-featured web application with responsive design and modern UI components. Implemented user authentication, real-time data synchronization, and personalized dashboards.</p>
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
                        View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- Project Card 2 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-green-600 text-white">
                            Python
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Data Analysis Tool</h3>
                    <p class="text-gray-600 mb-3">A powerful tool for data visualization and analysis with advanced statistical features. Helps users identify data trends, generate reports, and make data-driven decisions.</p>
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
                        View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- Project Card 3 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-blue-600 text-white">
                            Go
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">API Service</h3>
                    <p class="text-gray-600 mb-3">A high-performance RESTful API service with authentication and rate limiting. Supports thousands of concurrent requests with average response time under 50ms.</p>
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
                        View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- Project Card 4 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project4/600/400" alt="Project 4" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-orange-500 text-white">
                            Mobile
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Mobile App</h3>
                    <p class="text-gray-600 mb-3">A cross-platform mobile application with offline capabilities and sync features. Achieved 4.8 star rating on both App Store and Google Play.</p>
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
                        View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- Project Card 5 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project5/600/400" alt="Project 5" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-purple-600 text-white">
                            DevOps
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">CI/CD Pipeline</h3>
                    <p class="text-gray-600 mb-3">An automated deployment pipeline with testing, building, and deployment stages. Reduced deployment time from 2 hours to 15 minutes, decreasing human errors by 90%.</p>
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
                        View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <!-- Project Card 6 -->
                <div class="neumorphic-card p-5">
                    <div class="relative overflow-hidden mb-4">
                        <img src="https://picsum.photos/seed/project6/600/400" alt="Project 6" class="w-full h-52 object-cover rounded-lg">
                        <div class="absolute top-4 right-4 neumorphic-button reverse text-sm font-medium px-3 py-1 rounded-full bg-red-500 text-white">
                            Machine Learning
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">ML Model</h3>
                    <p class="text-gray-600 mb-3">A machine learning model for predictive analytics with a user-friendly interface. Achieved 94% accuracy and successfully deployed in multiple business scenarios.</p>
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
                        View on GitHub <i class="fa fa-arrow-right ml-1"></i>
                    </a>
                </div>
            </div>

            <div class="text-center mt-10">
                <a href="https://github.com/{{ site.github_username }}?tab=repositories" target="_blank" class="neumorphic-button primary">
                    View All Projects <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Skills Showcase -->
    <section id="skills" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">My Skills</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">I've worked with a variety of technologies and tools throughout my development journey.</p>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Skills Chart -->
                <div class="neumorphic-card p-6">
                    <h3 class="text-xl font-bold mb-6">Technical Proficiency</h3>
                    <div class="h-80">
                        <canvas id="skillsChart"></canvas>
                    </div>
                </div>

                <!-- Skills List -->
                <div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <!-- Skills Category 1 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-code text-primary"></i>
                                </div>
                                <h4 class="font-bold text-lg">Programming</h4>
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

                        <!-- Skills Category 2 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-globe text-green-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">Web Development</h4>
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

                        <!-- Skills Category 3 -->
                        <div class="neumorphic-card p-5">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="neumorphic-icon w-10 h-10 flex items-center justify-center">
                                    <i class="fa fa-database text-purple-600"></i>
                                </div>
                                <h4 class="font-bold text-lg">Databases</h4>
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

                        <!-- Skills Category 4 -->
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

    <!-- Contact Section -->
    <section id="contact" class="py-16 neumorphic-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-3">Get In Touch</h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg">Have a project in mind or want to collaborate? Feel free to reach out to me.</p>
                <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            </div>

            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="neumorphic-card p-6">
                        <h3 class="text-xl font-bold mb-6">Contact Information</h3>

                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-envelope text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Email</h4>
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
                                    <h4 class="font-medium text-gray-900">Location</h4>
                                    <p class="text-gray-600 mt-1">Global Developer</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-3">
                                <div class="neumorphic-icon w-10 h-10 flex-shrink-0">
                                    <i class="fa fa-calendar text-primary text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Schedule a Call</h4>
                                    <a href="#" class="text-primary hover:underline mt-1 inline-block">Book a one-on-one consultation</a>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <h4 class="font-medium text-gray-900 mb-4">Available For</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">Freelance Work</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">Open Source Collaboration</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">Tech Talks</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">Mentorship</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">Code Reviews</span>
                                <span class="neumorphic-button reverse text-xs px-3 py-1 text-gray-700 bg-transparent">Architecture Consulting</span>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <h4 class="font-medium text-gray-900 mb-4">Client Testimonials</h4>
                            <div class="neumorphic-card p-4">
                                <p class="text-gray-600 italic">"Halfism is an outstanding professional with exceptional technical skills and communication abilities. Our project was delivered ahead of schedule thanks to his contributions."</p>
                                <p class="text-gray-900 font-medium mt-3">— John Smith, CEO of Tech Company</p>
                            </div>
                        </div>
                    </div>

                    <div class="neumorphic-card p-6">
                        <h3 class="text-xl font-bold mb-6">Send Me a Message</h3>

                        <form>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input type="text" id="name" class="neumorphic-input text-sm" placeholder="John Doe">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                    <input type="email" id="email" class="neumorphic-input text-sm" placeholder="john@example.com">
                                </div>
                            </div>

                            <div class="mb-4">
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" class="neumorphic-input text-sm" placeholder="Project Inquiry">
                            </div>

                            <div class="mb-4">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea id="message" rows="5" class="neumorphic-textarea text-sm" placeholder="Tell me about your project or inquiry..."></textarea>
                            </div>

                            <button type="submit" class="w-full neumorphic-button primary">
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