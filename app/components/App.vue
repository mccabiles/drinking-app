<template>
    <Page>
        <ActionBar title="Drinking Buddy " android:flat="true"></ActionBar>
        <StackLayout>
            <StatusBar></StatusBar>            
            <TabNavigation></TabNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import StatusBar from './StatusBar'
    import TabNavigation from './TabNavigation'
    export default {
        components: {
            StatusBar,
            TabNavigation
        },

        mounted () {
            this.$store.dispatch('drinks/getDrinks');
        },
    }
</script>