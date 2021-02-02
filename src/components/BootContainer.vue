<template>
  <div class="container">
    {{ btcontent }}    
  </div>
</template>

<script>
export default {
  name: 'BootContainer',
  props: {
    btcontent: {
      type: String,
      required: true
    }
  }
}
</script>

