<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import HeroSection from './components/HeroSection.vue'


</script>

<template>
  <HeaderComponent />
  <HeroSection />
  <RouterView />
</template>

<style scoped></style>
