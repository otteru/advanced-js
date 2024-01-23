const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");

//hobbies = ["Coding", "Sleeping"]; //not allowed!

console.log(hobbies);

person = {age:32};

function getAdultYears(p){
	p.age -= 18;
	return p.age;
}

console.log(getAdultYears({...person}));
console.log(getAdultYears({age:person.age}));
console.log(person);