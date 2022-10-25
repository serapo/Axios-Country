<template>
<div class="hello">
    <v-container>
        <v-row  >
            <v-col >
               <v-card class="d-flex justify-center align-center ">
                <ul v-for="(item, index) in items.splice(0,20)" :key="index"> <li>
                  <img :src="item.flags.svg"/>
                  {{item.name.common}}
          
                </li>
              </ul>
               </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            items: [],
        };
    },
    async created() {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/all`);
            this.items = res.data;
            console.log(this.items)
        } catch (error) {
            console.log(error);
        }
    },
};
</script>
<style scoped>
  img {
    width: 100px;
    height: 100px;
  }
</style>