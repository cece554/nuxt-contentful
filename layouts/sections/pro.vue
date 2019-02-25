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
      <!-- check boxes -->
      <div id="projectSort">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="form-check form-check-inline"
        >
          <label
            class="form-check-label"
            :class="{ 'has-text-weight-semibold': category.checked }"
          >
            <input
              v-model="category.checked"
              class="form-check-input"
              type="checkbox"
              @change="getfilteredData"
            >
            {{ category.value }}
          </label>
        </div>
      </div>

      <!-- end of checkboxes -->
      <div class="container">
        <div class="columns is-multiline is-6">
          <work-card
            v-for="(item, index) in filteredData"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
// import { createClient } from '~/plugins/contentful'
import workCard from '~~/components/workCard'
import data from '~/data/data'

// const client = createClient()
export default {
  name: 'Pro',
  components: {
    'work-card': workCard
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
  },
  /*
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
*/
  data() {
    return {
      filteredData: [],
      categories: [
        {
          checked: false,
          value: 'Design'
        },

        {
          checked: false,
          value: 'Development'
        },

        {
          checked: false,
          value: 'Branding'
        }
      ]
    }
  },
  computed: {
    selectedFilters() {
      const filters = []

      const checkedFiters = this.categories.filter(obj => obj.checked)

      checkedFiters.forEach(element => {
        filters.push(element.value)
      })

      return filters
    }
  },

  mounted() {
    this.getfilteredData()
  },
  methods: {
    getfilteredData() {
      this.filteredData = data
      let filteredDataByfilters = []

      // first check if filters where selected

      if (this.selectedFilters.length > 0) {
        filteredDataByfilters = this.filteredData.filter(obj =>
          this.selectedFilters.every(val => obj.category.indexOf(val) >= 0)
        )
        this.filteredData = filteredDataByfilters
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#projectSort {
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
}
</style>
