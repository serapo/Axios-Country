<template>
    <div class="container">
        <img :src="image" />
    </div>
   
</template>

<script>

import image from "../assets/homepage.png"

export default {
  data: function () {
    return {
      image: image
    }
  }
}

</script>

<style scoped>
img{
    position:fixed;
    margin-top:3rem;
	top:0;
	left:0;
    
	width:100%;
	height:91%;
}
.container {
    background-color: aqua;
    
}

</style>