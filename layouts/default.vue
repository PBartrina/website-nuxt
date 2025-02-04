<template>
  <div class="main-layout">
    <header class="header">
      <nav>
        <NuxtLink to="/" class="logo">PauBartrina</NuxtLink>
        
        <div class="nav-controls">
          <ul class="nav-links">
            <li><NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink to="about">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink to="now">{{ $t('nav.now') }}</NuxtLink></li>
          </ul>

          <div class="controls">
            <!-- Language Switcher -->
            <select :value="locale" @change="switchLanguage" class="lang-select">
              <option value="ca">CAT</option>
              <option value="es">ESP</option>
              <option value="en">ENG</option>
            </select>

            <!-- Theme Toggle -->
            <button @click="toggleTheme" class="theme-toggle" aria-label="Toggle theme">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="theme-icon">
                <g :class="{ 'hidden': isDark }">
                  <!-- Sun -->
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="12" y1="3" x2="12" y2="5"/>
                  <line x1="12" y1="19" x2="12" y2="21"/>
                  <line x1="3" y1="12" x2="5" y2="12"/>
                  <line x1="19" y1="12" x2="21" y2="12"/>
                  <line x1="5.6" y1="5.6" x2="7" y2="7"/>
                  <line x1="17" y1="17" x2="18.4" y2="18.4"/>
                  <line x1="17" y1="7" x2="18.4" y2="5.6"/>
                  <line x1="5.6" y1="18.4" x2="7" y2="17"/>
                </g>
                <!-- Moon -->
                <g :class="{ 'hidden': !isDark }">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
                </g>
              </svg>
            </button>

          </div>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <div class="contact-email">
            <span>{{ $t('footer.contact') }}:</span>
            <a href="mailto:hola@paubartrina.cat" class="footer-email">hola@paubartrina.cat</a>
          </div>
          <p class="copyright">&copy; {{ new Date().getFullYear() }} Pau Bartrina. {{ $t('footer.rights') }}</p>
        </div>
        
        <div class="footer-social">
          <a href="https://bsky.app" target="_blank" aria-label="Bluesky">
            <font-awesome-icon :icon="['fab', 'bluesky']" class="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="social-icon" />
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <font-awesome-icon :icon="['fab', 'github-alt']" class="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isDark = ref(false)

const { locale, setLocale } = useI18n()

const switchLanguage = async (event) => {
  const newLocale = event.target.value
  await setLocale(newLocale)
  localStorage.setItem('user-language', newLocale)
}

// Theme toggle logic
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

onMounted(async () => {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }

  // Language initialization
  const savedLang = localStorage.getItem('user-language')
  if (savedLang) {
    await setLocale(savedLang)
  }
})

// Save theme preference when it changes
watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1rem 2rem;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--accent-medium);
}

.header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--header-text);
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--copper);
}

[data-theme="dark"] .nav-links a:hover {
  color: var(--terra);
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-select {
  background: transparent;
  color: var(--header-text);
  border: 1px solid var(--header-text);
  padding: 0.3rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'VT323', 'Courier New', monospace;
  transition: all 0.3s ease;
}

.lang-select:hover {
  color: var(--terra);
  border-color: var(--terra);
}

/* Style for the dropdown options */
.lang-select option {
  background-color: var(--header-bg);
  color: var(--header-text);
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  width: 32px;
  height: 32px;
  transition: transform 0.5s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.theme-icon {
  width: 100%;
  height: 100%;
  stroke: var(--header-text);
  fill: var(--header-text);
  stroke-width: 2;
  stroke-linecap: round;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hidden {
  opacity: 0;
  transform: scale(0);
  position: absolute;
}

g {
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform-origin: center;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  font-size: 24px;
  color: var(--header-text);
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  color: var(--terra);
  transform: translateY(-2px);
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  padding: 2rem;
  background-color: var(--header-bg);
  color: var(--header-text);
  border-top: 1px solid var(--accent-medium);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-email {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.footer-email {
  color: var(--terra);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-email:hover {
  color: var(--copper);
}

/* Dark mode override */
[data-theme="dark"] .footer-email {
  color: var(--slate);
}

[data-theme="dark"] .footer-email:hover {
  color: var(--terra);
}

.copyright {
  color: var(--header-text);
}

.footer-social {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--header-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

[data-theme="dark"] .logo {
  color: var(--slate);
}

.logo:hover {
  color: var(--terra);
  text-decoration: none;
}
</style>
