<template>
  <div class="container-hotel-booking">
    <div class="content-hotel-booking">
      <div class="hotel-info" v-if="hotel">
        <h2>Reserva de Hotel</h2>
        <h3>{{ hotel.name }}</h3>
        <p><strong>Cidade:</strong> {{ hotel.city }}</p>
        <p><strong>Data Disponível:</strong> {{ hotel.availableDate }}</p>
        <p><strong>Preço:</strong> R$ {{ hotel.price }}</p>
        <p><strong>Avaliação:</strong> {{ hotel.rating }} - {{ hotel.ratingText }}</p>
      </div>
      <div v-else>
        <p>Carregando informações do hotel...</p>
      </div>

      <form @submit.prevent="submitBooking" class="booking-form">
        <h3>Informações do Usuário</h3>
        <div class="form-group">
          <label for="name">Nome:</label>
          <input id="name" v-model="userName" type="text" required />
        </div>
        <div class="form-group">
          <label for="contact">Contato:</label>
          <input id="contact" v-model="userContact" type="text" required />
        </div>
        <h3>Detalhes de Pagamento</h3>
        <div class="form-group">
          <label for="cardNumber">Número do Cartão:</label>
          <input id="cardNumber" v-model="cardNumber" type="text" required />
        </div>
        <div class="form-group">
          <label for="expiryDate">Data de Validade:</label>
          <input id="expiryDate" v-model="expiryDate" type="text" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input id="cvv" v-model="cvv" type="text" required />
        </div>
        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHotelStore } from '@/stores/useHotelStore'

const hotelStore = useHotelStore()
const hotel = ref(hotelStore.hotelForBooking)
const userName = ref('')
const userContact = ref('')
const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')

const submitBooking = () => {
  const bookingDetails = {
    hotelId: hotel.value.id,
    userName: userName.value,
    userContact: userContact.value,
    paymentDetails: {
      cardNumber: cardNumber.value,
      expiryDate: expiryDate.value,
      cvv: cvv.value
    }
  }
  console.log('Detalhes da Reserva:', bookingDetails)
  // Aqui você pode enviar os detalhes da reserva para o backend ou API
}
</script>

<style scoped>
.container-hotel-booking {
  margin-top: 20px;
  width: 100%;
  padding: 22px;
}

.content-hotel-booking {
  max-width: 1280px;
  margin: 0 auto;
}

.hotel-info {
  background: #f4f4f4;
  padding: 2rem;
  margin-bottom: 16px;
}

.booking-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  margin-bottom: 4px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.form-containers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  min-height: 300px;
  padding: 1rem;
}

.form-container input {
  background: white;
  margin: 10px;
  width: 90%;
}
</style>
