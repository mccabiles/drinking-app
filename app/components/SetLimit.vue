<template>
    <Page class="p-15">
    	<StackLayout backgroundColor="white" >
    		<Label text="Set Alcohol Threshold:"></Label>   
            <TextField 
                keyboardType="number"
                v-model="dataThreshold"
            ></TextField>
    		<Button class="btn btn-outline" text="Save" @tap="save" />
    	</StackLayout>
    </Page>
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
