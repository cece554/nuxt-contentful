<template>
  <section id="approach" class="approach section">
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
          <div class="box approach-box">
            <h3 class="title is-3">
              Discovery
            </h3>
            <div class="content">
              Our goal is to make sure we not only understand your business, but
              the collective people you serve as well. This is the stage where
              we really dig into to who everyone is and what their needs are.
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box approach-box">
            <h3 class="title is-3">
              Strategy
            </h3>
            <div class="content">
              We gather all our research from the discovery phase and use it to
              build a blueprint with the end result being a beautiful and
              intuitive experience that in return drives growth for your
              business.
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box approach-box">
            <h3 class="title is-3">
              Execution
            </h3>
            <div class="content">
              This is where we work our magic. Using the strong foundation built
              during the earlier stages, we take our talents and create work
              that has the growth of your business and customers in mind.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Approach',
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
