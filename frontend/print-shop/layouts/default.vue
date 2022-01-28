<template>
  <div class="md:flex flex-col w-screen h-screen content-center p-6">
    <NavBar />
    <Nuxt />
    <div hidden id="snipcart" data-api-key="ZmNjNDFmYzItNGNmMi00ZmU2LTkzOGMtN2I3MmEyNDExZWY2NjM3NzgzMzA2MTYwMzc1MTc5"></div>
  </div>
</template>
<script>
import NavBar from './../components/navbar'
export default {
  components: { NavBar }
}
</script>

