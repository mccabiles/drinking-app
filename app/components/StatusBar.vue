
<template>
  <GridLayout columns="*, *" rows="200, 40">
    <StackLayout col="1" row="0" verticalAlignment="center">
      <ProgressBarCircular :amount="percentageLevel" />
      <Label horizontalAlignment="center" text="Alcohol Level"/>
      <Label horizontalAlignment="center" :text="`${alcoholLevel} / ${threshold} `"/>
    </StackLayout>
    
    <StatusBarText col="0" row="0" :level="alcoholLevel"></StatusBarText>
    <NormalizationTimer 
      col="0" colSpan="2" row="1"
      :value="alcoholLevel"
    ></NormalizationTimer>
  </GridLayout>
</template>

<script>
  import NormalizationTimer from './NormalizationTimer'
  import ProgressBarCircular from './ProgressBarCircular'
  import StatusBarText from './StatusBarText'
  import Vue from "nativescript-vue"

  export default {
    name: 'StatusBar',
    components: {
      NormalizationTimer,
      ProgressBarCircular,
      StatusBarText
    },

    computed: {
      threshold () {
        return this.$store.getters['user/threshold']
      },

      percentageLevel () {
        return Math.round((this.alcoholLevel / this.threshold) * 100);
      },

      alcoholLevel () {
        return parseFloat(this.$store.getters['consumption/alcoholLevel']).toFixed(2) || 0;
      },

      consumptions () {
        return this.$store.getters['consumption/consumptions' ];
      }
    },

    created() {
      setInterval(() => this.$store.dispatch('user/getThreshold'), 1500);
    },
}
</script>
