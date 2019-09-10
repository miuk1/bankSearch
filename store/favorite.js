export const state = () => ({
  banks: []
});

export const mutations = {
  setBanks(state, banks) {
    state.banks = banks;
  },
  add(state, bank) {
    const record = state.banks.find(i => i.ifsc === bank.ifsc);

    if (!record) {
      state.banks.push({
        quantity: 1,
        ...bank
      });
    } else {
      record.quantity++;
    }
    this.$cookiz.set("favorites", state.banks);
  },
  remove(state, bank) {
    const index = state.banks.indexOf(state.banks.find(i => i.ifsc === bank.ifsc));
    state.banks.splice(index, 1);
    this.$cookiz.set("favorites", state.banks);
  }
};

export const getters = {
  banks: state => {
    return state.banks;
  },
  numberOfBanks: state => {
    return state.banks.reduce(
      (acumulator, bank) => acumulator + bank.quantity,
      0
    );
  }
};
