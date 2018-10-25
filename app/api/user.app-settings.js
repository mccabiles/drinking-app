const appSettings = require("application-settings");

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
  	let alcoholLevel = api.getNumber('alcoholLevel');
  	let last_updated = api.getNumber('last_updated');
  	return { alcoholLevel, last_updated };
  },

  setAlcoholLevel: (level, momentTimestamp) => {
  	api.setNumber('alcoholLevel', parseFloat(level).toFixed(8));
  	api.setNumber('last_updated', momentTimestamp);
  }
};

export default api;