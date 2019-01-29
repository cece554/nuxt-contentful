<template>
  <div class="column is-one-third">
    <div class="project">
      <div :class="item.windowFrame">
        <a :href="item.website">
          <img :src="require(`@/assets/projects/${item.graphic}`)" alt>
        </a>
      </div>
      <div class="project-details">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <div>
                <a href class="company">
                  {{ item.companyName }}
                </a>
              </div>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item">
              <div>
                <a
                  v-for="cat in item.category"
                  :key="cat.id"
                  href
                  class="work-cat"
                >
                  {{ cat }}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$red: #f04d24;
$orange: #ca4423;
$blue: #18a8e1;
$black: #1f1e1f;
$beige: #c6c2be;
$white: #f5f0ec;

.work {
  a:link {
    color: $black;
  }

  .level {
    margin: 10px 0;
    font-size: 1em;
  }
}

.work-cat {
  overflow-wrap: break-word;
  &:not(:last-child)::after {
    content: ', ';
  }
}

.company {
  text-transform: uppercase;
  font-weight: 600;
}

.imgBorder {
  min-height: 8em;
  border: 4px solid $black;
  min-height: 120px;
  img {
    object-fit: cover;
    display: block;
    width: 100%;
  }
}

// Browser
.browser {
  border-top: 0.8em solid $black;
  border-bottom: 4px solid $black;
  border-left: 4px solid $black;
  border-right: 4px solid $black;

  position: relative;
  border-radius: 6px 6px 0 0;
  img {
    object-fit: cover;
    display: block;
    width: 100%;
  }
}

.browser:before {
  display: block;
  position: absolute;
  content: '';
  top: -0.55em;
  left: 0.2em;
  width: 0.3em;
  height: 0.3em;
  border-radius: 50%;
  background-color: $beige;
  box-shadow: 0 0 0 0px $beige, 0.5em 0 0 0px $beige, 1em 0 0 0px $beige;
}
</style>
