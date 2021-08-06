<template>
  <div>
    <how-are-networks :propData="initData" />
    <div>Hello from App!</div>

    <qq-ba :propData="initData" />
  </div>
</template>

<script>
import { Main as qqBa } from './packages'

export default {
  data() {
    return {
      initData: 'app !'
    }
  },
  components: {
    qqBa
  }
}
</script>

<style>
</style>