import { clear, getString, setString } from 'application-settings'

const defaultList = [
  { id: 0, name: 'Beer 1' },
  { id: 1, name: 'Beer 2' },
  { id: 2, name: 'Brandy 1' },
  { id: 3, name: 'Whiskey 1' },
  { id: 4, name: 'Whiskey 2' },
  { id: 5, name: 'Whiskey 3' },
  { id: 6, name: 'Whiskey 4' },
  { id: 7, name: 'Whiskey 5' },
  { id: 8, name: 'Whiskey 6' },
  { id: 9, name: 'Whiskey 7' },
];

const api = {
  getAll: () => {
    if(getString('drinks'))
      return JSON.parse(getString('drinks'));

    for(let drink of defaultList)
    setString('drinks', JSON.stringify(defaultList));
    return defaultList;
  },

  update: (id, newData) => {
    let drinks = JSON.parse(getString('drinks'));
    let newDrinks = drinks.map(drink => { 
      if(drink.id == id) return Object.assign({}, drink, newData);
      return drink;
    });
    
    setString('drinks', JSON.stringify(newDrinks));
    return newDrinks;
  },

};

export default api;