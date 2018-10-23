import Vue from 'vue'
import Consumption from '@/api/consumption.sqlite'
var moment = require('moment')

const state = {
	consumptions: [],
	timeNow: moment()
};

const TIMEFORMAT = 'YYYYMMDD kk:mm:ss';
let timer;

const getAlcoholLevel = (arrConsumptions, timeNow) => {
	let alcoholLevel = 0;
  arrConsumptions.forEach(({ id, datetime, amount }) => {
    let timeSince = moment(datetime, TIMEFORMAT);
    let deduction = timeNow.diff(timeSince, 'minutes');
    let net = amount - (deduction / 60);
    net = (net < 0) ? 0 : net;
    alcoholLevel += net;
    if (net <= 0) Consumption.delete(id);
  });
  return alcoholLevel;
};

const getters = {
	consumptions: (state) => state.consumptions,
	alcoholLevel: (state) => getAlcoholLevel(state.consumptions, state.timeNow)
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
		timer = setInterval(() => commit('setTimeNow'), 1000 * 60);
	},

	getConsumptions: async ({ commit }) => {
		let consumptions = await Consumption.getAll();
		commit('setConsumptions', consumptions);
	},

	addConsumption: async ({ dispatch }, { amount }) => {
		await Consumption.insert({ amount, datetime: moment().format(TIMEFORMAT)});
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