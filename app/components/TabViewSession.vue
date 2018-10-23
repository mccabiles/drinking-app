<template>
  <StackLayout height="100%">
    <ScrollView>
      <StackLayout class="m-y-10">
        <ListItemDrink v-for="drink in drinks" :drink="drink" :key="drink.id">
          <Button col="2" class="btn btn-primary btn-rounded-lg" text="G" @tap="onDrink(drink)">
          </Button>
        </ListItemDrink>
      </StackLayout>
    </ScrollView>

    <Label v-if="drinks.length < 1" 
      class="text-muted" 
      height="100%"
      horizontalAlignment="center"
      verticalAlignment="center" 
      text="What are we drinking tonight?"
    />
  </StackLayout>
</template>

<script>  
  import ListItemDrink from './ListItemDrink'
  export default {
    components: {
      ListItemDrink
    },

    props: {
      drinks: {
        type: Array,
        default: () => []
      }
    },

    methods: {
        onDrink ({ id, servingSize, alcoholContent }) {
          let standardDrink = servingSize * alcoholContent / 14;
          this.$emit('on:drink', standardDrink);
        }
    }
  }
</script>