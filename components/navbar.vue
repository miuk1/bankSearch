<template>
  <div class="mynav">
    <h3>Find Your bank</h3>
    <div class="container">
    <a v-if="favoriteBanks" class="favorite" href="/favourite">Favourite <img src="~/assets/images/heart.png" alt="Favorite Banks"> {{ favoriteBanks }}</a>
  </div>
  </div>
</template>
<script>
export default {
  computed: {
    favoriteBanks(){
      return this.$store.getters['favorite/numberOfBanks']
    },
  }
}
</script>
<style lang="css" scoped>
.mynav{
  margin: 10px;
  text-align: center;
  border-bottom: 1px solid rgb(0, 140, 255);
}

.mynav h3{
  font-size: 32px;
  text-transform: uppercase;
  color: rgb(0, 140, 255); 
  line-height: 1.6;
}

.favorite img{
  max-width: 20px;
}

</style>