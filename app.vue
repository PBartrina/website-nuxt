<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --sand: #ECC8AF;
  --peach: #E7AD99;
  --terra: #CE796B;
  --copper: #C18C5D;
  --slate: #495867;
  
  /* Light mode defaults */
  --bg-color: var(--sand);
  --text-color: var(--slate);
  --header-bg: var(--slate);
  --header-text: var(--sand);
}

[data-theme="dark"] {
  --bg-color: var(--slate);
  --text-color: var(--sand);
  --header-bg: var(--copper);
  --header-text: var(--sand);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'VT323', 'Courier New', monospace; /* Retro computer font */
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  transition: background-color 0.3s, color 0.3s;
}

a {
  color: var(--terra);
  text-decoration: none;
}

a:hover {
  color: var(--copper);
  text-decoration: underline;
}
</style>
