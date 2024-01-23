function greetingUser(serverName,userName = "harry") {
  // console.log("hello "+userName+"! from "+serverName);
	console.log(`hello ${userName}!
	
	from ${serverName}`);
}

greetingUser("git", "otteru");
// greetingUser("git");

function sumUp(...numbers) {
	let result = 0;
	
	for(const number of numbers) {
		result += number;
	}
	
	return result;
}

//console.log(sumUp(1,2,3,4,5,6,7,8,9,10));
const inputNumbers = [1,3,5,7,9];

//console.log(sumUp(...inputNumbers));

//console.log(sumUp);

