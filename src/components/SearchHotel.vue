<template>
  <section class="container-search-hotel">
    <div class="search-bar">
      <div class="input-group">
        <label for="destination" class="icon">
          <i class="fas fa-search"></i>
        </label>
        <select id="destination" v-model="destination">
          <option value="">Selecione um destino</option>
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
        <button @click="clearDestination" v-if="destination" class="clear-btn">x</button>
      </div>
      <div class="input-group">
        <label for="checkin" class="icon">
          <i class="fas fa-calendar-alt"></i>
        </label>
        <input
          type="text"
          id="checkin"
          placeholder="Entrada"
          v-model="checkin"
          @input="formatDateInput('checkin')"
        />
      </div>
      <div class="input-group">
        <label for="checkout" class="icon">
          <i class="fas fa-calendar-alt"></i>
        </label>
        <input
          type="text"
          id="checkout"
          placeholder="Saída"
          v-model="checkout"
          @input="formatDateInput('checkout')"
        />
      </div>
      <div class="input-group">
        <label for="guests" class="icon">
          <i class="fas fa-user-friends"></i>
        </label>
        <input
          type="text"
          id="guests"
          placeholder="Hóspedes e quartos"
          v-model="guests"
          @click="openModal"
          readonly
        />
      </div>
      <button class="search-btn">Pesquisar</button>
    </div>
    <ModalBooking v-if="showModal" @close="closeModal" @submit="handleModalSubmit" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ModalBooking from './ModalBooking.vue'

const destination = ref('')
const checkin = ref('')
const checkout = ref('')
const guests = ref('2 hóspedes, 1 quarto')
const cities = ref([])
const showModal = ref(false)

const fetchCities = async () => {
  try {
    const response = await axios.get('http://localhost:3000/hotels')
    const hotels = response.data
    const uniqueCities = [...new Set(hotels.map((hotel) => hotel.city))]
    cities.value = uniqueCities
  } catch (error) {
    console.error('Error fetching cities:', error)
  }
}

const clearDestination = () => {
  destination.value = ''
}

const formatDateInput = (field) => {
  const date = ref(field === 'checkin' ? checkin.value : checkout.value)
  let formattedDate = date.value.replace(/[^0-9]/g, '')

  if (formattedDate.length >= 3 && formattedDate.length <= 4) {
    formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`
  } else if (formattedDate.length > 4) {
    formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2, 4)}/${formattedDate.slice(4, 8)}`
  }

  if (field === 'checkin') {
    checkin.value = formattedDate
  } else {
    checkout.value = formattedDate
  }
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const handleModalSubmit = (selectedGuests, selectedRooms) => {
  guests.value = `${selectedGuests} hóspedes, ${selectedRooms} quartos`
  closeModal()
}

onMounted(() => {
  fetchCities()
})
</script>

<style scoped>
.container-search-hotel {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search-bar {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.input-group {
  display: flex;
  align-items: center;
  position: relative;
  flex: 1 1 200px;
}

.input-group .icon {
  position: absolute;
  left: 10px;
  color: #333;
}

.input-group select,
.input-group input {
  width: 100%;
  padding: 10px 10px 10px 30px;
  border: 1px solid #ccc;
}

.clear-btn {
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .search-bar {
    flex-direction: column;
  }

  .input-group {
    width: 100%;
  }
}
</style>
