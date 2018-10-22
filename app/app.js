import Vue from "nativescript-vue"
import Vuex from 'vuex'
import stores from './store/index'
import Home from "./components/Home"
import DatabaseSetup from './database/bootstrap'

// Create the database for local storage:
const db = DatabaseSetup();

// Initialize state management for app-wide data:
Vue.use(Vuex);
const store = new Vuex.Store(stores);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    },

    store
}).$start();
