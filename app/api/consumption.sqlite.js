import sqlite from '@/database/sqlite-query-builder'

const FIELDS = { datetime: 'text', amount: 'real' };
const TABLE = 'consumptions';

const api = {
	setup: async () => {
    await sqlite.createTable(TABLE, FIELDS);
    console.log('Consumptions table created');
	},

	getAll: async () => {
    let consumptions = await sqlite.selectRows(TABLE);
    let fields = Object.keys(FIELDS);
    let consumption_array = consumptions.map(consumption => {
      let obj = {};
      obj.id = consumption[0];
      for (let i = 0; i < fields.length; i++)
        obj[fields[i]] = consumption[i+1];
      return obj;
    });
    return consumption_array;
  },

  insert: async (rows) => {
  	if (Array.isArray(rows))
	  	await sqlite.insertRows(TABLE, FIELDS, rows);
	  else
	  	await sqlite.insertRows(TABLE, FIELDS, [ rows ]);
  },

  delete: async (id) => {
    if (isNaN(id)) return Promise.reject();
    await sqlite.deleteRow(id);
  }
};

export default api;