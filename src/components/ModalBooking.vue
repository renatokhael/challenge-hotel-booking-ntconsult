<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Selecionar Hóspedes e Quartos</h2>
      <div class="form-group">
        <label for="guests">Número de Hóspedes</label>
        <select id="guests" v-model="guests">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="rooms">Número de Quartos</label>
        <select id="rooms" v-model="rooms">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
      <button class="submit-btn" @click="submitSelection">Enviar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true)
const guests = ref(1)
const rooms = ref(1)

const emit = defineEmits(['close', 'submit'])

const closeModal = () => {
  isOpen.value = false
  emit('close')
}

const submitSelection = () => {
  emit('submit', guests.value, rooms.value)
  closeModal()
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group select {
  width: 100%;
  padding: 5px;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
