<template>
  <StackLayout>
    <ProgressBarCircular :amount="percentageLevel" />
    <Label horizontalAlignment="center" text="Alcohol Level"/>
    <Label horizontalAlignment="center" :text="`${alcoholLevel | decimal} / ${threshold} `"/>
  </StackLayout>
</template>

<script>
  import ProgressBarCircular from './ProgressBarCircular'
  export default {
    name: 'StatusBar',
    components: {
      ProgressBarCircular
    },

    filters: {
      decimal (val) {
        return parseFloat(val).toFixed(2);
      }
    },

    computed: {
      threshold () {
        return 15;
      },

      percentageLevel () {
        return Math.round((this.alcoholLevel / this.threshold) * 100);
      },

      alcoholLevel () {
        return this.$store.getters['consumption/alcoholLevel'];
      },

      consumptions () {
        return this.$store.getters['consumption/consumptions' ];
      }
    }
  }
</script>