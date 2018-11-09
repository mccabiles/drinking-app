import sqlite from '@/database/sqlite-query-builder'

const defaultList = [
  { name: 'San Miguel Light', alcoholContent: 0.03, servingSize: 330, active: 0 },
  { name: 'San Miguel Flavored Beer', alcoholContent: 0.02, servingSize: 330, active: 1 },
  { name: 'San Miguel Pale Pilsen', alcoholContent: 0.05, servingSize: 330, active: 1 },
  { name: 'Gin Cocktail', alcoholContent: 0.06, servingSize: 210, active: 1 },
  { name: 'Smirnoff Mule', alcoholContent: 0.06, servingSize: 330, active: 1 },
  { name: 'Tiger Beer Black', alcoholContent: 0.05, servingSize: 330, active: 0 },
  { name: 'Emperador Light', alcoholContent: 0.4, servingSize: 30, active: 1 },
  { name: 'Heineken Lager Beer', alcoholContent: 0.05, servingSize: 330, active: 0 },
  { name: 'The Bar', alcoholContent: 0.3, servingSize: 30, active: 0 }
];

const FIELDS = { name: 'text', alcoholContent: 'real', servingSize: 'integer', active: 'integer' };
const TABLE = 'drinks';

const api = {
  setup: async () => {
    await sqlite.createTable(TABLE, FIELDS);
    let drinks = await api.getAll();
    console.log(drinks);
    if(!drinks.length) {
      console.log('Table is empty! Populating...');
      await sqlite.insertRows(TABLE, FIELDS, defaultList);
    }
  },

  getAll: async () => {
    let drinks = await sqlite.selectRows(TABLE);
    let fields = Object.keys(FIELDS);
    let drink_objects = drinks.map(drink => {
      let drink_obj = {};
      drink_obj.id = drink[0];
      
      for (let i = 0; i < fields.length; i++)
        drink_obj[fields[i]] = drink[i+1];
      return drink_obj;
    });
    return drink_objects;
  },

  update: async (id, fields) => {
    return await sqlite.updateRow(TABLE, id, fields);
  },

  insert: async ({ name, alcoholContent, servingSize }) => {
    await sqlite.insertRows(TABLE, FIELDS, [{ name, alcoholContent, servingSize, active: 0 }]);
  }
};

export default api;