const appSettings = require("application-settings");

const THRESHOLD_DEFAULT = 15;
const api = {
  getNumber: (key) => { 
    console.log(`got key: ${appSettings.getString(key)}`)
    return appSettings.getString(key) ? appSettings.getString(key) : 0
  },
  
  setNumber: (key, data) => {
    appSettings.setString(key, data)
    console.log(`saved key: ${key} = ${data}`)
  },

  getAlcoholLevel: () => {
  	const alcoholLevel = api.getNumber('alcoholLevel');
  	const last_updated = api.getNumber('last_updated');
  	return { alcoholLevel, last_updated };
  },

  setAlcoholLevel: (level, momentTimestamp) => {
  	api.setNumber('alcoholLevel', parseFloat(level).toFixed(8));
  	api.setNumber('last_updated', momentTimestamp);
  },

  getThreshold: () => {
    const threshold = api.getNumber('threshold');
    if (threshold === null) {
      api.setNumber('threshold', THRESHOLD_DEFAULT);
      return THRESHOLD_DEFAULT;
    }
    return threshold;
  },

  setThreshold: (level) => {
    api.setNumber('threshold', parseFloat(level).toFixed(1));
  },
};

export default api;