import drinks from '@/api/drinks.sqlite'
import consumption from '@/api/consumption.sqlite'

const setupSQLite = async () => {
    var Sqlite = require( "nativescript-sqlite" );
    try {
        await new Sqlite('drinkr.db');
        console.log('DB: sqlite db created!');
    } catch (err) {
        console.error(err);
    }
};

const DatabaseSetup = async () => {
    await setupSQLite();
    await drinks.setup();
    await consumption.setup();
    console.log('DB: Database setup complete!')
}

export default DatabaseSetup;
