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
export default {
  name: 'Projects',
  computed: {
    projects() {
      return this.$store.state.projects.projects
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('projects/getProjects', params.slug)
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
