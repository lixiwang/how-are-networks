<template>
  <div class="container">
    xxx!
    <div>{{msg}}</div>
    <div>{{propData}}</div>
  </div>
</template>

<script>
export default {
  name: 'how-are-networks',
  data() {
    return {
      msg: 'Welcome to How-are-networks'
    }
  },
  props: {
    propData: {
      type: String,
      default: '...'
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}
</style>