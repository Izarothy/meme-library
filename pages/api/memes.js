const { MongoClient } = require('mongodb')
export default async function memeFetch(req, res) {
    const clientDB = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
    await clientDB.connect();

    const collection = clientDB.db('Data').collection('Memes');
    const query = {url: /^h/ }
    const memeList = await collection.find(query).toArray()
    res.status(200).json(memeList); 
    } catch (err) {
        console.log(err)
    } finally {
    await clientDB.close();
    }
}
