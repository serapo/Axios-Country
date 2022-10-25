<template>
  <div>
   
    <p>{{ind}}</p>
    
 yhy
  </div>
 </template>
 
 <script>
 export default {
 props :["ind"],
 computed: {
   nedProp() {
     return this.ind
   }
 },
 mounted() {
   console.log(this.ind)
 },
 watch: {
   ind() {
     console.log("aaaa")
   }
 }
 }
 
 
 </script>