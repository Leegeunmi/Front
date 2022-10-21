import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import IntroduceComponent from '@/components/IntroduceComponent'
import HistoryComponent from '@/components/HistoryComponent'
import ProductComponent from '@/components/ProductComponent'
import GalleryComponent from '@/components/GalleryComponent'
import NoticeComponent from '@/components/NoticeComponent'
import FaqComponent from '@/components/FaqComponent'
import LocationComponent from '@/components/LocationComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-component',
      component: MainComponent
    },
    {
      path: '/introduce',
      name: 'introduce-component',
      component: IntroduceComponent
    },
    {
      path: '/history',
      name: 'history-component',
      component: HistoryComponent
    },
    {
      path: '/product',
      name: 'product-component',
      component: ProductComponent
    },
    {
      path: '/gallery',
      name: 'gallery-component',
      component: GalleryComponent
    },
    {
      path: '/notice',
      name: 'notice-component',
      component: NoticeComponent
    },
    {
      path: '/faq',
      name: 'faq-component',
      component: FaqComponent
    },
    {
      path: '/location',
      name: 'location-component',
      component: LocationComponent
    }
  ]
})
