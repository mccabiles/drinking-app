<template>
  <StackLayout orientation="horizontal">
    <Label verticalAlignment="center" text=""/>
    <StackLayout>
      <ProgressBarCircular :amount="percentageLevel" />
      <Label horizontalAlignment="center" text="Alcohol Level"/>
      <Label horizontalAlignment="center" :text="`${alcoholLevel} / ${threshold} `"/>
    </StackLayout>
  </StackLayout>
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
        return 15;
      },

      percentageLevel () {
        return Math.round((this.alcoholLevel / this.threshold) * 100);
      },

      alcoholLevel () {
        return Math.round(this.$store.getters['consumption/alcoholLevel']) || 0;
      },

      consumptions () {
        return this.$store.getters['consumption/consumptions' ];
      }
    }
  }
</script>