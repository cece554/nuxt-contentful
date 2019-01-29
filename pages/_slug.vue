<template>
  <section class="journal section">
    <article class="journal-container">
      <div class="journal-details">
        <h6 class="journal-date title is-6">
          {{ post.fields.date }}
        </h6>
        <h2 class="journal-title title is-2">
          {{ post.fields.title }}
        </h2>
      </div>
      <div class="journal-entry">
        <span v-html="post.fields.body" />
      </div>
    </article>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  // `env` is available in the context object
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
      })
      .then(entries => {
        return {
          post: entries.items[0]
        }
      })
  }
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
