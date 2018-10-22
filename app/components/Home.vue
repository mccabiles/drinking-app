<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Drinkr"></Label>
        </ActionBar>

        <StackLayout>
            <StatusBar></StatusBar>
            <TabNavigation></TabNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import TabNavigation from './TabNavigation'
    import StatusBar from './StatusBar'
    export default {
        components: {
            StatusBar,
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
