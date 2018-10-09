const {
  Client
} = require('pg');
const db = 'dmi_test';

client = new Client({
  connectionString: `postgresql://localhost/${db}`
})
client.connect();

module.exports = client;