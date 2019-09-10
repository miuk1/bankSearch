<template>
  <div>
    <Navbar />
    <div class="container">
     <div class="row">
        <p v-if="!favouriteBanks.length">No results :(</p>
        <div v-for="bank in favouriteBanks" :key="bank.bank_id" class="col-sm-3">
          <div class="card p-3">
          <img src="~/assets/images/bank.png" class="card-img-top" />
          <div class="card-body">
            <h6 class="card-title">{{ bank.bank_name }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">IFSC: {{bank.ifsc}}</h6>
            
            <h6 class="card-subtitle mb-2 text-muted">Branch: {{bank.branch}}</h6>
            <nuxt-link
              :to="'/banks/' + bank.ifsc"
              class="btn btn-primary"
            >See details</nuxt-link>
            <button class="btn fav-icon" @click="removeFav(bank)" title="Remove Favorite"><img src="~assets/images/remove.png" alt="Favorite"></button>
          </div>
          </div>
        </div>
        
      </div>
      <br />
          <nuxt-link
              to="/"
              class="btn btn-primary"
            >Go Back</nuxt-link>
      </div>
  </div>
</template>
<script>
import Navbar from '@/components/navbar'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    Navbar
  },
  computed: {
    favouriteBanks(){
      return this.$cookiz.get('favorites')
    },
    ...mapGetters['favorite/banks']
  },
  methods: {
    ...mapMutations({
      addToFav: 'favorite/add',
      removeFav: 'favorite/remove'
    }),
  }
}
</script>
<style scoped>
.fav-icon img{
  width: 20px;
}
</style>>
