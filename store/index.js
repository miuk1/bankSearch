import axios from 'axios'
//api url to get list of banks
const apiUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI'
const state = () => ({ banks: [] })

const mutations = {
  setBanks: (state, banks) => (state.banks = banks)
}
const actions = {
  async fetchBanks({ commit }) {
    const response = await axios.get(apiUrl)
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
