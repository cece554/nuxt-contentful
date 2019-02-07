<template>
  <section id="work" class="work section">
    <div class="container section-intro">
      <h2 class="title is-2 is-uppercase">
        {{ title }}
      </h2>
      <p class="subtitle">
        {{ description }}
      </p>
    </div>
    <div class="container">
      <div id="app">
        <div class="title-container">
          <div>
            <h3 class="title">
              Our Projects
            </h3>
          </div>
          <div class="filters">
            <span v-for="category in categories" :key="category.id" class="filter">
              <h1>{{ category.fields.title }}</h1>
            </span>

            <!-- <span class="filter" :class="{ active: currentFilter === 'ALL' }" @click="setFilter('ALL')">
              ALL
            </span>
            <span class="filter" :class="{ active: currentFilter === 'ART' }" @click="setFilter('ART')">
              ART
            </span>
            <span class="filter" :class="{ active: currentFilter === 'WORKSHOPS' }" @click="setFilter('WORKSHOPS')">
              WORKSHOPS
            </span>
            <span class="filter" :class="{ active: currentFilter === 'FUN' }" @click="setFilter('FUN')">
              FUN
            </span> -->
          </div>
        </div>

        <transition-group class="projects" name="projects">
          <div v-for="project in projects" :key="project.id" class="project">
            <div class="project-image-wrapper">
              <img class="project-image" :src="project.fields.projectImage.fields.file.url">
              <div class="gradient-overlay" />
              <div class="circle">
                <span class="project-title">
                  {{ project.fields.company }}
                </span>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
      <div class="container" />
    </div>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  name: 'Pro',
  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  asyncData({ env, params }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        content_type: 'category'
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
  },
  methods: {
    setFilter: function(filter) {
      this.currentFilter = filter
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html,
body {
  margin: 0;
  font-family: 'Helvetica';
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Helvetica', cursive;
  font-size: 30pt;
  font-weight: normal;
}

.project-title {
  font-size: 16pt;
}

.filter {
  font-family: arial;
  padding: 6px 6px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.35s;
}

.filter.active {
  box-shadow: 0px 1px 3px 0px #00000026;
}

.filter:hover {
  background: lightgray;
}

.projects {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}

.circle {
  text-align: center;
  position: absolute;
  bottom: -38px;
  left: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  /* 	border:1px solid black; */
  display: flex;
  box-shadow: 0px -4px 3px 0px #494d3257;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* 	box-shadow:0px -3px 3px #484848a6; */
}

.project {
  /* 	position:relative; */
  transition: all 0.35s ease-in-out;
  margin: 10px;
  box-shadow: 0px 2px 8px lightgrey;
  border-radius: 3px;
  width: 180px;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* 	justify-content:center; */
  align-items: center;
}

.project-image-wrapper {
  position: relative;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  /* 	width:100%; */
  /* 	height:100%; */
  opacity: 0.09;
  background: linear-gradient(
      to bottom,
      rgba(0, 210, 247, 0.65) 0%,
      rgba(0, 210, 247, 0.64) 1%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top,
      rgba(247, 0, 156, 0.65) 0%,
      rgba(247, 0, 156, 0.64) 1%,
      rgba(0, 0, 0, 0) 100%
    );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.project-image {
  width: 100%;
  height: 150px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
/*#projectSort {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  font-size: 1.25em;
  font-weight: 400;
  justify-content: center;
}
input[type='checkbox'] {
  display: none !important;
}
label:hover {
  font-weight: 600 !important;
}
.checkboxes div > :first-child {
  margin-left: 0;
} */
</style>
