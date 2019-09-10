<template>
  <div>
    <Navbar />
   <div class="container">
        <p v-if="!selectedBank.length">No results :(</p>
        <div v-for="bank in selectedBank" :key="bank.bank_id">
          <div class="card p-3">
          <img src="~/assets/images/bank.png" class="card-img-top" />
          <div class="card-body mx-auto">
            <h5 class="card-title">{{ bank.bank_name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">IFSC: {{bank.ifsc}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Branch: {{bank.branch}}</h6>
            <br />
            <h6 class="card-subtitle mb-2 text-muted">Address: {{bank.address}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">City: {{bank.city}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">District: {{bank.district}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">State: {{bank.state}}</h6>
            <button class="btn fav-icon" @click="addToFav(bank)">Add to Favorite <img src="~assets/images/like.png" alt="Favorite"></button>
          </div>
          <nuxt-link
              to="/"
              class="btn btn-primary"
            >Go Back</nuxt-link>
          </div>
          
        </div>
      </div>
  </div>
</template>
<script>
import Navbar from '@/components/navbar'
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Navbar
  },
  computed: {
    selectedBank(){
      return this.allBanks.filter(bank => {
        if(bank.ifsc === this.id){
          return bank
        }
      })
    },
    id() {
      return this.$route.params.id
    },
    ...mapGetters(["allBanks"])
  },
  beforeMount(){
    this.fetchBanks();
  },
  methods: {
    ...mapMutations(["setBanks"]),
    ...mapMutations({
      addToFav: 'favorite/add',
      removeFav: 'favorite/remove'
    }),
    ...mapActions(["fetchBanks"])
  }
}
</script>
<style scoped>

 .card{
    min-height: 100%;
    box-shadow: 3px 3px 3px darkgrey;
  }
  
  .card-img-top{
    max-width: 100px;
    margin-left: 50%;
  }

  .fav-icon:visited, .fav-icon:link{
  margin-right: 10px;
  max-width: 20px;
  outline: none;
  border: none;
}

.fav-icon:hover{
  background-color: rgb(164, 205, 252);
}

.fav-icon img{
  width: 20px;
}
</style>>

