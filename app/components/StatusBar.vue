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

    computed: {
      threshold () {
        return 20;
      },

      percentageLevel () {
        /*console.log(`STATUSBAR: PercentageLevel = alcoholLevel[ ${this.alcoholLevel} ]
          percentage [ ${Math.round((this.alcoholLevel / this.threshold) * 100)} ]`)
        return Math.round((this.alcoholLevel / this.threshold) * 100);*/
      },

      alcoholLevel () {
        return this.$store.getters['user/alcoholLevel'];
      }
    }
  }
</script>