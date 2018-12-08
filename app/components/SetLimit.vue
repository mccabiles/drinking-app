<template>
	<StackLayout  backgroundColor="white" >
		<Label text="Set Limit:"></Label>   
        <TextField keyboardType="number" v-model="threshold"></TextField>
		<Button class="btn btn-outline" text="Save" @tap="save" />
	</StackLayout>
     
</template>

<script>

export default {
    data() {
        return {
           threshold: this.threshold
        };
    },
    methods: {
        save() {
            this.$store.commit('user/setThreshold', this.threshold),
            this.$modal.close()
        }
    }
};
</script>
