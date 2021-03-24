const MongoClient = require('mongodb').MongoClient

let connect = MongoClient.connect(process.env.URL_DATABASE, { useUnifiedTopology: true })

function multiSave(data){
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

}


module.exports = {
    multiSave,
    reqFile
 }
 