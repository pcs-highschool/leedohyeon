<template>
  <div class="container">
    <div class="header">
      <img src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72" />
      <div class="subTitle">{{subTitle}}</div>
      <img src="../img/dot_icon.png" class="position-right"/>
    </div>
  
    <div class="body">
      <span>{{contents}}</span>
    </div>

  </div>



</template>

<script>
export default {
  props:{
    subTitle: String,
    contents: String,
  },
}
</script>

<style>
    .container{
      max-width: 300px;
      margin: 10px;
      border: 1px solid black;
      border-radius: 20px;

      padding: 10px;
    }
    .subTitle{
      border: 1px solid black;
      border-radius: 50px;

      margin: 10px;
      padding: 3px;
    }

    .container, .subTitle{
      display: inline-block;
    }

    .position-right{
      float:right;
    }
</style>