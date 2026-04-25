<template>
  <div class="min-h-dvh flex flex-col bg-base-200">
    <div class="flex-1 flex flex-col bg-base-200">
      <slot />
    </div>
    <footer
      class="footer footer-center bg-base-200 text-base-content border-t border-base-300 p-4"
    >
      <a
        href="https://www.linkedin.com/in/yoimar"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 link link-hover font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-5"
          aria-hidden="true"
        >
          <path
            d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2z"
          />
        </svg>
        LinkedIn
      </a>
    </footer>
  </div>
</template>
