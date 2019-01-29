<template>
  <section id="offerings" class="offerings section">
    <div class="container section-intro">
      <h2 class="title is-2 is-uppercase">
        {{ title }}
      </h2>
      <p class="subtitle">
        {{ description }}
      </p>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="box offer-box">
            <h3 class="title is-3">
              Design
            </h3>
            <div class="content">
              Rooted in User Experience principles, we craft beautiful
              experiences that meet business expectations and serve users needs.
              <ul>
                <li>Web Design</li>
                <li>UI/UX</li>
                <li>Mobile</li>
                <li>Strategy</li>
              </ul>
            </div>
            <!-- <button class="button is-uppercase">Learn More</button> -->
          </div>
        </div>
        <div class="column">
          <div class="box offer-box">
            <h3 class="title is-3">
              Development
            </h3>
            <div class="content">
              Using the cutting edge technologies available to us we not only
              design experiences that are beautiful, but ones that work.
              <ul>
                <li>Animation</li>
                <li>CMS</li>
                <li>Ecommerce</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <!-- <button class="button is-uppercase">Learn More</button> -->
          </div>
        </div>
        <div class="column">
          <div class="box offer-box">
            <h3 class="title is-3">
              Branding
            </h3>
            <div class="content">
              Does your brand tell your story and captivate the attention of you
              audience, are you willing to risk your brand sending the wrong
              message
              <ul>
                <li>Brand Identity</li>
                <li>Naming</li>
                <li>logo Design</li>
                <li>Package / Print Design</li>
              </ul>
            </div>
            <!-- <button class="button is-uppercase">Learn More</button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Offerings',
  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>
