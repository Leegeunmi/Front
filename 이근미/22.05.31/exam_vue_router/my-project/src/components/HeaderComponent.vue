<template>
<div class="header">
  {{msg}}
</div>
</template>
<!-- 실습1
아래 li메뉴 리스트를 v-for 사용하여 출력하시오.
(메뉴리스트는 href, text를 data로 생성하여 menulist배열에 담고 반복문으로 출력) -->
<script>
export default {
  name: 'header-component',
  data(){
    return {
      msg:'header component'
    }
  }
}
</script>
<style>
</style>
