<template>
  <ScrollView>
    <StackLayout class="m-y-10">
      <ListItemDrink v-for="drink in drinks" :drink="drink" :key="drink.id">
        <Switch
          col="3"
          :checked="drink.active > 0"
          @checkedChange="onUpdate(drink)"
        />
        <FlexboxLayout slot="ud-btns" col="0" flexDirection="column">
          <Button text.decode="&#xf044;" class="fa ud-btn btn-primary btn-active" @tap="showEditDrink(drink)"/>
          <Button text.decode="&#xf1f8;" class="fa ud-btn btn-danger btn-active" @tap="showDeleteDrink(drink)"/>
        </FlexboxLayout>
      </ListItemDrink>
    </StackLayout>
  </ScrollView>
</template>

<script>
  import { mapActions } from 'vuex'
  import ListItemDrink from './ListItemDrink'
  import DrinkDetails from './DrinkDetails'
  import DrinkDelete from './DrinkDelete'

  export default {
    name: 'TabViewDrinks',

    components: {
      ListItemDrink,
      DrinkDetails,
      DrinkDelete,
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
      },

      showEditDrink(drink) {
        this.$showModal(DrinkDetails, {props: {drink: drink}})
      },

      showDeleteDrink(drink) {
        this.$showModal(DrinkDelete, {props: {drink: drink}})
      }
    }
  }
</script>

<style>
.ud-btn {
  width: 150px !important;
}

.btn-danger {
  background-color: #ff3333;
  color: white;
}
</style>
