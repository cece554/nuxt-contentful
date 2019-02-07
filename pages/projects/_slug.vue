<template>
  <section class="lightbox">
    <nuxt-link to="/#work">
      <div class="close-container">
        <img src="@/assets/img/close.svg" alt>
      </div>
    </nuxt-link>
    <div class="container">
      <div class="hero is-medium">
        <div class="hero-body">
          <div class="title is-1">
            {{ project.fields.projectTitle }}
          </div>
          <div class="subtitle">
            {{ project.fields.subtext }}
          </div>
        </div>
      </div>
      <div class="gallery">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <img
                src="https://onepagelove.imgix.net/2018/04/opl-big-22.jpg"
                alt=""
              >
            </div>
            <div class="column is-half">
              <img
                src="https://onepagelove.imgix.net/2018/04/opl-big-22.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: 'project',
        'fields.slug': params.slug
      })
      .then(projects => {
        return {
          project: projects.items[0]
        }
      }) // eslint-disable-next-line
      .catch(console.error)
  }
}
</script>
<style scoped lang="scss">
$red: #f04d24;
$orange: #ca4423;
$blue: #18a8e1;
$black: #1f1e1f;
$beige: #c6c2be;
$white: #f5f0ec;

/* Update Bulma's global variables */
$family-primary: 'Halcyon', sans-serif;
$family-secondary: 'GTSectraDisplay-Super', sans-serif;
$text: $black;
$body-color: $text;
$grey-light: $beige;
$primary: $orange;
$secondary: $blue;
$link: $text;

// LIGHTBOX

.lightbox {
  margin-top: 40px;
  background: $beige;

  .title,
  .subtitle {
    color: $black;
  }
  .container {
    max-width: 1000px;
  }
  .title {
    font-size: 5rem;
  }
}

.close-container {
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  background: $beige;

  img {
    width: 32px;
    height: 32px;
    fill: $white;
  }
}

/* trasnitions */
/*.bounce-enter-active {
  animation: bounce-in .10s;
}
.bounce-leave-active {
  animation: bounce-in .10s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
} */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
