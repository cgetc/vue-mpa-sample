import mediator from '../mediator'

mediator.$emit('page-view', {
  data () {
    const data = Object.assign({
      inputValue: 'aaaa'
    }, this.$root.$data)
    return data
  },
  watch: {
    inputValue (newValue) {
      this.error = newValue === '' ? '入力してください' : ''
    }
  }
})

