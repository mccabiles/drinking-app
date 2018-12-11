<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Drinkr"></Label>
            <ActionItem
                position="right" 
                android.systemIcon="ic_menu_add" 
                @tap="showAddDrink"
            />
            <ActionItem position="right"
                android.systemIcon="ic_menu_edit" 
                @tap="showSetLimit"
            ></ActionItem>
            <ActionItem
                position="right" 
                android.systemIcon="ic_dialog_info" 
                @tap="showAbout"
            />
        </ActionBar>
        <StackLayout>
            <StatusBar></StatusBar>
            <TabNavigation></TabNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import About from './About'
    import DrinkDetails from './DrinkDetails'
    import TabNavigation from './TabNavigation'
    import StatusBar from './StatusBar'
    import SetLimit from './SetLimit'
    export default {
        components: {
            About,
            DrinkDetails,
            StatusBar,
            TabNavigation,
            SetLimit
        },

        mounted () {
            setInterval(() => this.$store.dispatch('drinks/getDrinks'), 100);
            setInterval(() => this.$store.dispatch('consumption/getConsumptions'), 1000);
            setInterval(() => this.$store.dispatch('consumption/startTimer'), 2000);
            setInterval(() => this.$store.dispatch('user/getThreshold'), 3000);
        },

        methods: {
            showAddDrink() {
                this.$showModal(DrinkDetails)
            },
            showSetLimit() {
                this.$showModal(SetLimit)
            },
            showAbout() {
                this.$showModal(About)
            },
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
