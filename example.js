const MongoClient = require('mongodb').MongoClient

  MongoClient.connect('mongodb://127.0.0.1',{ useUnifiedTopology:true })
  .then(client => {
    const db = client.db('example')
    const quotesCollection = db.collection('prueba')
    
  })
  .catch(console.error)
