<template>
  <div class="column is-two-thirds">
    <div class="project-inquiry">
      <form
        action="https://formspree.io/collette@thatsreallygood.co"
        method="post"
      >
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field f mobile-f">
              <p class="control i-name">
                <label for="name">
                  Name
                </label>
                <input
                  v-model="name"
                  class="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                >
              </p>
            </div>
            <div class="field f fl">
              <p class="control i-email">
                <label for="email">
                  Email
                </label>
                <input
                  v-model="email"
                  class="input"
                  type="email"
                  name="_replyto"
                  placeholder="alex@smith.com"
                  required
                >
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field f ft">
              <div class="control i-message">
                <label for="textarea">
                  Scope of Project
                </label>
                <textarea
                  v-model="scope"
                  class="textarea"
                  name="message"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body checkbox-body">
            <div class="field f ft">
              <div class="control i-checkbox checkbox-control">
                <label for="checkbox">
                  Fields of interest
                </label>
                <div class="input-group">
                  <label class="checkbox-container">
                    <input
                      id="Design"
                      v-model="checkedService"
                      type="checkbox"
                      name="service"
                      value="Design"
                    >
                    <span class="checkbox" /> Design
                  </label>
                  <label class="checkbox-container">
                    <input
                      id="Development"
                      v-model="checkedService"
                      type="checkbox"
                      name="service"
                      value="Development"
                    >
                    <span class="checkbox" /> Development
                  </label>
                  <label class="checkbox-container">
                    <input
                      id="Branding"
                      v-model="checkedService"
                      type="checkbox"
                      name="service"
                      value="Branding"
                    >
                    <span class="checkbox" /> Branding
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body row-last">
            <div class="field f ft ff">
              <div id="i-slider" class="control i-slider">
                <label for="sliderWithValue">
                  Budget
                </label>
                <div class="slider-inputs">
                  <input
                    id="sliderWithValue"
                    v-model="sliderValue"
                    class="slider has-otuput is-fluid"
                    type="range"
                    name="Budget"
                    step="500"
                    max="15000"
                  >
                  <div class="ui-slider-handle" />
                  <output for="sliderWithValue">
                    ${{ sliderValue }}
                  </output>
                </div>
              </div>
            </div>
            <div class="field f ft fl">
              <div class="control i-submit">
                <button type="submit" class="button is-red">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InquiryForm',
  data() {
    return {
      checkedService: [],
      name: [],
      scope: [],
      email: [],
      sliderValue: 0
    }
  }
}
</script>

<style lang="scss">
$red: #f04d24;
$orange: #ca4423;
$blue: #18a8e1;
$black: #1f1e1f;
$beige: #c6c2be;
$white: #f5f0ec;

$family-primary: 'Halcyon', sans-serif;
$family-secondary: 'GTSectraDisplay-Super', sans-serif;
$text: $black;
$body-color: $text;
$grey-light: $beige;
$primary: $orange;
$secondary: $blue;
$link: $text;

// **  CONTACT SECTION **
.contact.section .title {
  margin-bottom: 1em;
}

.contact .subtitle {
  max-width: 100%;
}

// Contact form
label {
  margin-right: 6px;
  margin-left: 16px;
}

.input[type='text'],
.input[type='email'] {
  padding-left: 7.2rem !important;
  font-size: 1.6rem;
  min-height: 68px !important;
}

.i-name,
.i-email,
.i-message {
  display: flex;
  align-items: center;
}
.control {
  font-size: 1.6rem !important;
}
.i-slider label,
.i-checkbox label {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
  left: 16px;
}

// row one
.input[type='text'],
.input[type='email'] {
  padding-left: 7.2rem;
  height: 68px;
}

.i-name label,
.i-email label {
  position: absolute;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
}

// row two

.textarea:not([rows]) {
  min-height: 160px !important;
  padding: 3.6rem 0.625rem 0.625rem 1.6rem !important;
  font-size: 1.4rem !important;
}

.i-message label {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
  position: absolute;
  top: 18px;
}

// row three - Fields of interest

.input-group label {
  font-weight: 400;
  text-transform: none;
}

.checkbox-container {
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}

.checkbox-body {
  display: flex;
  flex-direction: row;

  .checkbox {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid $black;
    transition: all 0.15s ease;
    background: $white;
    display: inline-block;
    margin-right: 2px;
    vertical-align: top;
  }

  input:checked + .checkbox,
  .checkbox:hover,
  input:checked:focus {
    background: $secondary;
    border: 2px solid $black;
  }

  input[type='checkbox']:checked {
    animation: cd-bounce 0.3s;
  }

  .checkbox:active {
    background: $secondary;
    border: 6px solid $black;
  }

  label {
    margin-right: 6px;
    margin-left: 16px;
  }

  .checkbox-control {
    display: flex;
    align-items: center;
  }

  .input-group-label {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    padding-left: 16px;
    padding-top: 0;
    position: absolute;
    left: 40px;
  }
}
.field.is-horizontal .field {
  width: 100%;
}

