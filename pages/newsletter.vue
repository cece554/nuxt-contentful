<template>
  <section id="newsletter" class="newsletter section">
    <div class="wrapper">
      <div class="columns">
        <div class="column left-side">
          <router-link to="/">
            <img
              class="logo"
              src="@/assets/img/trg-logo.svg"
              alt="That's Really Good"
            >
          </router-link>
          <img
            class="newsletter-logo"
            src="@/assets/img/newsletter-logo.svg"
            alt="The News Letter"
          >
        </div>
        <div class="column right-side">
          <h2 class="title is-2">
            Take a break from the hustle and enjoy a thoughtfully curated weekly newsletter featuring selections focused on enhancing your health, wealth, and productivity while bringing excitement and cool gear to your daily life and work.
          </h2>

          <div class="subscribe-form">
            <div
              id="mauticform_wrapper_trgsubscribeform"
              class="mauticform_wrapper"
            >
              <form
                id="mauticform_trgsubscribeform subscribe"
                autocomplete="false"
                role="form"
                method="post"
                action="https://mautic.thatsreallygood.co/form/submit?formId=1"
                data-mautic-form="trgsubscribeform"
                enctype="multipart/form-data"
              >
                <div class=" ">
                  <div class="field is-horizontal" data-mautic-form-page="1">
                    <div
                      id="mauticform_trgsubscribeform_email"
                      class="field f email control i-email"
                    >
                      <label
                        id="mauticform_label_trgsubscribeform_email"
                        for="mauticform_input_trgsubscribeform_email email"
                      >
                        Email
                      </label>
                      <input
                        id="mauticform_input_trgsubscribeform_email"
                        name="mauticform[email]"
                        value=""
                        class="input"
                        type="email"
                        placeholder="jay@patrick.com"
                        required
                      >
                    </div>

                    <div
                      id="mauticform_trgsubscribeform_submit"
                      class="field f fl submit"
                    >
                      <div class="control i-submit">
                        <button
                          id="mauticform_input_trgsubscribeform_submit"
                          type="submit"
                          name="mauticform[submit]"
                          value=""
                          class="button"
                        >
                          SUBSCRIBE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="mauticform-errormsg" style="display: none;" />
                <div
                  id="mauticform_trgsubscribeform_error"
                  class="mauticform-error "
                />
                <div
                  id="mauticform_trgsubscribeform_message"
                  class="mauticform-message"
                />
                <input
                  id="mauticform_trgsubscribeform_id"
                  type="hidden"
                  name="mauticform[formId]"
                  value="1"
                >
                <input
                  id="mauticform_trgsubscribeform_return"
                  type="hidden"
                  name="mauticform[return]"
                  value=""
                >
                <input
                  id="mauticform_trgsubscribeform_name"
                  type="hidden"
                  name="mauticform[formName]"
                  value="trgsubscribeform"
                >
              </form>
            </div>


            <div class="subtext">
              One email per week. No spam ever
            </div>
          </div>

          <div class="magnet">
            <div class="columns">
              <div class="column l">
                <div class="subscriber-count">
                  <p class="stand-back">
                    Join over
                  </p>
                  <p class="standout">
                    2000
                  </p>
                  <p class="stand-back">
                    subscribers
                  </p>
                </div>
              </div>
              <div class="column m">
                <div class="speech-bubble">
                  <p class="reader-quote">
                    “A newsletter I wish I could read daily. It’s another reason
                    to look forward to Fridays. Keep up the good work!”
                  </p>
                  <p class="reader">
                    Alex Kleber
                  </p>

                  <div class="triangle-outline" />
                  <div class="triangle" />
                </div>
              </div>
              <div class="column r">
                <div class="send-date">
                  <p class="stand-back">
                    Sent every
                  </p>
                  <p class="standout">
                    Friday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  layout: 'headless',
  transition: 'page',
  head() {
    return {
      title: 'The Newsletter',
      meta: [
        {
          name: 'description',
          content:
            'A thoughtfully curated weekly newsletter featuring selections focused on enhancing your health, wealth, and productivity while bringing excitement and cool gear to your daily life and work.'
        },
        {
          name: 'keywords',
          content:
            'recommendations, tech, entrepreneur, founder, design, development, gadgets, gear, apps, email, newsletter'
        }
      ]
    }
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

/* Update Bulma's global variables */
$family-primary: 'Halcyon', sans-serif;
$family-secondary: 'GTSectraDisplay-Super', 'Montserrat', sans-serif;
$text: $black;
$body-color: $text;
$grey-light: $beige;
$primary: $orange;
$secondary: $blue;
$link: $text;

.newsletter {
  &.section {
    margin: 0;
    padding: 0;
  }

  // left
  .left-side {
    min-height: 100vh;
    min-width: 50vw;
    display: flex;
    flex-direction: column;
  }
  .left-side::before {
    content: '';
    position: absolute;
    width: 50vw;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: no-repeat center/268%
      url('~@/assets/img/newsletter-bg-full-v2.svg');
  }
  .logo {
    margin: 3.5rem 2.25rem;
    max-width: 272px;
    width: 100%;
  }
  .newsletter-logo {
    max-width: 400px;
    width: 100%;
    align-self: center;
    margin: auto 0;
  }
  // right
  .right-side {
    background: $red;
    min-height: 100vh;
    min-width: 50vw;
    padding: 2.8em 2.8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: -0.75rem;
  }

  .columns {
    .m {
      flex: 2;
    }
  }
  .title {
    font-weight: 500;
    padding-bottom: 1em;
  }
  // form
  .subscribe-form {
    margin-bottom: 2.2em;
  }
  form {
    box-shadow: -8px 8px 0 -1px $black;
  }
  .field {
    height: 68px;
    margin-bottom: 0.75rem;
  }
  .field.is-horizontal .control {
    background: $white;
  }
  .input:hover {
    border: 0;
  }
  .input:focus,
  .input:active {
    border: 4px solid $beige;
  }
  .submit {
    flex: 1;
  }
  .button {
    height: 100%;
    border: 0 solid $black;
    background: $secondary;
    &:hover {
      background: $primary !important;
    }
  }
  .subtext {
    font-weight: 300;
  }

  // magnet

  .magnet .column {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .send-date,
  .subscriber-count {
    text-align: center;
    flex: 1;
  }
  .send-date {
    .stand-back {
      padding: 2.2px;
    }
  }
  .stand-back {
    text-transform: uppercase;
    line-height: 0;
  }
  .standout {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3.4rem;
    line-height: 1.22;
  }

  .speech-bubble {
    padding: 1.5rem;
    border: 4px solid $black;
    box-shadow: -6px 6px 0 -1px $black;
    position: relative;
    p {
      line-height: 1.2;
    }
  }
  .triangle-outline {
    border-left: 30px solid transparent;
    border-top: 30px solid #191919;
    bottom: -30px;
    content: '';
    position: absolute;
    left: 18px;
  }
  .triangle {
    border-left: 5px solid transparent;
    bottom: -20px;
    position: absolute;
    left: 2.2em;
  }
  .triangle::before {
    border-left: 28px solid transparent;
    border-top: 28px solid #191919;
    bottom: -8px;
    content: '';
    position: absolute;
    right: 2px;
  }
  .triangle::after {
    border-left: 20px solid transparent;
    border-top: 22px solid $red;
    bottom: 0px;
    content: '';
    position: absolute;
    right: -4px;
  }
  .reader {
    text-align: right;
    font-size: 14px;
    padding: 6px 0 0 0;
  }
}
// media queries
@media screen and (max-width: 1100px) {
  .newsletter {
    .left-side {
      min-width: 44vw;
    }
    .newsletter-logo {
      max-width: 300px;
    }
  }
}

@media screen and (max-width: 950px) {
  .newsletter {
    .left-side {
      min-width: 40vw;
    }
    .right-side {
      min-width: 62vw;

      .title.is-2 {
        font-size: 2.4rem;
      }
      .column {
        margin-bottom: 2.2em;
        padding: 1rem;
      }
      .stand-back {
        font-size: 1.2rem;
        font-weight: 500;
      }
      .standout {
        font-size: 3rem;
        line-height: 1.1;
      }
      .send-date {
        .stand-back {
          padding: 4px;
        }
      }
    }
    .newsletter-logo {
      width: 250px;
    }
    .left-side::before {
      transform: rotate(180deg);
      background-size: 300%;
    }
  }
}

@media screen and (max-width: 768px) {
  .newsletter {
    .left-side {
      padding-bottom: 2em;
      min-height: 50vh;
    }
    .left-side::before {
      top: -10%;
      width: 100vw;
      transform: rotate(0deg);
      background-size: 150%;
    }
    .button {
      width: 100%;
    }
    .field {
      height: auto;
      margin-bottom: 0;
    }
    .field.f.fl {
      border-top: 0;
    }

    .subtext {
      margin-top: 1.6rem;
    }
    .magnet {
      margin-top: 2em;
    }
    .stand-back {
      font-size: 2.8rem;
    }
    .standout {
      font-size: 6rem;
      line-height: 1.2;
    }
    .right-side {
      padding: 6em 4em;
      .columns {
        display: flex;
      }
      .column {
        margin-bottom: 4em;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .newsletter {
    .left-side::before {
      top: -20%;
      width: 100%;
      transform: rotate(0deg);
      background-size: 250%;
    }
    .right-side {
      padding: 2.6em;
      .columns {
        display: flex;
        flex-direction: column;
      }
      .column {
        margin-bottom: 3.6em;
      }
    }
    .stand-back {
      font-size: 2rem !important;
      line-height: 0;
      padding: 0.02rem;
    }
    .standout {
      font-size: 6.2rem !important;
      padding-top: 0.18rem;
    }
  }
  .section {
    padding: 0;
  }
}
</style>
