<template>
  <ScrollView>
    <StackLayout height="100%">
      <ListItemDrink v-for="drink in drinks" :drink="drink">
        <Switch col="2" row="0" rowSpan="2" 
          :checked="drink.active > 0"
          @checkedChange="onUpdate(drink)"
        />
      </ListItemDrink>
    </StackLayout>
  </ScrollView>
</template>

<script>  
  import { mapActions } from 'vuex'
  import ListItemDrink from './ListItemDrink'
  export default {
    name: 'TabViewDrinks',

    components: {
      ListItemDrink
    },

    props: {
      'drinks': {
        type: Array,
        default: () => []
      }
    },


    methods: {
      updateDrink (drink) {
        return this.$store.dispatch('drinks/updateDrink', drink);
      },

      async onUpdate ({ id, active }) {
        console.log('update')
        if(active > 0) await this.updateDrink({ id, active: 0 });
        else await this.updateDrink({ id, active: 1 });
      }
    }
  }
</script>