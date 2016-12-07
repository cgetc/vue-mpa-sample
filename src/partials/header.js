import template from './header.html'

export default {
  template,
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return this.$root.$data
  }
}
