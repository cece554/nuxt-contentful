<template>
  <section class="posts section">
    <div class="posts-container">
      <article
        v-for="project in projects"
        :key="project.id"
        class="post-preview"
      >
        <h2
          class="title is-2 journal-title"
        >
          <nuxt-link :to="{ name: 'projects-slug', params: { slug: project.fields.slug, id: project.sys.id }}">
            {{ project.fields.projectTitle }}
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
  name: 'Projects',
  // `env` is available in the context object
  asyncData({ env, params }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: 'project',
        order: '-sys.createdAt'
      })
    ])
      .then(([entries, projects]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          projects: projects.items
        }
      }) // eslint-disable-next-line
      .catch(console.error)
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
