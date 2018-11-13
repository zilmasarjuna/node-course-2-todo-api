// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('User').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('User').findOneAndDelete({
    _id: new ObjectID('5bea8c6b39c018203469c871')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })
  // client.close();
});
