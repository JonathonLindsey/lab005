const { MongoClient } = require('mongodb');

class Database {
  constructor() {
    this.client = null;
    this.config = null;
  }

  configure = async (config) => {
    this.config = config;

    const url = `mongodb://${config.hostname}:${config.port}`;
    console.log(`Trying to connect to Mongo @ ${url}`);
    this.client = new MongoClient(url, config.options);

    await this.client.connect();
    console.log('Successfully connected to Mongo');
    return this.client;
  };

  disconnect = async () => this.client.close();

  getDb = () => this.client.db(this.config.database);

  insertData = async (collectionName, dataArray) => {
    try {
      const db = this.getDb();
      const collection = db.collection(collectionName);

      const result = await collection.insertMany(dataArray);
      console.log(`${result.insertedCount} documents inserted`);
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = new Database();
