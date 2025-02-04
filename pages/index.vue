<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('home.title') }}</h1>
        <p class="subtitle">{{ $t('home.subtitle') }}</p>
        <div class="hero-cta">
          <NuxtLink to="/about" class="cta-button">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink to="/now" class="cta-link">{{ $t('nav.now') }} →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="featured">
      <h2>{{ $t('home.featured.title') }}</h2>
      <div class="projects-grid">
        <article v-for="(project, key) in projects" :key="project.id" class="project-card">
          <div class="project-content">
            <h3>{{ $t(`home.featured.projects.${key}.title`) }}</h3>
            <p>{{ $t(`home.featured.projects.${key}.description`) }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="project-links">
            <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" /> 
              {{ $t(`home.featured.projects.${key}.demo`) }}
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
              <font-awesome-icon :icon="['fab', 'github-alt']" /> 
              {{ $t(`home.featured.projects.${key}.code`) }}
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = {
  project1: {
    id: 1,
    tags: ['Vue', 'Nuxt', 'TailwindCSS'],
    demo: 'https://demo1.example.com',
    github: 'https://github.com/yourusername/project1'
  },
  project2: {
    id: 2,
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://demo2.example.com',
    github: 'https://github.com/yourusername/project2'
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
}

.hero-content {
  max-width: 800px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--slate);
}

.subtitle {
  font-size: 1.8rem;
  color: var(--terra);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.cta-button {
  background-color: var(--slate);
  color: var(--sand);
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--terra);
}

.cta-link {
  color: var(--terra);
  text-decoration: none;
  transition: color 0.3s ease;
}

.cta-link:hover {
  color: var(--slate);
}

.featured {
  padding: 4rem 0;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--slate);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--header-bg);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content h3 {
  color: var(--header-text);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-content p {
  color: var(--header-text);
  opacity: 0.9;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: var(--terra);
  color: var(--sand);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--header-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--terra);
}

/* Dark mode override */
[data-theme="dark"] .project-link {
  color: var(--slate);
}

[data-theme="dark"] .project-link:hover {
  color: var(--terra);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .hero-cta {
    flex-direction: column;
  }
}

/* Dark mode overrides */
[data-theme="dark"] h1,
[data-theme="dark"] h2 {
  color: var(--sand);
}

[data-theme="dark"] .subtitle {
  color: var(--copper);
}

[data-theme="dark"] .cta-link {
  color: var(--copper);
}

[data-theme="dark"] .cta-link:hover {
  color: var(--sand);
}

[data-theme="dark"] .cta-button {
  background-color: var(--copper);
}

[data-theme="dark"] .cta-button:hover {
  background-color: var(--terra);
}

/* Dark mode override */
[data-theme="dark"] .tag {
  background-color: var(--slate);
}
</style> 