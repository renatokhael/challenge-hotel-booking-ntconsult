<template>
  <section class="container-hotel-list">
    <header class="header-hotel-list">
      <div class="sort-options">
        <label for="sortCriteria">Ordenar por:</label>
        <select id="sortCriteria" v-model="sortCriteria">
          <option value="price">Preço</option>
          <option value="rating">Avaliação</option>
        </select>
      </div>
      <div class="compare">
        <div class="badge">{{ selectedHotelsCount }}</div>
        <button class="button-compare" @click="compareHotels">Comparar Hoteis</button>
      </div>
    </header>

    <div v-if="hotels.length" class="hotel-list">
      <HotelCard v-for="hotel in sortedHotels" :key="hotel.id" :hotel="hotel" />
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import HotelCard from './HotelCard.vue'
import type { Hotel } from '@/types/Hotel'
import { useHotelStore } from '@/stores/useHotelStore'

// Acesse a store do Pinia
const hotelStore = useHotelStore()
const router = useRouter()

const hotels = ref<Hotel[]>([])
const sortCriteria = ref<'price' | 'rating'>('price') // Critério de ordenação padrão

const selectedHotelsCount = computed(() => hotelStore.selectedHotels.length)

const fetchHotels = async () => {
  try {
    const response = await axios.get('http://localhost:3000/hotels')
    hotels.value = response.data
  } catch (error) {
    console.error('Erro ao buscar dados dos hotéis:', error)
  }
}

// Computed property para ordenar os hotéis com base no critério selecionado
const sortedHotels = computed<Hotel[]>(() => {
  return [...hotels.value].sort((a, b) => {
    if (sortCriteria.value === 'price') {
      return a.price - b.price
    } else if (sortCriteria.value === 'rating') {
      return parseFloat(b.rating) - parseFloat(a.rating) // Ordenação decrescente para avaliações
    }
    return 0
  })
})

const compareHotels = () => {
  if (selectedHotelsCount.value > 0) {
    router.push('/compare')
  } else {
    alert('Selecione pelo menos um hotel para comparar.')
  }
}

onMounted(fetchHotels)

// Observa mudanças no critério de ordenação e atualiza a lista de hotéis
watch(sortCriteria, fetchHotels)
</script>

<style scoped>
.container-hotel-list {
  width: 100%;
}

.header-hotel-list {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.compare {
  display: flex;
  justify-content: end;
  align-items: center;
  min-width: 400px;
}

.sort-options {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
}

.hotel-list {
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 16px;
}

.button-compare {
  max-width: 200px;
}

.badge {
  position: relative;
  top: -20px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f44336;
  color: white;
  font-weight: 700;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
