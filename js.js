//variables to grab the dom nodes
  //grabs the checkbox with an id of apples
var apples = document.getElementById('apples');
  //grabs the checkbox with an id of bananas
var bananas = document.getElementById('bananas');
  //grabs the button with an id of submit
var submit = document.getElementById('submit');
  //grabs the div with an id of likesOne
var likesOne = document.getElementById('likesOne');
  //grabs the div with an id of likesBoth
var likesBoth = document.getElementById('likesBoth');
  //grabs the div with an id of likesNone
var likesNone = document.getElementById('likesNone');
  //localStorage is a place where data can be stored on the user's computer
  //this is only used for an example of data being persisted, it is only
  //persisted on the user's computer, and can be deleted by the user, or
  //will be deleted if the user performs a cookie wipe.  
  //In google chrome developer tools click on application and then Local Storage to 
  //see the data.  

  //this creates a key named both in local storage, but only if one 
  //currently does not exist.  If there is nothing named both in local
  //storage then localStorage.both will be equal to undefined, which 
  //is falsey, then the bang will make it true, so the key both will 
  //be created in local storage
if (!localStorage.both) {
  localStorage.both = 0;
}
//this creates a key named one in local storage, but only if one 
  //currently does not exist.  If there is nothing named one in local
  //storage then localStorage.one will be equal to undefined, which 
  //is falsey, then the bang will make it true, so the key one will 
  //be created in local storage
if (!localStorage.one) {
  localStorage.one = 0;
}
//this creates a key named none in local storage, but only if none 
  //currently does not exist.  If there is nothing named none in local
  //storage then localStorage.none will be equal to undefined, which 
  //is falsey, then the bang will make it true, so the key none will 
  //be created in local storage
if (!localStorage.none) {
  localStorage.none = 0;
}
//adds a click listener to the button, runs all the code inside
//when the button is clicked
submit.addEventListener('click', function() {
  //gets either true or false if the apples box is checked or not
  var likesApples = apples.checked;
    //gets either true or false if the bananas box is checked or not
  var likesBananas = bananas.checked;
    //write the condition in the if statement to see if both boxes
    //are checked
  if (  ) {
    //if the condition is true, then both is incremented by 1
    localStorage.both = Number(localStorage.both) + 1
  }
    //write the condition in the else if statement to see if either 
    //boxes are checked
  else if ( ) {
    //if the condition is true, then one is incremented by 1
    localStorage.one = Number(localStorage.one) + 1
  }
  else {
    //if the conditions are above are both false, then this code
    //will run
    localStorage.none = Number(localStorage.none) + 1
  }
  //no matter what, called updateResults
  //which updates the numbers displayed on the
  //index.html page
  updateResults();
})

function updateResults() {
  //just sets localStorage to the variable data
  //to make the code more clear
  var data = localStorage;
  likesOne.innerHTML = `${data.both} people like both`;
  likesBoth.innerHTML = `${data.one} people like one`;
  likesNone.innerHTML = `${data.none} people like none`;
}