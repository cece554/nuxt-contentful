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
          <nuxt-link :to="{ name: 'thoughts-slug', params: { slug: post.fields.slug, id: post.sys.id }}">
            {{ post.fields.title }}
          </nuxt-link>
        </h2>
      </article>
    </div>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  name: 'Thoughts',
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items[0],
        posts: posts.items
      }
    })
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
