<script setup>
import LogoVue from './Logo.vue'
import NavLink from './NavLink.vue'
</script>

<template>
  <div class="p-5">
    <section class="bg-logo-container p-5 rounded mb-3">
      <LogoVue />
    </section>
    <nav>
      <NavLink linkName="home" linkLabel="Inicio" />
      <NavLink linkName="firstView" linkLabel="Vista 1" />
      <NavLink linkName="secondView" linkLabel="Vista 2" />
    </nav>
  </div>
</template>
