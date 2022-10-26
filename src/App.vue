<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">API</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <router-link
                     to="/" 
                    class="nav-link"
                    >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                    to="/bayrak" 
                    class="nav-link"
                    :val="value"
                    >Bayraklar</router-link>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> -->
            </ul>
            
        </div>
    </nav>
    <FooterList></FooterList>
    <router-view/>

</div>
</template>

<script>
import FooterList from './components/FooterList.vue'

export default {
    name: 'App',
    
    data(){
        return {
            
        }
         },
    components: {
        FooterList
    },
    
}
</script>
<style>
.navbar {
 background-color:lightgray ;
align-items: center;
}
form{
 
  width: 25rem;
}
.search{
  background-color:lightgray;
  width:18rem ;
  height: 2.1rem;
}
</style>
