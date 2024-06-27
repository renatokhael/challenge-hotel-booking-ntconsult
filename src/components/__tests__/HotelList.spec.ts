// @ts-nocheck
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import HotelList from '../HotelList.vue'
import HotelCard from '../HotelCard.vue'
import { createPinia, setActivePinia } from 'pinia'
import db from '../../../db.json' // Ajuste o caminho conforme necessário

describe('HotelList.vue', () => {
  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: db.hotels })
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  // it('deve renderizar a lista de hotéis corretamente após o carregamento', async () => {
  //   const wrapper = mount(HotelList, {
  //     global: {
  //       components: { HotelCard }
  //     }
  //   })

  //   // Aguarde o carregamento dos dados e a atualização do DOM
  //   await wrapper.vm.$nextTick()
  //   await wrapper.vm.$nextTick()

  //   // Verifique se os hotéis foram renderizados corretamente
  //   const hotelCards = wrapper.findAllComponents(HotelCard)
  //   expect(hotelCards.length).toBe(db.hotels.length)
  // })

  it('deve exibir a mensagem "Carregando..." enquanto os hotéis não são carregados', () => {
    const wrapper = mount(HotelList, {
      global: {
        components: { HotelCard }
      }
    })

    // Verifique se a mensagem de carregamento é exibida
    expect(wrapper.text()).toContain('Carregando...')
  })

  it('deve ordenar os hotéis pelo preço por padrão', async () => {
    const wrapper = mount(HotelList, {
      global: {
        components: { HotelCard }
      }
    })

    // Aguarde o carregamento dos dados e a atualização do DOM
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    const hotelCards = wrapper.findAllComponents(HotelCard)

    const prices = hotelCards.map((card) => card.props('hotel').price)
    expect(prices).toEqual([...prices].sort((a, b) => a - b))
  })

  it('deve alterar a ordenação dos hotéis quando o critério de ordenação é alterado', async () => {
    const wrapper = mount(HotelList, {
      global: {
        components: { HotelCard }
      }
    })

    // Aguarde o carregamento dos dados e a atualização do DOM
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    // Alterar o critério de ordenação para "rating"
    await wrapper.find('#sortCriteria').setValue('rating')

    const hotelCards = wrapper.findAllComponents(HotelCard)
    const ratings = hotelCards.map((card) => card.props('hotel').rating)
    expect(ratings).toEqual([...ratings].sort((a, b) => b - a))
  })
})
