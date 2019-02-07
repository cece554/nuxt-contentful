<template>
  <section class="hero-wrap">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            {{ heroMsg }}
          </h1>
        </div>
      </div>
    </div>
    <div class="local-nav">
      <a href="/#offerings" class="local-nav-item">
        Offerings
      </a>

      <a href="/#approach" class="local-nav-item">
        Approach
      </a>
      <a href="/#work" class="local-nav-item">
        Work
      </a>
      <a href="/#contact" class="local-nav-item">
        Contact
      </a>
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
.hero-wrap {
  position: relative;
}
.local-nav {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 2rem 3.6rem 0;
  display: flex;
  flex-direction: column;
  text-align: right;
}
@media screen and (max-width: 540px) {
  .hero-body {
    padding-top: 60px;
    padding-bottom: 120px;
  }
}
</style>
