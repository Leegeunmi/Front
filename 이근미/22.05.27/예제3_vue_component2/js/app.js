'use strict'
// header-logo(이름) 컴포넌트 생성하여
//index.html, company.html의 #app요소에 추가하시오.

//전역 컴포넌트 생성하여 index.html, company.html의 footer .inner요소에 추가하시오.

//footerHeader(이름) 컴포넌트
Vue.component('header-logo',{
  template: '<h1><a href="index.html">Home</a></h1>'
});
Vue.component('footer-header',{
  template: '<div class="footer-header"><h2><a href="index.htmls">logo</a></h2></div>'
});

// 이름: footer-list
//내용:
//<ul>
 // <li><a href="#">list1</a></li>
 // <li><a href="#">list2</a></li>
 // <li><a href="#">list3</a></li>
// </ul>
// app instance의 지역 컴포넌트를 생성하여 index.html, company.html의 footer .inner요소에 추가하시오.
let app = new Vue({
  el: '#app',
  data: {
    menuList: [
      {text: 'company', ahref: 'company.html'},
      {text: 'product', ahref: 'product.html'},
      {text: 'gallery', ahref: 'gallery.html'},
      {text: 'notice', ahref: 'notice.html'}
    ]
  },
  components: {
    'footer-list': {
      template: '<ul><li><a href="#">list1</a></li><li><a href="#">list2</a></li><li><a href="#">list3</a></li></ul>'
    }
  }
});
