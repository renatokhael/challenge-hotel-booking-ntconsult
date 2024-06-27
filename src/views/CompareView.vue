<template>
  <div class="container-hotel-list">
    <div v-if="selectedHotels.length">
      <div class="comparison-card">
        <h3>Comparação</h3>
        <h4>
          <span>Melhor Custo-Benefício: </span> {{ bestValueHotel.name }} - R$:
          {{ bestValueHotel.price }} -
          {{ bestValueHotel.rating }}
        </h4>
        <p>
          <span>Melhor Avaliação:</span> {{ bestRatedHotel.name }} - {{ bestRatedHotel.rating }}
        </p>
        <p><span>Menor Preço:</span> {{ cheapestHotel.name }} - R$: {{ cheapestHotel.price }}</p>
      </div>
      <div class="hotel-list">
        <HotelCard v-for="hotel in selectedHotels" :key="hotel.id" :hotel="hotel" />
      </div>
    </div>
    <div v-else>
      <p>Nenhum hotel selecionado.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHotelStore } from '@/stores/useHotelStore'
import HotelCard from '@/components/HotelCard.vue'

const hotelStore = useHotelStore()

const selectedHotels = computed(() => hotelStore.selectedHotels)

const bestRatedHotel = computed(() => {
  return selectedHotels.value.reduce((best, hotel) => {
    return parseFloat(hotel.rating) > parseFloat(best.rating) ? hotel : best
  }, selectedHotels.value[0])
})

const cheapestHotel = computed(() => {
  return selectedHotels.value.reduce((cheapest, hotel) => {
    return hotel.price < cheapest.price ? hotel : cheapest
  }, selectedHotels.value[0])
})

const bestValueHotel = computed(() => {
  return selectedHotels.value.reduce((bestValue, hotel) => {
    const currentValue = parseFloat(hotel.rating) / hotel.price
    const bestValueRatio = parseFloat(bestValue.rating) / bestValue.price
    return currentValue > bestValueRatio ? hotel : bestValue
  }, selectedHotels.value[0])
})
</script>

<style scoped>
.container-hotel-list {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.comparison-card {
  width: 100%;
  max-width: 1280px;
  margin: 16px auto;
  padding: 16px;
  border: 1px solid #ddd;

  background-color: #f9f9f9;
  text-align: center;
}

.comparison-card h3,
h4,
p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hotel-list {
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 16px;
}

.container-hotel-list h3 {
  font-size: 22px;
  font-weight: 600;
}

.container-hotel-list h4 {
  font-size: 18px;
  background-color: #003b95;
  color: white;
  padding: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
}

.comparison-card span {
  font-weight: 600;
}

.badge {
  background-color: #bfbebe;
  color: white;
  padding: 2px 10px;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
