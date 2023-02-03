<template>
  <div v-if="this.logeado == true" class="">
    <!-- <div> -->
      
    <Header  />
    <!-- <Menu /> -->
     
      <Menu />
      <!-- <transition name="fade" mode="in-out">
        <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive>
      </transition> -->
    
    <Footer />

  </div>
  <div v-else class="">
    <!-- <h1>{{ this.user }}</h1> -->
    <Login />
    

  </div> 

</template>
 
<script >
import { RouterLink, RouterView } from 'vue-router'
import Login from "./components/Login.vue"
import { mapStores,mapState,storeToRefs } from 'pinia'

import { useAuthStore } from './stores/user';
// const authstore = useAuthStore();
import Header from './components/Header.vue';
import Menu from './components/Sidebar.vue';
import Footer from './components/Footer.vue';

// import mixins from './mixins/mixins'
export default {
  name: 'App',
  setup() {
    const store = useAuthStore()
    const {user} =storeToRefs(store)
    return {user}
  },
  components: {
    Header,
    Menu,
    Footer,
    Login
  },
  data() {
    return {
      logeado: false,
      usuario: this.$attrs.usuario,
      menu: this.$attrs.principal
    }
  },
  methods: {
    obtenerestado(){
      
    }
    
  },
  computed:{
    // ...mapState(useAuthStore,['user'])
  },
  created() {
    if(this.user==null){
      this.logeado=false
    }else{
      this.logeado=true
    }
    // console.log(useAuthStore)
    // let obtenerUsuario=authstore.user
    // console.log(obtenerUsuario)

  },

}
</script>
  
<style>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 1;
} */
</style>