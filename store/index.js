import axios from 'axios'
const apiUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI'
const config = {
  headers:{
    'Access-Control-Allow-Origin':'http://findyourbank.herokuapp.com'
  }
}
const state = () => ({ banks: [] })

const mutations = {
  setBanks: (state, banks) => (state.banks = banks)
}
const actions = {
  async fetchBanks({ commit }) {
    console.log("Hi I am her!!")
    const response = await axios.get(apiUrl, config)
    commit('setBanks', response.data)
  }
}

const getters = {
  allBanks: state => state.banks
}

export default {
  state,
  getters,
  actions,
  mutations
}
