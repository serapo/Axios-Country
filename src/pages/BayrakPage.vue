<template>
<div class="hello">
    <v-container>
        <v-col>
            
            <form class="form-inline my-2 my-lg-0">
                <input 
                v-model="searchText" 
                class="search mr-sm-2" 
                type="search" 
                placeholder="Search">
                <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="ValueYaz">Search</button> -->
            </form>
            <v-row>
                <ul  v-for="(item, index) in filtered" :key="index">
                    <li><img :src="item.flags.svg" /></li>
                    <li><span>Country : </span>{{ item.name.common }}</li>
                    <li><span>Region : </span>{{ item.region }}</li>
                    <br />
                    <li>
                        <a type="button" class="btn btn-primary" :href="item.maps.googleMaps" target="_blank">Go
                            Location</a>
                    </li>

                   
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
    components: {

    },
    data() {
        return {
            items: [],
            secilenLocation: "",
            ind: "",
            searchText: "",
            result: [],
            value:"",
            show:true
        };
    },
    async created() {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/all`);
            this.items = res.data.splice(0, 10);
            const data = this.items;
            for (let i in data) {
                this.result.push(data[i].name.common)
            }

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
        ValueYaz(e) {
            e.preventDefault();
            // this.$store.state.yazilanValue=this.value
            // console.log(this.result)
            // this.result.map (name=>{
            //     if(name.includes(this.value))
            //     {
            //        console.log(name)
            //        this.show=false
            //     }}
            //     )
        }

    },
    computed: {
        
    filtered() {
        if (this.searchText.length >= 2) {
        const fixSearchText = this.searchText.toLowerCase().trim();
        return this.items.filter((item) =>
          item.name.common.toLowerCase().trim().includes(fixSearchText)
        );
      } else {
        return this.items;
      }
    },
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
