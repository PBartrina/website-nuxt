<template>
  <div class="now">
    <section class="now-header">
      <h1>{{ $t('now.title') }}</h1>
      <p class="last-update">{{ $t('now.lastUpdate') }}</p>
    </section>

    <section class="now-content">
      <div class="current-status">
        <p v-html="$t('now.location')"></p>
        <p v-html="$t('now.work')"></p>
      </div>

      <div class="priorities">
        <h2>{{ $t('now.priorities.title') }}</h2>
        <ul>
          <li v-for="(priority, index) in 4" :key="index">
            {{ $t(`now.priorities.list.${index}`) }}
          </li>
        </ul>
      </div>

      <div class="interests">
        <h2>{{ $t('now.interests.title') }}</h2>
        <ul>
          <li v-for="(interest, index) in 2" :key="index">
            {{ $t(`now.interests.list.${index}`) }}
          </li>
        </ul>
      </div>

      <div class="inspiration" v-html="$t('now.inspiration')"></div>
    </section>
  </div>
</template>

<style scoped>
.now {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.now-header {
  margin-bottom: 3rem;
}

h1 {
  font-size: 3rem;
  color: var(--slate);
  margin-bottom: 1rem;
}

.last-update {
  color: var(--terra);
  font-size: 1.1rem;
}

.now-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.current-status p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--text-color);
}

h2 {
  font-size: 1.8rem;
  color: var(--slate);
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-color);
}

li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--terra);
}

.inspiration {
  font-style: italic;
  color: var(--text-color);
  opacity: 0.9;
}

.inspiration :deep(a) {
  color: var(--terra);
  text-decoration: none;
  transition: color 0.3s ease;
}

.inspiration :deep(a:hover) {
  color: var(--copper);
}

/* Dark mode overrides */
[data-theme="dark"] h1,
[data-theme="dark"] h2 {
  color: var(--sand);
}

[data-theme="dark"] .inspiration :deep(a) {
  color: var(--copper);
}

[data-theme="dark"] .inspiration :deep(a:hover) {
  color: var(--terra);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style> 