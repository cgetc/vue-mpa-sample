import Vue from 'vue'
import Body from './partials/body'
import mediator from './mediator'

new Vue({
  mixins: [
    Body
  ],
  el: document.body,
  components: {
    'page-view' (resolve) {
      mediator.$on('page-view', resolve)
    }
  }
})
