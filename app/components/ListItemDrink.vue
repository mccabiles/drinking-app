<template>
  <GridLayout columns="*, 4*, *" rows="auto, auto">
    <Button col="0" row="0" class="btn btn-outline btn-rounded-lg">
      <Span class="fa" text.decode="&#xf0fc;"/>
    </Button>

    <StackLayout col="1" row="0">
      <Label> {{ drink.name }} </Label>
      <Label> {{ drink.servingSize }} ml | {{ drink.alcoholContent | percentage }} </Label>
      <Label> {{ standardDrinks(drink) }} Standard Drinks per Serving </Label>
    </StackLayout>
    <slot class="m-b-10" col="2" row="0" rowSpan="2" :drink="drink"></slot>
    <StackLayout col="0" colSpan="3" row="1" class="hr-light m-10"></StackLayout>
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