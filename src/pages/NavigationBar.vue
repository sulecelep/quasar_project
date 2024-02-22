<template>
  <div data-v-ed91241c="" class="row justify-center">
    <div class="q-pa-md q-gutter-sm row">
      <button
        class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase button"
        tabindex="0"
        type="button"
        style="margin: 2px"
      >
        <span class="q-focus-helper" tabindex="-1"></span
        ><span
          class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
        >
          Bugün
        </span></button
      ><button
        class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase button"
        tabindex="0"
        type="button"
        style="margin: 2px"
        @click="props.prev"
      >
        <span class="q-focus-helper" tabindex="-1"></span
        ><span
          class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
        >
          &lt; Önceki
        </span></button
      ><button
      @click="props.next"
        class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase button"
        tabindex="0"
        type="button"
        style="margin: 2px"
      >
        <span class="q-focus-helper" tabindex="-1"></span
        ><span
          class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
        >
          Sonraki &gt;
        </span>
      </button>
    </div>
  </div>
</template>
<script setup>

const props=  defineProps({prev : Function,next : Function,today : Function,  })

</script>
