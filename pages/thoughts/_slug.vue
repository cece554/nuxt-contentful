<template>
  <section class="journal section">
    <article v-if="!isLoading" class="journal-container">
      <div class="journal-details">
        <h6 class="journal-date title is-6">
          {{ currentPost.fields.date }}
        </h6>
        <h2 class="journal-title title is-2">
          {{ currentPost.fields.title }}
        </h2>
      </div>
      <div class="journal-entry">
        <div v-html="$md.render(currentPost.fields.body)" />
      </div>
    </article>
    <p v-else class="loading">
      Loading
    </p>
  </section>
</template>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  computed: {
    currentPost() {
      return this.$store.state.post.currentPost
    },
    isLoading() {
      return this.$store.state.post.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('post/getPostBySlug', params.slug)
  }
  /* created() {
    this.richBody = this.post.fields.body
      ? documentToHtmlString(this.post.fields.body, this.renderOptions)
      : ''
  } */
}
</script>

<style lang="scss" scoped>
$red: #f04d24;
$orange: #ca4423;
$blue: #18a8e1;
$black: #1f1e1f;
$beige: #c6c2be;
$white: #f5f0ec;
p {
  padding-bottom: 2.4rem;
  font-size: 1.8rem;
}
.journal.section {
  padding: 12rem 8rem 10rem 8rem;
  min-height: 100vh;
}
.journal-container {
  margin: 0 auto;
  max-width: 62rem;
}
.journal-details {
  margin-bottom: 2.2rem;
}
.journal-title {
  font-weight: 800;
  font-size: 3.8rem;
}
.journal-date {
  margin-bottom: 0;
  color: $beige;
}

@media screen and (max-width: 768px) {
  .journal.section {
    padding: 12rem 6rem 10rem 6rem;
  }
}
@media screen and (max-width: 540px) {
  .journal.section {
    padding: 12rem 2rem 10rem 2rem;
  }
}
</style>
