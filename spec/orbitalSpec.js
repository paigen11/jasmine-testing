Hacker Track - Week 4

<script>

//Please use the instructions below to complete Hacker Track Week 4. Once finished, email a saved .html file with your answers to hello@digitalcrafts.com with "Hacker Week 4 - First Name & Last Name" in the subject line.


//EXERCISE
//Write a program that, given an age in seconds, calculates how old someone is in terms of a given planet's solar years.


//DETAILS
// Given an age in seconds, calculate how old someone would be on:

// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years

// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.


//Place code below:

//seconds in a year for each planet

var earth = 31557600;
var mercury = 0.2408467 * 31557600;
var venus = 0.61519726  * 31557600;
var mars = 1.8808158 * 31557600;
var jupiter = 11.862615 * 31557600;
var saturn = 29.447498 * 31557600;
var uranus = 84.016846 * 31557600;
var neptune = 164.79132 * 31557600;

function ageInYears(seconds){
	var earthAge = seconds / earth;
	var mercAge = seconds / mercury;
	var venusAge = seconds / venus;
	var marsAge = seconds / mars;
	var jupAge = seconds / jupiter;
	var satAge = seconds / saturn;
	var uraAge = seconds / uranus;
	var nepAge = seconds / neptune;

	console.log(earthAge);
	console.log(mercAge);
	console.log(venusAge);
	console.log(marsAge);
	console.log(jupAge);
	console.log(satAge);
	console.log(uraAge);
	console.log(nepAge);
}

console.log(ageInYears(1000000000));

function myAge(seconds){
	
}

</script>