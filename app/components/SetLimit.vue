<template>
	<StackLayout  backgroundColor="white" >
		<Label text="Set Limit:"></Label>   
        <TextField 
            keyboardType="number"
            v-model="dataThreshold"
        ></TextField>
		<Button class="btn btn-outline" text="Save" @tap="save" />
	</StackLayout>
</template>

<script>

export default {
    data() {
        return {
            dataThreshold: 0,
        };
    },

    computed: {
        threshold() { return this.$store.getters['user/threshold']; }
    },

    watch: {
        threshold: function(val) { this.dataThreshold = val; },
    },

    mounted() {
        this.$store.dispatch('user/getThreshold');
        this.dataThreshold = this.threshold;
    },

    methods: {
        save() {
            this.$store.dispatch('user/setThreshold', this.dataThreshold),
            this.$modal.close()
        }
    }
};
</script>
