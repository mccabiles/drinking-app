
<template>
  <GridLayout columns="*, *" rows="auto">
    <StackLayout col="1">
      <ProgressBarCircular :amount="percentageLevel" />
       <Label horizontalAlignment="center" text="Alcohol Level"/>
     <Label horizontalAlignment="center" :text="`${alcoholLevel} / ${threshold} `"/>
    </StackLayout>
    
   <StatusBarText col="0" :level="alcoholLevel"></StatusBarText>
  </GridLayout>
</template>

<script>
  import ProgressBarCircular from './ProgressBarCircular'
  import StatusBarText from './StatusBarText'
  export default {
    name: 'StatusBar',
    components: {
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
    }
}
</script>