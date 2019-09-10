<template>
  <div>
    <Navbar />
    <Search />
  </div>
</template>
<script>
import Navbar from '~/components/navbar'
import Search from '~/components/search'
export default {
  components: {
    Navbar,
    Search
  }
}
</script>
<style lang="css">
*{
  box-sizing: border-box;
}
</style>