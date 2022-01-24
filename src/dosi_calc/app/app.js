import Vue from 'nativescript-vue'

import Page1 from './components/Page1'

new Vue({
  render: (h) => h('frame', [h(Page1)]),
}).$start()
