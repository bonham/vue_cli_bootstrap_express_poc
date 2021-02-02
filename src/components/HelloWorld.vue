<template>
  <div>
    <BootContainer btcontent="here should be rows and columns" />
  </div>
</template>

<script>
import BootContainer from './BootContainer.vue'

export default {
  name: 'HelloWorld',
  components: {
    BootContainer
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

