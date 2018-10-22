<template>
  <ListView for="drink in drinks">
    <v-template>
      <GridLayout columns="4*, *">
        <Label col="0" row="0" :text="drink.name"/>
      </GridLayout>
    </v-template>
  </ListView>
</template>

<script>  
  export default {
    props: {
      drinks: {
        type: Array,
        default: () => []
      }
    },

    methods: {
        onUpdate ({ id, name }) {
        }
    }
  }
</script>