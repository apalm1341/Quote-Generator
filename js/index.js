//This is a single line Javascript comment!
/*This is a Multi-line comment in Javascript!
this is a multi-line comment
like I said previously!*/
//We will be trying to add the functionality of our quote generator!We will be trying to implement it so that it adds a new quote with a correct author every time that we click the new quote button!
//we imported jquery by clicking on gear icon upper left of JS tab!jquery will run before JS!
//function below will start jquery!
$(document).ready(function(){
  
  function getQuote(){ //function called getQuote-->will do bulk of code in here!this function will click on something and then randomly choose one thing out of an array and then just to copy that index value!
    var quotes = ["Success is a lousy teacher. It seduces smart people into thinking they can't lose.", "Your most unhappy customers are your greatest source of learning.", "It's fine to celebrate success but it is more important to heed the lessons of failure.", "By giving people the power to share, we're making the world more transparent.", "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", "You can do anything, but not everything.", "You miss 100 percent of the shots you never take.", " Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", "To the man who only has a hammer, everything he encounters begins to look like a nail.", "We are what we repeatedly do; excellence, then, is not an act but a habit."]; //an array of quotes...
    var author = ["-Bill Gates", "-Bill Gates", "-Bill Gates", "-Mark Zuckerberg", "-Mark Zuckerberg", "-David Allen", "-Wayne Gretzky", "-Ambrose Redmoon", "-Abraham Maslow", "-Aristotle"] //array of authors!...-Author1=HelloWorld!..-Author2=Hello Sea...Author3=Hello,Sky!//all this creates 2 arrays!
  
    //we wanna generate a random number(0,1, or 2) based off of length of array!
    var randomNum = Math.floor((Math.random()*quotes.length));  //will use math library to create random number!can multiply by either array as long as they both right!
    //this line will create floating point decimal point (without considering Math.floor)!Math.floor will drop down to lowest whole integer!
    //43.5 drops to 43...43.99 drops to 43!...-45.1 drops to -46!(drops to next negative)!
    var randomQuote = quotes [randomNum]; //var randomQuote = quotes array at this random integer!
    var randomAuthor = author[randomNum]; //var randomAuthor = author array at this random integer!
    //gets random quote with corresponding author
    $(".quote").text(randomQuote); //target this class quote(u can find this in html section!) and then insert this randomQuote text! 
    //target our author span class and then insert this randomAuthor text!
    $(".author").text(randomAuthor);
    //adding these texts at those things!
    }
  
  $(".btn").on("click", function(){ //targets button outside of getQuote() function!.btn=our one button!
    getQuote(); //run getQuote function!
        //on click, we need you to run getQuote function!      
  });
                  
});
//we targeted our html elements via javascript! and then applied functions so that when we do something (on click in our example), you can then run getQuote function!