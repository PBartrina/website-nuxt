<template>
  <div class="about">
    <section class="bio">
      <h1>{{ $t('about.title') }}</h1>
      <p class="bio-text">{{ $t('about.bio') }}</p>
    </section>

    <section class="skills">
      <h2>{{ $t('about.skills.title') }}</h2>
      <div class="skills-grid">
        <div v-for="(category, key) in skills" :key="key" class="skill-category">
          <h3>{{ $t(`about.skills.categories.${key}.title`) }}</h3>
          <ul class="skill-list">
            <li v-for="skill in category.items" :key="skill" class="skill-item">
              <span class="skill-name">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="experience">
      <h2>{{ $t('about.experience.title') }}</h2>
      <div class="timeline">
        <div v-for="(job, index) in experience" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h3>{{ $t(`about.experience.jobs.${job.id}.title`) }}</h3>
            <p class="timeline-period">{{ $t(`about.experience.jobs.${job.id}.period`) }}</p>
            <p class="timeline-description">{{ $t(`about.experience.jobs.${job.id}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = {
  frontend: {
    items: ['Vue.js', 'React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'TailwindCSS', 'Bootstrap']
  },
  backend: {
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL']
  },
  tools: {
    items: ['Git', 'Docker', 'AWS', 'Linux', 'Jira', 'Confluence', 'Figma', 'Postman']
  }
}

const experience = [
  {
    id: 'bytedefault_senior',
    year: '2017'
  },
  {
    id: 'gft',
    year: '2015'
  },
  {
    id: 'birium',
    year: '2013'
  },
  {
    id: 'salerware',
    year: '2013'
  },
  {
    id: 'lasalle',
    year: '2012'
  }
]
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.bio {
  margin-bottom: 4rem;
}

h1 {
  font-size: 3rem;
  color: var(--slate);
  margin-bottom: 2rem;
}

.bio-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-color);
}

h2 {
  font-size: 2rem;
  color: var(--slate);
  margin-bottom: 2rem;
}

.skills {
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  color: var(--terra);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-item {
  background-color: var(--header-bg);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  color: var(--header-text);
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateX(10px);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: var(--terra);
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: -4px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--terra);
}

.timeline-content h3 {
  color: var(--slate);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.timeline-period {
  color: var(--terra);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-color);
  line-height: 1.6;
}

/* Dark mode overrides */
[data-theme="dark"] h1,
[data-theme="dark"] h2,
[data-theme="dark"] .timeline-content h3 {
  color: var(--sand);
}

[data-theme="dark"] .skill-category h3,
[data-theme="dark"] .timeline-period {
  color: var(--copper);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 