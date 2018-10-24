import Vue from 'vue'
import API from '@/api/consumption.sqlite'
import UserAPI from '@/api/user.app-settings'
var moment = require('moment')

const state = {
	consumptions: [],
	timeNow: moment()
};

const TIMEFORMAT = 'YYYYMMDD kk:mm:ss';
let timer;

const getNetAmount = ({ datetime, amount }, timeNow) => {
	let timeSince = moment(datetime, TIMEFORMAT);
    let deduction = timeNow.diff(timeSince, 'minutes');
    let net = amount - (deduction / 60);
    return (net < 0) ? 0 : net;
};

/*const getAlcoholLevel = (arrConsumptions, timeNow) => {
	let alcoholLevel = 0;
  arrConsumptions.forEach(consumption => {
    let net = getNetAmount(consumption, timeNow);
    alcoholLevel += net;
  });
  return alcoholLevel;
};*/

const getAlcoholLevel = (timeNow) => {
	let { alcoholLevel, last_updated } = UserAPI.getAlcoholLevel();
	let newLevel = getNetAmount({ datetime: last_updated, amount: alcoholLevel }, timeNow);
	UserAPI.setAlcoholLevel(newLevel, timeNow.format(TIMEFORMAT));
	return newLevel;
};

const getActiveConsumptions = (arrConsumptions, timeNow) => {
	let activeConsumptions = arrConsumptions.filter(consumption => 
		(getNetAmount(consumption, timeNow) > 0) 
	);
};

const getters = {
	consumptions: (state) => state.consumptions,
	activeConsumptions: (state) => getActiveConsumptions(state.consumptions, state.timeNow),
	alcoholLevel: (state) => getAlcoholLevel(state.timeNow)
};

const mutations = {
	setConsumptions: (state, consumptions) => {
		Vue.set(state, 'consumptions', [ ...consumptions ]);
	},

	setTimeNow: (state) => {
		Vue.set(state, 'timeNow', moment());
	}
};

const actions = {
	startTimer: ({ commit }) => {
		commit('setTimeNow');
		if (timer) clearInterval(timer);
		timer = setInterval(() => commit('setTimeNow'), 1000 * 5);
	},

	getConsumptions: async ({ commit }) => {
		let consumptions = await API.getAll();
		commit('setConsumptions', consumptions);
	},

	addConsumption: async ({ state, getters, dispatch }, { amount }) => {
		await API.insert({ amount, datetime: moment().format(TIMEFORMAT)});
		let newLevel = getters.alcoholLevel;
		UserAPI.setAlcoholLevel(newLevel, state.timeNow);
		dispatch('getConsumptions');
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};