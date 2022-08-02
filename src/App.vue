<template>
  <div>
    <h1>hi</h1>
    <br/>

    <card-ui :CountMenu="3" :CardTitle="'first Card'"/>
    <card-ui :CountMenu="5"/>

  </div>
</template>

<script>
import cardUi from './components/card-ui.vue'
import CardUi from "./components/card-ui.vue"
export default {
  components: { cardUi },
    CardUi,
}
</script>

<style>
    
</style>