<template>
  <div class="hotel-card">
    <img class="hotel-image" src="@/assets/hotel_cover.jpg" alt="Hotel" />
    <div class="hotel-info">
      <h2 class="hotel-name">{{ hotel.name }}</h2>
      <p class="hotel-location">{{ hotel.city }}</p>
      <div class="hotel-rating">
        <span class="rating-score">{{ hotel.rating }}</span>
        <span class="rating-text">{{ hotel.ratingText }}</span>
      </div>
      <div class="hotel-price">
        <span>A partir de</span>
        <span class="price">R$ {{ hotel.price }}</span>
      </div>
      <footer class="hotel-footer">
        <button
          @click="isAdded ? removeHotel() : addHotel()"
          :class="['add-button', isAdded ? 'remove-button' : '']"
        >
          {{ isAdded ? 'Remover' : 'Adicionar' }}
        </button>
        <button @click="goToBookingPage" class="button-booking">Reservar</button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHotelStore } from '@/stores/useHotelStore'
import type { Hotel } from '@/types/Hotel'

const props = defineProps<{ hotel: Hotel }>()
const hotelStore = useHotelStore()
const router = useRouter()

const isAdded = computed(() => hotelStore.isHotelAdded(props.hotel.id))

const addHotel = () => {
  hotelStore.addHotel(props.hotel)
}

const removeHotel = () => {
  hotelStore.removeHotel(props.hotel.id)
}

const goToBookingPage = () => {
  hotelStore.setHotelForBooking(props.hotel)
  router.push('/booking')
}
</script>

<style scoped>
.hotel-card {
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
  max-width: 300px;
  font-family: Arial, sans-serif;
  transition: transform 0.3s;
}

.hotel-image {
  width: 100%;
  height: auto;
}

.hotel-info {
  padding: 15px;
}

.hotel-name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.hotel-location {
  color: #555;
  margin-bottom: 15px;
}

.hotel-rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.rating-score {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 10px;
}

.rating-text {
  color: #555;
}

.hotel-price {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.price {
  font-size: 16px;
  color: #121214;
  font-weight: 600;
  margin-left: 5px;
}

.add-button {
  margin-top: 15px;
}

.remove-button {
  background-color: #f44336; /* Vermelho */
  color: white;
}

.button-booking {
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  color: #121214;
  border: none;

  cursor: pointer;
}

.button-booking:hover {
  color: #f44336;
}

.hotel-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
