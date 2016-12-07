import Vue from 'vue'
import Header from './header'

export default Vue.extend({
  components: {
    'header-view': Header
  },
  data () {
    return window.DATA || {}
  }
})
