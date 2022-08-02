<template>
  <div class="cont">
    <h1 v-if="CardTitle">{{CardTitle}}</h1>
    <h1 v-else>none-title</h1>
    <r/>
    <ul>
        <li v-for="n in CountMenu" :key="n">{{n}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        CountMenu: Number,
        CardTitle: String,
    }


}
</script>

<style>
    .cont{
        background: blue;

        margin: 100px 0px;
    }
    
</style>