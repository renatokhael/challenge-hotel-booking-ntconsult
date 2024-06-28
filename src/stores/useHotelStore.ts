// stores/useHotelStore.ts
import { defineStore } from 'pinia'
import type { Hotel } from '@/types/Hotel'

export const useHotelStore = defineStore('hotelStore', {
  state: () => ({
    selectedHotels: [] as Hotel[],
    hotelForBooking: null as Hotel | null,
    hotels: [] as Hotel[], // Adicionando o estado para a lista de hotéis
    filteredHotels: [] as Hotel[] // Adicionando o estado para os hotéis filtrados
  }),
  actions: {
    addHotel(hotel: Hotel) {
      this.selectedHotels.push(hotel)
    },
    removeHotel(hotelId: number) {
      this.selectedHotels = this.selectedHotels.filter((hotel) => hotel.id !== hotelId)
    },
    isHotelAdded(hotelId: number) {
      return this.selectedHotels.some((hotel) => hotel.id === hotelId)
    },
    setHotelForBooking(hotel: Hotel) {
      this.hotelForBooking = hotel
    },
    clearHotelForBooking() {
      this.hotelForBooking = null
    },
    setHotels(hotels: Hotel[]) {
      this.hotels = hotels
    },
    filterHotelsByCity(city: string) {
      if (city) {
        this.filteredHotels = this.hotels.filter((hotel) => hotel.city === city)
      } else {
        this.filteredHotels = this.hotels
      }
    }
  }
})
