import {createStore} from 'vuex';
import { faqCategories } from './db.json'

export default createStore({
  state:{
    faq: []
  },
  mutations:{
    SET_FAQ(state, faq){
      state.faq = faq
    }
  },
  actions:{
    fetchFaq(context){
      const faq = JSON.parse(JSON.stringify(faqCategories))
      
      
      context.commit('SET_FAQ', faq)
    }
  },
  getters:{
    $allFaq(state) {
       return state.faq
    },
    $basecampFaq(state) {
      const valueID = state.faq.filter((faq) => faq.id == 1)
      return valueID
    },
   $basecampFaqTwo(state) {
      const valueID = state.faq.filter((faq) => faq.id == 2)
      return valueID
 
    },
    $basecampFaqThree(state) {
      const valueID = state.faq.filter((faq) => faq.id == 3)
      return valueID
  },
    $basecampFaqFour(state) {
      const valueID = state.faq.filter((faq) => faq.id == 4)
      return valueID
  },

  }
})