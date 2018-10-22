<template>
  <GridLayout columns="3" rows="auto">
    <Label text="Alcohol Level" col="0" row="0"/>
  </GridLayout>
</template>

<script>
  export default {
    name: 'StatusBar',
    props: {
      alcoholLevel: {
        type: [Number, String],
        default: 0
      }
    }
  }
</script>