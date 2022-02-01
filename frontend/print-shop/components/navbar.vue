<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji"> 🏠 </span>
    </nuxt-link>
    
    <!--If you are logged in-->
    <ul v-if="username">
      <li><a href="#" >{{ username }}</a></li>
      <li><a href="#" @click="logout">Logout</a></li>
    </ul>

    <ul v-else>
      <li><a href="/users/register">Signup</a></li>
      <li><a href="/users/signin">Signin</a></li>
    </ul>

    <button class="snipcart-checkout flex items-center">
      <Cart />
      <span
        class="snipcart-total-price ml-3 font-semibold text-sm text-pink"
      ></span>
    </button>
  </div>
</template>
<script>
import Cart from "./icons/cart.vue";
import { mapMutations } from 'vuex';
export default {
  components: {
    Cart,
  },
  computed:{
    //Set your username using the getter
    username(){
      return this.$store.getters['auth/username']
    }
  },
  //Define the needed mutations, here: auth/logout
  methods: {
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
};
</script>
<style>
.emoji {
  font-size: 45px;
}
</style>