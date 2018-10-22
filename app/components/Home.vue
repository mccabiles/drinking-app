<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Drinkr"></Label>
        </ActionBar>

        <GridLayout>
            <TabNavigation></TabNavigation>
        </GridLayout>
    </Page>
</template>

<script>
    import TabNavigation from './TabNavigation'
    export default {
        components: {
            TabNavigation
        },

        mounted () {
            this.$store.dispatch('drinks/getDrinks');
        },
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
