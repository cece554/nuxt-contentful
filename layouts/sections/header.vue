<template>
  <section class="header section">
    <!-- NAVBAR -->
    <nav
      class="navbar has-background-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="@/assets/img/trg-logo.svg" width="300">
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': isActive }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="toggle"
        >
          <span aria-hidden="true" /> <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-end" />
        <a href="/#contact" class="navbar-item">
          Contact
        </a>
        <nuxt-link
          to="/thoughts"
          class="navbar-item"
        >
          Thoughts
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="navbar-item"
        >
          Projects
        </nuxt-link>
        <nuxt-link
          to="
            /newsletter"
          class="navbar-item newsletter-link"
        >
          Newsletter
        </nuxt-link>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  name: 'MainHeader',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
a.newsletter-link {
  font-weight: 500 !important;
}
</style>
