<template>
  <div>
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import mainHeader from './sections/header'
import mainFooter from './sections/footer'

export default {
  components: {
    mainHeader,
    mainFooter
  }
}
</script>
<style>
</style>
