<template>
  <div class="back-to-top-container back-to-top-container--intersecting" data-controller="viewport-entrance-toggle" data-viewport-entrance-toggle-class="back-to-top-container--intersecting">
    <button class="back-to-top__button button" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
      Back to top
    </button>
  </div>
</template>

<script>
</script>

<style scoped>
.back-to-top-container {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
}

.back-to-top__button {
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  opacity: 1;
  visibility: visible;
  transition: all 0.2s ease;
}

.back-to-top-container--intersecting .back-to-top__button {
  opacity: 0;
  visibility: hidden;
}

.button {
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.85);
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 1.5em;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  border: 1px solid #555;
  font-size: 1rem;
}
</style>
