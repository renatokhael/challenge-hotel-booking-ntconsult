// stores/useHotelStore.ts
import { defineStore } from 'pinia'
import type { Hotel } from '@/types/Hotel'

export const useHotelStore = defineStore('hotelStore', {
  state: () => ({
    selectedHotels: [] as Hotel[],
    hotelForBooking: null as Hotel | null
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
    }
  }
})
