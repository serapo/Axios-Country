<template>
<hello-world></hello-world>
<navbar-vue></navbar-vue>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavbarVue from './components/Navbar.vue';

export default {
  name: 'App',
  components:{
    HelloWorld,
    NavbarVue
  }
 
}
</script>


