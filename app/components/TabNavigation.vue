<template>
  <TabView androidTabsPosition="top">
    <TabViewItem title="Session">
      <TabViewSession :drinks="activeDrinks" @on:drink="onDrink"></TabViewSession>
    </TabViewItem>

    <TabViewItem title="Drinks">
      <TabViewDrinks :drinks="drinks"></TabViewDrinks>
    </TabViewItem>
  </TabView>
</template>

<script>
  import TabViewSession from './TabViewSession'
  import TabViewDrinks from './TabViewDrinks'
  export default {
    name: 'TabNavigation',
    components: {
      TabViewDrinks,
      TabViewSession
    },

    computed: {
      activeDrinks () {
        return this.$store.getters['drinks/activeDrinks']
      },

      drinks () {
        return this.$store.getters['drinks/drinks'];
      }
    },

    methods: {
      onDrink (alcoholLevel) {
        this.$store.dispatch('user/increaseAlcoholLevel', alcoholLevel);
        this.$store.dispatch('consumption/addConsumption', { amount: alcoholLevel });
        
        alert({
          title: "",
          message: "Your alcohol level has increased!",
          okButtonText: "OK"
        });
      }
    }
  }
</script>