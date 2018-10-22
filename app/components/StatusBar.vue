<template>
  <ProgressBarCircular :progress="alcoholLevel">
    <Label text="Alcohol Level"/>
  </ProgressBarCircular>
</template>

<script>
  import ProgressBarCircular from './ProgressBarCircular'
  export default {
    name: 'StatusBar',
    components: {
      ProgressBarCircular
    },

    props: {
      alcoholLevel: {
        type: [Number, String],
        default: 20
      }
    }
  }
</script>