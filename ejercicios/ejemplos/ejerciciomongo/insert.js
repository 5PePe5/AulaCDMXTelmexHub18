let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbName)

    db.collection('personas').insert([
        { name: 'Luis', lastname: "lampar", edad: 50,},
        { name: 'Pedro', lastname: "lucas", edad: 20,},
        { name: 'Juan', lastname: "birman", edad: 10 }

      ],

      db.collection('macostas').insert({
        gato: '',
        perro: '',
      }),
      
   function (err, data) {
        console.log(data)
    })
})


/*let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbName)

    db.collection('personas').insert({
       name: 'Pablo',
       lastname: 'Piccaso'
    
    }, function (err, data) {
        console.log(data)
    })
})
*/

