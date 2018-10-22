<template>
  <GridLayout columns="*, 4*, *" rows="auto">
    <Label col="0" row="0" /> <!-- for icon -->

    <StackLayout col="1" row="0">
      <Label> {{ drink.name }} </Label>
      <Label> {{ drink.servingSize }} ml | {{ drink.alcoholContent | percentage }} </Label>
      <Label> {{ standardDrinks(drink) }} Standard Drinks per Serving </Label>
    </StackLayout>
    <slot :drink="drink"></slot>
  </GridLayout>
</template>

<script>
  export default {
    name: 'ListItemDrink',
    
    props: {
      drink: {
        type: Object,
        default: () => ({
          name: '',
          servingSize: '',
          alcoholContent: '',
          active: 0
        })
      }
    },

    filters: {
      percentage: function(val) {
        return `${ parseFloat(val*100).toFixed(1) }%`
      }
    },

    computed: {
      standardDrinks () {
        return ({ servingSize, alcoholContent }) =>
        parseFloat(servingSize * alcoholContent / 14).toFixed(1);
      }
    }
  }
</script>