const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    address:{street:'lugos',pobox:'1234',city:'Entebbe'},
    isMarried: true,
    getFullName:function() {
        return `${this.firstName} ${this.lastName}`
      }
  }
  console.log(person)
  console.log(person.isMarried)
  console.log(person.skills[2])
  console.log(person.skills)


  console.log(person['age'])
  console.log(person.getFullName())

//settting new keys for an object
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

console.log(person);
person.getPersonInfo=function (){
    let skillsWithoutLastSkill=this.skills.splice(0,this.skills.length-1).join(',')

    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement

}
 console.log(person.getPersonInfo());


//OBJECT METHODS

//1.Object.assign()---copies an object without modifyng the original object
const copyPerson=Object.assign({},person)
console.log(copyPerson);

//2.Object.keys()--gets keys or properties of an object as an array
const keys=Object.keys(copyPerson)
console.log(keys);


const address=Object.keys(copyPerson.address)
console.log(address);

//3.Object.values()
const values= Object.values(copyPerson)
console.log(values);

//4.Object.entries:To get the keys and values in an array
const entries=Object.entries(copyPerson)
console.log(entries);

//5.hasOwnProperty:---- To check if a specific key or property exist in an object
console.log(person.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('skills'));

