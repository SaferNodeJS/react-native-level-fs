const leveldown = require('asyncstorage-down');
const levelup = require('levelup');
const fs = require('level-filesystem');

const db = levelup('level-fs', { db: leveldown });
module.exports = fs(db);
