<template>
  <div>
    <header>
      <div class="menu" style="float:right;">
        <img src="../img/다운로드.png" />
        <img src="../img/1200px-Search_Noun_project_15028.svg.png" />
      </div>
      <div class="title">kakao</div>
    </header>

    <hr />

    <section>
      <custom-compo :subTitle="'보도자료'" :contents="'카카오, 라이언&춘식의 ‘라춘댄스 시즌2’ 공개'" />
      <custom-compo :subTitle="'주가정보'" :contents="'81,200 하락전일대비 500 하락 | 등락률-0.61%'"/>
      <custom-compo :subTitle="'주가정보'" :contents="'부산 컴퓨터 과학고등학교 3학년 2반 14번 dlehgusajy IQ 80, 몸무게 8000kg 의 남방큰 돌고래로 밝혀져'"/>
      <custom-compo :subTitle="'주가정보'" :contents="'81,200 하락전일대비 500 하락 | 등락률-0.61%'"/>
    </section>
  </div>
</template>

<script>
import CustomCompo from '../components/CreateContainer.vue';
export default {
  components:{
    CustomCompo,
  }
}
</script>

<style>
  img{
    width: 20px;
  }

  header{
    margin: 0px auto;
  }

  .title{
    font-size: 40px;
    font-weight:bold;
  }

  custom-compo{
    margin: 10px;
  }

</style>