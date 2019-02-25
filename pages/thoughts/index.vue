<template>
  <section class="posts section">
    <div class="posts-container">
      <article
        v-for="(post, index) in posts"
        :key="index"
        class="post-preview"
      >
        <h2
          class="title is-2 journal-title"
        >
          <nuxt-link :to="post.fields.slug">
            {{ post.fields.title }}
          </nuxt-link>
        </h2>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Thoughts',

  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  }
}
</script>

<style>
.posts.section {
  padding: 12rem 8rem 10rem 8rem;
  height: 100vh;
}
.posts-container {
  margin: 0 auto;
  max-width: 62rem;
}
</style>
