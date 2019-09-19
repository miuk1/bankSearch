<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group mt-3">
            <input
              v-model="query"
              type="text"
              class="form-control"
              placeholder="Search your bank..."
              autofocus
            />
            <span class="search"><img src="~/assets/images/search.png" alt="Search"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <p v-if="!paginateData.length">
          <img class="loader" src="~/assets/images/loader.gif" alt="Loading">
        </p>
        <div v-for="bank in paginateData" :key="bank.ifsc" class="col-sm-3">
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
            <button class="btn fav-icon" @click="addToFav(bank)" title="Add to Favorite"><img src="~assets/images/like.png" alt="Favorite"></button>
          </div>
          </div>
          
        </div>
      </div>
      <div v-if="filteredList.length>0">
        <p>Page Size</p>
        <select name="pageSize" id="pageSize" v-model="size" disabled>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>
      <div class="btns" v-if="filteredList.length>0">
      <button :disabled="pageNumber === 0" @click="prevPage" class="btn btn-primary">Previous</button>
      <span>{{ pageNumber +1 }} out of {{pageCount}}</span>
      <button :disabled="pageNumber >= pageCount -1" @click="nextPage" class="btn btn-primary" >Next</button>
      </div>
    </section>
    
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      query: "",
      pageNumber: 0,
      loading: true
    };
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 8
    }
  },
  computed: {
    pageCount() {
      let l = this.filteredList.length;
      let s = this.size;
      return Math.ceil(l / s);
    },
    paginateData() {
      let start = this.pageNumber * this.size;
      let end = start + this.size;
      this.loading = false;
      return this.filteredList.slice(start, end);
    },
    filteredList() {
      return this.allBanks.filter(bank => {
        return bank.bank_name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    ...mapGetters(["allBanks"])
  },
  beforeMount() {
    this.fetchBanks();
  },
  methods: {
    ...mapMutations(["setBanks"]),
    ...mapMutations({
      addToFav: 'favorite/add',
      removeFav: 'favorite/remove'
    }),
    ...mapActions(["fetchBanks"]),
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  }
};
</script>
<style scoped>
  .btns{
    margin: 10px;
    text-align: center;
  }

.fav-icon:hover{
  background-color: rgb(164, 205, 252);
}
  .col-sm-3{
    margin-bottom: 10px;
  }

  .card{
    min-height: 100%;
    box-shadow: 3px 3px 3px darkgrey;
  }

  .card:hover{
    transform: scale(1.1);
    z-index: 10;
    transition: all .2s;
  }

  h6{
    font-size: 14px;
    line-break: strict;
  }


.card-img-top{
  width: 50%;
  margin-left: 25%;
}

.search{
  display: inline-block;
  position: absolute;
  top: 35%;
  right: 5%;
}

.search img {
  max-width: 20px;
}

.fav-icon:visited, .fav-icon:link{
  margin-right: 10px;
  max-width: 20px;
  outline: none;
  border: none;
}

.fav-icon img{
  width: 20px;
}

.loader{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>>

