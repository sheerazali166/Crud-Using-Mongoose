const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified'] },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    reviews: String

});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({

    
    rating: 10,
    reviews: 'Peaches are so good'
});


const pineapple = new Fruit({

    name: 'Pineaaple',
    score: 9,
    reviews: 'Great Fruit'
});


const mango = new Fruit({
    name: 'Mango',
    score: 22,
    reviews: 'Mango is good fruit'
});


const personSchema = new mongoose.Schema({
    
    name:String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({

   name: 'Kinza Amjad',
   age: 12,
   favouriteFruit: pineapple

});

const kiwi = new Fruit({

    name: "Kiwi",
    score: 12,
    reviews: 'The best fruits'
});

const orange = new Fruit({

    name: "Orange",
    score: 4,
    reviews: 'Too sour for me.'
});

const bannana = new Fruit({

    name: "Bannana",
    score: 3,
    reviews: 'Weird Texture'
});

Fruit.insertMany([kiwi,orange, bannana], function(err) {
    
    if(err){
        console.log(err);
    }
    else{
        console.log('data successfully inserted');
    }
});

fruit.save();




Fruit.find(function(err, fruits) {
    
    if(err){
        console.log(err);
    }
    else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
});



Fruit.updateOne({_id: '60ea086611dd570464b91b43'}, {name: "Peach"}, function(err){

    if(err){
        console.log(err)
    }
    else{
        console.log('Data successfully updated');
    }

});

Fruit.deleteOne({_id: '60ea086611dd570464b91b43'}, function(err){
 
    if(err){
        console.log(err)
    }
    else{
        console.log('Data entry successfully deleted');
    }


});

  

person.save();

Person.deleteMany({name: 'John'}, function(err){
    
    if(err){

        console.log(err);
    }
    else{
        console.log('All john data entries are deleted successfully');
    }
});


 Person.updateOne({name: 'John'}, {favouriteFruit: mango}, function(err){
     if(err){
         console.log(err);
     }
     else{
         console.log('John entry successfully updated');
     }
 });
 
 
 Person.deleteOne({_id: '60ea14be4b74e227ac4aa815'}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Data entry Kinza Amjad Duplicate successfully deleted');
    } });

