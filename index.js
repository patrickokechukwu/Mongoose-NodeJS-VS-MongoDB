
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });




const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
});

const Person = mongoose.model('Person', personSchema);


const createAndSavePerson = function(done) {
const person = new Person({
  name: 'John',
  age: 30,
  favoriteFoods: ['Pizza', 'Burger']
})};

person.save(function(err, data) {
  if (err) return console.error(err);
  console.log(data); // Saved person
});



javascript
const arrayOfPeople = [
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
  { name: 'Bob', age: 40, favoriteFoods: ['Steak', 'Salad'] }
];

Person.create(arrayOfPeople, function(err, data) {
  if (err) return console.error(err);
  console.log(data); // Array of created people
});



javascript
Person.find({ name: 'John' }, function(err, data) {
  if (err) return console.error(err);
  console.log(data); // Array of people with name 'John'
});




javascript
Person.findOne({ favoriteFoods: 'Pizza' }, function(err, data) {
  if (err) return console.error(err);
  console.log(data); // Person with 'Pizza' in favoriteFoods
});




// javascript
// const personId = 'your_person_id';

// Person.findById(persID, function(err, data) {
//   if (err) return console.error(err);
//   console.log(data); // Person with the given _id
// });




javascript
const persId = 'your_person_id';

Person.findById(personId, function(err, person) {
  if (err) return console.error(err);
  
  person.favoriteFoods.push('Hamburger');
  person.save(function(err, updatedPerson) {
    if (err) return console.error(err);
    console.log(updatedPerson); // Updated person
  });
});




javascript
const personName = 'Alice';

Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, function(err, updatedPerson) {
  if (err) return console.error(err);
  console.log(updatedPerson); // Updated person
});



javascript
const persID = 'your_person_id'

Person.findByIdAndRemove(personId, function(err, removedPerson) {
  if (err) return console.error(err);
  console.log(removedPerson); // Removed person
});



javascript
Person.remove({ name: 'Mary' }, function(err, result) {
  if (err) return console.error(err);
  console.log(result); // Outcome of the operation
});




javascript
Person.find({ favoriteFoods: 'Burritos' })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec(function(err, data) {
    if (err) return console.error(err);
    console.log(data); // People who like Burritos
  });