//row four
.i-slider label {
  margin-right: 24px;
}

.slider-inputs {
  width: 60%;
  display: flex;
  align-items: center;
}

.i-slider output {
  margin-left: 16px;
}

.i-slider {
  display: flex;
  align-items: center;
}

.row-last {
  display: flex;
  height: 68px;

  .field.f.ft.ff {
    flex-grow: 6;
  }

  .field.f.ft.fl {
    flex-shrink: 6;
  }

  button {
    height: 68px;
    width: 100%;
    border: 0;
    border-bottom: 4px solid $black;
  }
}
@media screen and (max-width: 400px) {
  row-last {
    display: flex;
    flex-direction: column;
    height: 68px;

    .field.f.ft.ff {
      flex-grow: 6;
    }

    .field.f.ft.fl {
      flex-shrink: 6;
    }

    button {
      height: 68px;
      width: 100%;
      border: 0;
      border-bottom: 4px solid $black;
    }
  }
}

// Slider

$track-color: $black !default;
$thumb-color: $secondary !default;

$thumb-radius: 12px !default;
$thumb-height: 20px !default;
$thumb-width: 20px !default;
$thumb-shadow-size: 0 !default;
$thumb-shadow-blur: 0 !default;
$thumb-shadow-color: $white;
$thumb-border-width: 2px !default;
$thumb-border-color: $black !default;

$track-width: 100% !default;
$track-height: 2px !default;
$track-shadow-size: 0 !default;
$track-shadow-blur: 0 !default;
$track-shadow-color: rgba(0, 0, 0, 0.2) !default;
$track-border-width: 1px !default;
$track-border-color: $black !default;

$track-radius: 0 !default;
$contrast: 0 !default;

$ie-bottom-track-color: darken($track-color, $contrast) !default;

@mixin shadow($shadow-size, $shadow-blur, $shadow-color) {
  box-shadow: $shadow-size $shadow-size $shadow-blur $shadow-color,
    0 0 $shadow-size lighten($shadow-color, 5%);
}

@mixin track {
  cursor: default;
  height: $track-height;
  transition: all 0.2s ease;
  width: $track-width;
}

@mixin thumb($adjustment: 0) {
  @include shadow($thumb-shadow-size, $thumb-shadow-blur, $thumb-shadow-color);
  background: $thumb-color;
  border: $thumb-border-width solid $thumb-border-color;
  border-radius: $thumb-radius;
  cursor: default;
  height: $thumb-height + $adjustment;
  width: $thumb-width + $adjustment;
}

@mixin disabled {
  cursor: not-allowed;
}

input[type='range'] {
  -webkit-appearance: none;
  background: transparent;
  margin: $thumb-height / 2 0;
  width: $track-width !important;

  &::-moz-focus-outer {
    border: 0;
  }

  &:focus {
    outline: 0;

    &::-webkit-slider-runnable-track {
      background: lighten($track-color, $contrast);
    }

    &::-ms-fill-lower {
      background: $track-color;
    }

    &::-ms-fill-upper {
      background: lighten($track-color, $contrast);
    }
  }

  &::-webkit-slider-runnable-track {
    @include track;
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-webkit-slider-thumb {
    @include thumb;
    -webkit-appearance: none;
    margin-top: (
      (-$track-border-width * 2 + $track-height) / 2 - $thumb-height / 2
    );
  }

  &::-moz-range-track {
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    @include track;
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
    height: $track-height / 2;
  }

  &::-moz-range-thumb {
    @include thumb(-4);
  }

  &::-ms-track {
    @include track;
    background: transparent;
    border-color: transparent;
    border-width: ($thumb-height / 2) 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: $ie-bottom-track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: ($track-radius * 2);
  }

  &::-ms-fill-upper {
    @include shadow(
      $track-shadow-size,
      $track-shadow-blur,
      $track-shadow-color
    );
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: ($track-radius * 2);
  }

  &::-ms-thumb {
    @include thumb(-4);
    margin-top: $track-height / 4;
  }

  &:disabled {
    &::-webkit-slider-thumb {
      @include disabled;
    }

    &::-moz-range-thumb {
      @include disabled;
    }

    &::-ms-thumb {
      @include disabled;
    }

    &::-webkit-slider-runnable-track {
      @include disabled;
    }

    &::-ms-fill-lower {
      @include disabled;
    }

    &::-ms-fill-upper {
      @include disabled;
    }
  }
}
</style>
