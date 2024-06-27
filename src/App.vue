<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'

import SearchHotel from './components/SearchHotel.vue'
import HotelList from './components/HotelList.vue'
</script>

<template>
  <HeaderComponent />
  <SearchHotel />

  <RouterView />
</template>

<style scoped></style>
