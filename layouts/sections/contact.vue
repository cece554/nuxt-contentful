<template>
  <section id="contact" class="contact section">
    <div class="container section-intro">
      <h2 class="title is-2 is-uppercase">
        {{ title }}
      </h2>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="subtitle">
            {{ description }}
          </p>
        </div>
        <inquiry-form />
      </div>
    </div>
  </section>
</template>

<script>
import inquiryForm from '~~/components/inquiryForm'

export default {
  name: 'Contact',
  components: {
    inquiryForm
  },
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
