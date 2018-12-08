<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Drinkr"></Label>
            <NavigationButton 
                android.systemIcon="ic_menu_add" 
                @tap="showAddDrink"
            />
            <ActionItem position="right"
                android.systemIcon="ic_menu_edit" 
                @tap="showSetLimit"
            ></ActionItem>
        </ActionBar>
        <StackLayout>
            <StatusBar></StatusBar>
            <TabNavigation></TabNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import DrinkDetails from './DrinkDetails'
    import TabNavigation from './TabNavigation'
    import StatusBar from './StatusBar'
    import SetLimit from './SetLimit'
    export default {
        components: {
            DrinkDetails,
            StatusBar,
            TabNavigation,
            SetLimit
        },

        async created () {
            await this.$store.dispatch('drinks/getDrinks');
            setInterval(() => this.$store.dispatch('consumption/getConsumptions'), 1000);
            this.$store.dispatch('consumption/startTimer');
        },

        methods: {
            showAddDrink() {
                this.$showModal(DrinkDetails)
            },
            showSetLimit() {
                this.$showModal(SetLimit)
            }
        }
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
