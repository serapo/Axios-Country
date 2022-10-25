<template>
<div>
    <header-list></header-list>
    <hello-world></hello-world>

</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderList from './components/HeaderList.vue';


export default {
    name: 'App',
    components: {
        HelloWorld,
        HeaderList
    }

}
</script>
