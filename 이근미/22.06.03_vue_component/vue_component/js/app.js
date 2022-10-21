'use strict'
Vue.component('child-component',{
  template: '<button class="g-btn" v-on:click="showLog">show</button>',
  methods: {
    showLog: function(){
      console.log('showLog!');
      this.$emit('my-log');
    }
  }
});

let app = new Vue ({
  el: '#app',
  methods: {
    showTest: function(){
      console.log('click test');
    }
  }
});
