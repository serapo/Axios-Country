<template>
<div class="hello">
    <v-container>
        <v-col>
         <p> Value : {{this.$store.state.yazilanValue}}</p>
         <form class="form-inline my-2 my-lg-0">
                <input v-model="value" class="search mr-sm-2" type="search" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="ValueYaz" >Search</button>
            </form>
            <v-row>
                <ul v-for="(item, index) in items.splice(0, 10)" :key="index">
                    <li><img :src="item.flags.svg" /></li>
                    <li><span>Country : </span>{{ item.name.common }}</li>
                    <li><span>Region : </span>{{ item.region }}</li>
                    <br />
                    <li>
                        <a type="button" class="btn btn-primary" :href="item.maps.googleMaps" target="_blank">Go
                            Location</a>
                    </li>

                    <maps-country-vue :secilenLocation="item.maps.googleMaps"></maps-country-vue>
                </ul>
            </v-row>
        </v-col>
    </v-container>

</div>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    props: ["val"],
    components: {

    },
    data() {
        return {
            items: [],
            secilenLocation: "",
            ind: "",
        };
    },
    async created() {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/all`);
            this.items = res.data;
            console.log(this.items);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        goLocation(maps, ind) {
            console.log(ind);
            this.secilenLocation = maps;
            // console.log(this.secilenLocation);
        },
        
        ValueYaz(e){
            
            //alert(this.value)
            e.preventDefault();
            //console.log(this.value)
            //this.value=""
            //console.log((this.$store.state.yazilanValue)*5)
            this.$store.state.yazilanValue=this.value
            console.log(this.$store.state.yazilanValue)
            this.value=""
        
    }
        
    },
    watch :{
        ValueYaz(){
            if(!this.$store.state.yazilanValue){
             //console.log(this.$store.state.yazilanValue)
            }
        }  
    },
    computed: {
    filteredAndSorted(){
     // function to compare names
     function compare(a, b) {
       if (a.name < b.name) return -1;
       if (a.name > b.name) return 1;
       return 0;
     }
      
     return this.items.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
     }).sort(compare)
    }
  }

};
</script>

<style scoped>
img {
    width: 50%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    margin-top: 5rem;
    list-style: none;
    width: 30%;
    height: 100%;
    background-color: lightgray;
    align-items: center;
}

li {

    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;

}
</style>
