<template>
<div class="navbar bg-base-100 static top-0 left-0 right-0 md:fixed">
  <div class="navbar-start space-x-10 mx-8 hidden md:block">
    <nuxt-link to="/">
      <span
        class="btn"
      >
        Platzi
      </span>
    </nuxt-link>
    <nuxt-link to="/">
      <span
        class="btn"
      >
        Udemy
      </span>
    </nuxt-link>
  </div>
  <div class="navbar-end">
    <ColorModePicker />
  </div>
</div>
</template>