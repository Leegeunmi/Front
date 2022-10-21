'use strict'
Vue.component('footer-component',{
  template: '<footer><div class="inner"><div class="footer"><h2>footer-logo</h2></div></div></footer>'
});

//router
let mainComp = { template: '<main><div class="container">main-contents</div></main>'};
let companyComp = { template: '<main><div class="container">company-contents</div></main>'};
let productComp = { template: '<main><div class="container">product-contents</div></main>'};
let galleryComp = { template: '<main><div class="container">gallery-contents</div></main>'};
let noticeComp = { template: '<main><div class="container">notice-contents</div></main>'};

let routes = [
  { path: '/', component: mainComp },
  { path: '/company', component: companyComp },
  { path: '/product', component: productComp },
  { path: '/gallery', component: galleryComp },
  { path: '/notice', component: noticeComp }
]

let router = new VueRouter({
  routes
});

let app = new Vue({
  el: '#app',
  data: {
    gnbList: [
      { text:'company', path:'/company'},
      { text:'product', path:'/product'},
      { text:'gallery', path:'/gallery'},
      { text:'notice', path:'/notice'}
    ]
  },
  router
}).$mount('#app'); //뷰 인스턴스에 라우터 추가
