<template>
  <Page actionBarHidden>
    <StackLayout width="100%">
      <Label text="Drink Name:"></Label>
      <TextField hint="Drink name" v-model="name"></TextField>
      <Label text="Serving Size:"></Label>
      <ListPicker :items="servingSizeLabels" v-model="servingSizeIndex"></ListPicker>
      <Label text="Alcohol Content:"></Label>
      <TextField hint="Alcohol Content Percentage" keyboardType="number" v-model="alcoholContent"></TextField>
      <Button class="btn btn-primary" text="Save" @tap="onSave"></Button>
      <Button class="btn" text="Cancel" @tap="$modal.close"></Button>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    name: 'DrinkDetails',
    computed: {
      servingSizeLabels: function() { return this.servingSizes.map(({label}) => label) },
      servingSize: function() { return this.servingSizes[this.servingSizeIndex].value }, 
      servingSizes: () => [
        { label: 'Bottle (330ml)', value: 330 },
        { label: 'Bottle (500ml)', value: 500 },
        { label: 'Glass (220ml)', value: 220 },
        { label: 'Shot (30ml)', value: 30 }
      ]
    },

    data() {
      return {
        alcoholContent: 0,
        name: '',
        servingSizeIndex: 0
      }
    },

    methods: {
      async onSave() {
        await this.$store.dispatch('drinks/insertDrink', {
          name: this.name,
          alcoholContent: this.alcoholContent/100,
          servingSize: this.servingSize
        });

        alert({
          title: "Drink Added",
          message: "Your drink was added to the list!",
          okButtonText: "OK"
        });

        this.$emit('on:save');
        this.$modal.close();
      }
    }
  }
</script>