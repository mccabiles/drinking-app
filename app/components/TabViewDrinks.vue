<template>
  <StackLayout>
    <Label class="p-l-2 h1" text="Drinks"></Label>
    <ScrollView>
      <StackLayout class="m-b-10">
        <ListItemDrink v-for="drink in drinks" :drink="drink">
          <Switch 
            :checked="drink.active > 0"
            @checkedChange="onUpdate(drink)"
          />
        </ListItemDrink>
      </StackLayout>
    </ScrollView>
  </StackLayout>
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