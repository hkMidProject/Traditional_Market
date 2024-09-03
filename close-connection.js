const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('testtest', 'root', 'root123!', {
    host : 'old_host',
    dialect: 'mysql',
});

(async () => {
    try {
        await sequelize.close();
        console.log('Connection to the old database has been closed successfully.');
    } catch (error) {
        console.error('Error closing the old database connection: ', error);
    }
})();