//Object Array to hold quotes, sources, citaitons 
var quotes = [
	{
	quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
	source: "-Albus Dumbledore, Harry Potter and the Deathly Hallows"
	},
	{
	quote: "It is impossible to manufacture or imitate love",
	source: "-Horace Slughorn, Harry Potter and the Half-Blood Prince"
	},
	{
	quote: "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
	source: "-Albus Dumbledore, Harry Potter and the Goblet of Fire"
	},
	{
	quote: "Love as powerful as your mother’s for you leaves it’s own mark. To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
	source: "-Albus Dumbledore, Harry Potter and the Sorcerer’s Stone"
	},
	{
	quote: "Family…Whatever yeh say, blood’s important. . . .",
	source: "-Rubeus Hagrid, Harry Potter and the Order of the Phoenix"
	},
	{
	quote: "There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
	source: "-J.K. Rowling, Harry Potter and the Sorcerer’s Stone"
	},
	{
	quote: "Books! And cleverness! There are more important things — friendship and bravery.",
	source: "-Hermione Granger, Harry Potter and the Sorcerer’s Stone" 
	},
	{
	quote:  "Time will not slow down when something unpleasant lies ahead.",
	source: "-J.K. Rowling Harry Potter and the Goblet of Fire"
	},
	{
	quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
	source: "-Sirius Black, Harry Potter and the Goblet of Fire"
	},
	{
	quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
	source: "-Arthur Weasley", 
	citation: "Harry Potter and the Chamber of Secrets"
	},
	{
	quote: "It matters not what someone is born, but what they grow to be.",
	source: "-Albus Dumbledore", 
	citation: "Harry Potter and the Goblet of Fire" 
	},
	{
	quote: "Every human life is worth the same, and worth saving.",
	source: "-Kingsley Shacklebolt, Harry Potter and the Deathly Hallows"
	},
	{
	quote: "When in doubt, go to the library.",
	source: "-Ron Weasley, Harry Potter and the Chamber of Secrets"
	},
	{
	quote: "The ones that love us never really leave us. You can always find them in here.",
	source: "-Sirius Black, Harry Potter and the Prisoner of Azkaban"
	},
	{
	quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
	source: "-Luna Lovegood, Harry Potter and the Order of the Phoenix"
	},
	{
	quote: "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
	source: "-Sirius Black, Harry Potter and the Order of the Phoenix"
	},
	{
	quote: "It is the quality of one’s convictions that determines success, not the number of followers.",
	source: "-Remus Lupin, Harry Potter and the Deathly Hallows: Part 2"
	},
	{
	quote: "The truth... It is a beautiful and terrible thing, and should therefore be treated with great caution.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "Fawkes is a phoenix.Phoenixes burst into flame when it is time for them to die and are reborn from the ashes.",
	source: "-Albus Dumbledore"
	},
	{

	quote: "I solemnly swear that I am up to no good.",
	source: "-George Weasley"
	},
	{
	quote: "Your devotion is nothing more than cowardice. You would not be here if you had anywhere else to go.",
	source: "-Voldemort"
	},
	{
	quote: "We are only as strong as we are united, as weak as we are divided.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "It does not do to dwell on dreams and forget to live.",
	source: "-Albus Dumbledore", 
	citation: "Harry Potter and the Sorcerer's Stone"
	},
	{
	quote: "Wit beyond measure is man’s greatest treasure.",
	source: "-Luna Lovegood"
	},
	{
	quote: "Indifference and neglect often do much more damage than outright dislike.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "The mind is not a book, to be opened at will and examined at leisure. Thoughts are not etched on the inside of skulls, to be perused by an invader. The mind is a complex and many-layered thing.",
	source: "-Severus Snape"
	},
	{
	quote: "When you have seen as much of life as I have, you will not underestimate the power of obsessive love.",
	source: "-Horace Slughorn"
	},
	{
	quote: "Age is foolish and forgetful when it underestimates youth.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "Dumbledore: After all this time?’",
	source: "Always,’ said Snape."
	},
	{
	quote: "Do not pity the dead. Pity the living, and, above all those who live without love.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "Anything’s possible if you’ve got enough nerve.",
	source: "-Ginny Weasley"
	},
	{
	quote: "You’re saying it wrong. It’s leviOsa, not levioSA.",
	source: "-Hermione Granger"
	},
	{
	quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
	source: "-Albus Dumbledore"
	},
	{
	quote: "What’s life without a little risk?",
	source: "-Sirius Black, Harry Potter and the Order of the Phoenix"
	},
	{
	quote: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.",
	source: "-Albus Dumbledore"
	}
];



//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	



//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}


//Quote automatically refreshes every 20 seconds
window.setInterval(function(){
                     printQuote ();
           }, 20000);


//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);


