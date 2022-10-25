<template>
<div class="hello">
    <v-container>
        <v-col>
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
import MapsCountryVue from "./MapsCountry.vue";
export default {
    name: "App",
    components: {
        MapsCountryVue,
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
            console.log(this.secilenLocation);
        },
    },
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
    margin-top:5rem;
    list-style: none;
    width: 30%;
    height: 100%;
    background-color:lightgray ;
   align-items: center;
}
li{
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    
}
</style>
