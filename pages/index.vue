<template>
  <div>
    <hero hero-msg="We help brands build engaging digital and visual identities" />
    <div class="main-content">
      <offerings
        title="we got skills"
        description="Using our unique	range of skills we are able to offer a number of services that can be implemented to help any business get bigger and serve more people"
      />
      <approach
        title="our approach"
        description="We use a tailored approach that focused on the business goals and the consumers needs"
      />
      <projects
        title="selected works"
        description="A brief selection of some of our favorite projects form recently"
      />
      <contact
        title="let's chat"
        description="Our work isn't just about beauty we pride ourselves in the results that we have gotten for our clients and impact that our work has made on their consumers lives"
      />
      <elevator />
    </div>
  </div>
</template>

<script>
import hero from '~/layouts/sections/hero'
import offerings from '~/layouts/sections/offerings'
import approach from '~/layouts/sections/approach'
import projects from '~/layouts/sections/projects'
import contact from '~/layouts/sections/contact'
import elevator from '~/components/elevator'

// import { TweenMax, Back } from 'gsap'

export default {
  components: {
    hero,
    offerings,
    approach,
    projects,
    contact,
    elevator
  }
}
</script>

<style>
</style>
