<template>
  <Page actionBarHidden>
    <StackLayout width="100%">
      <Label class="m-15" textWrap="true">
        <FormattedString>
          <Span text="Are you sure you want to delete "></Span>
          <Span :text="drink.name" fontWeight="bold"></Span>
          <Span text=" from the list?"></Span>
        </FormattedString>
      </Label>
      <Button class="btn btn-danger" text="Yes" @tap="onYes"></Button>
      <Button class="btn btn-primary" text="No" @tap="$modal.close"></Button>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    name: 'DrinkDelete',
    props: {
      drink: {
        type: Object
      }
    },
    methods: {
      async onYes() {
        await this.$store.dispatch('drinks/deleteDrink', this.drink);
        alert({
          title: "Drink Deleted",
          message: "Your drink was deleted from the list!",
          okButtonText: "OK"
        });
        this.$emit('on:delete');
        this.$modal.close();
      }
    }
  }
</script>
<style>
  .btn.btn-danger {
    background-color: #ff3333;
    color: white;
  }
</style>
