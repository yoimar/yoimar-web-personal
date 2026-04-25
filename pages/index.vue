<template>
  <main class="flex-1 flex items-center justify-center bg-base-200">
    <!-- Desktop-only: fixed toggle buttons top-right -->
    <div class="hidden lg:flex fixed top-4 right-4 z-50 gap-2">
      <button class="btn btn-sm" @click="toggleLanguage">
        {{ locale === "en" ? "ES" : "EN" }}
      </button>
      <button
        class="btn btn-sm btn-ghost"
        aria-label="Toggle theme"
        @click="toggleTheme"
      >
        <svg
          v-if="colorMode.preference === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-4"
        >
          <path
            d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 5.64a1 1 0 011.41 0l.71.7A1 1 0 115 7.76l-.7-.71a1 1 0 010-1.41zm12.73 12.73a1 1 0 011.41 0l.71.7a1 1 0 01-1.41 1.42l-.71-.71a1 1 0 010-1.41zM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM5.64 19.78a1 1 0 010-1.41l.7-.71a1 1 0 111.42 1.41l-.71.71a1 1 0 01-1.41 0zM18.36 6.34a1 1 0 010-1.41l.71-.7a1 1 0 011.41 1.41l-.7.71a1 1 0 01-1.42 0z"
          />
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-4"
        >
          <path
            d="M21.64 13a1 1 0 00-1.05-.14 8 8 0 01-10.45-10.45 1 1 0 00-1.3-1.3A10 10 0 1019.1 14.3a1 1 0 00-.14-1.3 1 1 0 00-1.32 0A8 8 0 0110 20a8 8 0 0111.64-7z"
          />
        </svg>
        {{ colorMode.preference === "dark" ? "Light" : "Dark" }}
      </button>
    </div>

    <!-- Content: flex-col on mobile, flex-row centered on desktop -->
    <div
      class="flex flex-col lg:flex-row lg:items-center w-full max-w-5xl xl:max-w-7xl py-8 lg:py-12"
    >
      <div
        class="hero w-full h-96 lg:h-[32rem] xl:h-[38rem]"
        style="background-image: url(&quot;/img/acernitro5.jpg&quot;)"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="avatar">
            <div
              class="w-72 md:w-80 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-2"
            >
              <img src="/img/yoimar.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-3xl mx-auto px-6 lg:px-8">
        <!-- Mobile-only toggle buttons -->
        <div class="mt-4 mb-5 flex justify-end gap-2 lg:hidden -mr-6">
          <button class="btn btn-sm" @click="toggleLanguage">
            {{ locale === "en" ? "ES" : "EN" }}
          </button>
          <button
            class="btn btn-sm btn-ghost"
            aria-label="Toggle theme"
            @click="toggleTheme"
          >
            <svg
              v-if="colorMode.preference === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 5.64a1 1 0 011.41 0l.71.7A1 1 0 115 7.76l-.7-.71a1 1 0 010-1.41zm12.73 12.73a1 1 0 011.41 0l.71.7a1 1 0 01-1.41 1.42l-.71-.71a1 1 0 010-1.41zM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM5.64 19.78a1 1 0 010-1.41l.7-.71a1 1 0 111.42 1.41l-.71.71a1 1 0 01-1.41 0zM18.36 6.34a1 1 0 010-1.41l.71-.7a1 1 0 011.41 1.41l-.7.71a1 1 0 01-1.42 0z"
              />
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M21.64 13a1 1 0 00-1.05-.14 8 8 0 01-10.45-10.45 1 1 0 00-1.3-1.3A10 10 0 1019.1 14.3a1 1 0 00-.14-1.3 1 1 0 00-1.32 0A8 8 0 0110 20a8 8 0 0111.64-7z"
              />
            </svg>
            {{ colorMode.preference === "dark" ? "Light" : "Dark" }}
          </button>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold">
          {{ profile[locale].name }}
        </h1>
        <h2 class="mt-2 text-2xl md:text-3xl font-semibold opacity-90">
          {{ profile[locale].title }}
        </h2>
        <p class="py-4 text-lg leading-relaxed">
          {{ profile[locale].summaryOne }}
        </p>
        <p class="py-2 text-lg leading-relaxed">
          {{ profile[locale].summaryTwo }}
        </p>
        <p class="py-2 text-lg leading-relaxed">
          {{ profile[locale].summaryThree }}
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
const locale = ref("en");
const colorMode = useColorMode();

const profile = {
  en: {
    name: "Yoimar Urbina",
    title: "Full-Stack Web Developer",
    summaryOne:
      "I am a Full-Stack Web Developer with experience in React, Node.js, Express, PHP, PostgreSQL, MariaDB, MongoDB, and cloud-based infrastructure. I build scalable web applications, internal business platforms, middleware solutions, API integrations, and automated backend processes.",
    summaryTwo:
      "I also have experience configuring Heroku applications, working with add-ons and plugins, managing AWS EC2 servers, setting up NGINX middleware environments, optimizing deployments, and improving application performance.",
    summaryThree:
      "My goal is to create reliable, efficient, and maintainable solutions that solve real business problems and support long-term growth.",
  },
  es: {
    name: "Yoimar Urbina",
    title: "Desarrollador Web Full-Stack",
    summaryOne:
      "Soy Desarrollador Web Full-Stack con experiencia en React, Node.js, Express, PHP, PostgreSQL, MariaDB, MongoDB e infraestructura basada en la nube. Desarrollo aplicaciones web escalables, plataformas internas de negocio, soluciones middleware, integraciones de API y procesos backend automatizados.",
    summaryTwo:
      "Tambien tengo experiencia configurando aplicaciones en Heroku, trabajando con add-ons y plugins, administrando servidores AWS EC2, implementando entornos middleware con NGINX, optimizando despliegues y mejorando el rendimiento de las aplicaciones.",
    summaryThree:
      "Mi objetivo es crear soluciones confiables, eficientes y mantenibles que resuelvan problemas reales de negocio y apoyen el crecimiento a largo plazo.",
  },
};

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "es" : "en";
  localStorage.setItem("site-locale", locale.value);
};

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

onMounted(() => {
  const savedLocale = localStorage.getItem("site-locale");
  if (savedLocale === "en" || savedLocale === "es") {
    locale.value = savedLocale;
  }
});
</script>
