<template>
  <section>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            {{ heroMsg }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    heroMsg: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
@media screen and (max-width: 540px) {
  .hero-body {
    padding-top: 60px;
    padding-bottom: 120px;
  }
}
</style>
