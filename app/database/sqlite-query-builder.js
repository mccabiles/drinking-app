var Sqlite = require('nativescript-sqlite');

const DATABASE = 'drinkr.db'

const createTable = async (table_name, fields, RESET=false) => {
  try {
    let database = await new Sqlite(DATABASE);
    console.log('DB: Database opened')

    if (RESET) await database.execSQL(`DROP TABLE IF EXISTS ${table_name}`);
    let fields_string = '';
    for (let field in fields) 
      fields_string = `${fields_string}, ${field} ${fields[field]}`

    await database.execSQL(`
      CREATE TABLE IF NOT EXISTS ${table_name} (
        id integer PRIMARY KEY
        ${fields_string}
      )
    `);
    console.log(`DB: Table ${table_name} created.`);
    return database;
  } catch (err) { console.log(err) }
};

const selectRows = async (table_name, columns='*') => {
  try { 
    let database = await new Sqlite(DATABASE);
    return await database.all(`
      SELECT ${columns} FROM ${table_name}
    `);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

const insertRows = async (table_name, columns, rows) => {
  try {
    let database = await new Sqlite(DATABASE);
    let values = '';

    for (let row of rows) {
      let row_value = ''
      let i = 0;
      for (let column in columns) {
        row_value = `${ row_value }${ (i > 0) ? ',' : '(' }'${row[column]}'`
        i++;
      }
      row_value = `${row_value})`
      values = `${values}${ values ? ',' : '' } ${row_value}`
    }

    let columns_string = '';
    let j = 0;
    for (let column in columns) {
      columns_string = `${columns_string}${ (j > 0) ? ',' : '' } ${column}`;
      j++;
    }

    return await database.execSQL(`
      INSERT INTO ${table_name} (${columns_string})
      VALUES
        ${values};
    `);
  }
  catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

const dropTable = async (table_name) => {
  let database = await new Sqlite(DATABASE);
  let query = `DROP TABLE IF EXISTS ${table_name};`;
  return database.execSQL(query);
};

const updateRow = async (table_name, id, fields) => {
  console.log(`DB: updateRow ${table_name} ${id}`)
  try {
    let database = await new Sqlite(DATABASE);
    let fields_query = '';
    for (let field in fields)
      fields_query = `
        ${ fields_query}${fields_query ? `,` : '' } ${field} = '${ fields[field] }'
      `
    let query = `
      UPDATE ${ table_name }
      SET 
        ${ fields_query }
      WHERE
      id = ${id};
    `;
    console.log(query);
    return await database.execSQL(query);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

const deleteRow = async (table_name, id) => {
  let database = await new Sqlite(DATABASE);
  let query = `DELETE FROM ${table_name} WHERE id=${id};`;
  return database.execSQL(query);
}

export default {
  createTable,
  dropTable,
  selectRows,
  insertRows,
  updateRow,
  deleteRow
}