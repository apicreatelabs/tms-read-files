const MongoClient = require('mongodb').MongoClient



function multiSave(req, res, next) {
    console.log(req.objects.data);
    MongoClient.connect(process.env.URL_DATABASE, { useUnifiedTopology: true })
        .then(client => {
            const db = client.db(process.env.DATABASE)
            const quotesCollection = db.collection('Rueda')
                quotesCollection.insertMany(req.objects.data)
                    .then(result => {
                        console.log(result)
                    })
                    .catch(error => console.error(error))
        })
        .catch(console.error)

    next()
}

module.exports = {
    multiSave
}