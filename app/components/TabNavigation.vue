<template>
  <TabView androidTabsPosition="bottom">
    <TabViewItem title="Session">
      <TabViewSession :drinks="activeDrinks"></TabViewSession>
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
    }
  }
</script>