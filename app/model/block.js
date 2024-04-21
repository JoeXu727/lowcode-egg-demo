'use strict';

module.exports = app => {
    const { INTEGER, STRING } = app.Sequelize;

    const Block = app.model.define('block', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: STRING,
        title: STRING,
        screenshot: STRING,
        schema: STRING,
    }, {
        tableName: 'block',
    });
    return Block;
};