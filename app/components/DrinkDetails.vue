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
    },
    props: {
      drink: {
        type: Object,
        default: null,
        required: false
      }
    },
    data() {
      const servingSizes = [
        { label: 'Bottle (500ml)', value: 500 },
        { label: 'Bottle (330ml)', value: 330 },
        { label: 'Glass (220ml)', value: 220 },
        { label: 'Shot (30ml)', value: 30 }
      ]
      if (this.drink) {
        let sizeValues = servingSizes.map(size => size.value) //array of values
        //use reduce function to find the value in sizeValues array that is nearest (lowest absolute value) to the this drink's servingSize
        let nearestValue = sizeValues.reduce((nearest, current) =>
           Math.abs(this.drink.servingSize - current) < Math.abs(this.drink.servingSize - nearest) ? current : nearest
        )
        return {
          alcoholContent: Math.round(this.drink.alcoholContent*100),
          name: this.drink.name,
          servingSizeIndex: sizeValues.indexOf(nearestValue),
          servingSizes: servingSizes,
        }
      } else {
        return {
          alcoholContent: 0,
          name: "",
          servingSizeIndex: 0,
          servingSizes: servingSizes,
        }
      }
    },

    methods: {
      async onSave() {
          console.log("MY DWINKS: ", this.drink);
          if(this.drink) {
            await this.$store.dispatch('drinks/updateDrink', {
              id: this.drink.id,
              name: this.name,
              alcoholContent: this.alcoholContent/100,
              servingSize: this.servingSize
            });

            alert({
              title: "Drink Editted",
              message: "Your drink has been editted in the list!",
              okButtonText: "OK"
            });
          } else {
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
          }
        this.$emit('on:save');
        this.$modal.close();
      }
    }
  }
</script>
