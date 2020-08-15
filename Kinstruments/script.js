/* Add any JavaScript you need to this file. */

let strings = [
    {
        "Name": "Guitar",
        "Description": "6-stringed instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Violin",
        "Description": "bowed stringed instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Viola",
        "Description": "slightly larger than a violin",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Cello",
        "Description": "second lowest range stringed instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Double Bass",
        "Description": "biggest among stringed instruments",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Harp",
        "Description": "47 stringed instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Imzad",
        "Description": "African single string instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Banhu",
        "Description": "Chinese bowed string instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Haegeum",
        "Description": "Korean string instrument",
        "Category" : "String",
        "Price": 1.00
    },

    {
        "Name": "Goje",
        "Description": "African two stringed",
        "Category" : "String",
        "Price": 1.00
    }
];

let woodwind = [
    {
        "Name": "Flute",
        "Description": "oldes high pitched instrument",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Oboe",
        "Description": "2 foot long black cylinder",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "English Horn",
        "Description": "longer and wider than Oboe",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Clarinet",
        "Description": "Single reed mouthpiece",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Bassoon",
        "Description": "Long pipe",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Quena",
        "Description": "Andes Traditional Flute",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Ney",
        "Description": "Persian End blown flute",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Nohkan",
        "Description": "smoke bamboo floot",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Hun",
        "Description": "Ocarina-like flute",
        "Category" : "Woodwind",
        "Price": 1.00
    },

    {
        "Name": "Tumpong",
        "Description": "Bamboo flute",
        "Category" : "Woodwind",
        "Price": 1.00
    }
];

let brass = [
    {
        "Name": "Trumpet",
        "Description": "smallest brass member",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "French Horn",
        "Description": "18 feet tubing",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Trombone",
        "Description": "Uses slide to change pitch",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Tuba",
        "Description": "Largest and lowest brass",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Serpent",
        "Description": "Bass wind intrument",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Shofar",
        "Description": "Ancient musical horn",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Ophicleide",
        "Description": "Keyed brass instrument",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Vladimirskiy Rozhok",
        "Description": "Ancien Russian wooden trumpet",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Lur",
        "Description": "Long natural blowing horn",
        "Category" : "Brass",
        "Price": 1.00
    },

    {
        "Name": "Vuvuzela",
        "Description": "Plastic horn",
        "Category" : "Brass",
        "Price": 1.00
    }
];

let percussion = [
    {
        "Name": "Piano",
        "Description": "Played by striking keys",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Timpani",
        "Description": "Kettledrums",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Xylophone",
        "Description": "Wood sound",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Cymbals",
        "Description": "Two large discs",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Triangle",
        "Description": "Small triangular bar",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Snare Drum",
        "Description": "Wire wrapped small drum",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Bass Drum",
        "Description": "Biggest percussion member",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Tambourine",
        "Description": "Small drum with metal jingles",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Maracas",
        "Description": "Rattles",
        "Category" : "Percussion",
        "Price": 1.00
    },

    {
        "Name": "Gong",
        "Description": "Large metal plate",
        "Category" : "Brass",
        "Price": 1.00
    }
];

window.onload = function(){

    addItems();
    document.querySelector("#home").onclick = addItems;
    document.querySelector("#strings").onclick = addItemsString;
    document.querySelector("#woodwind").onclick = addItemsWoodwind;
    document.querySelector("#brass").onclick = addItemsBrass;
    document.querySelector("#percussion").onclick = addItemsPercussion;
}

function addItems() {
    
    let item = document.querySelector('#items');

    if (item) {
        item.innerHTML = "";
    }

    let div = "<div>";

    
    div += "<p>" + "Name: " + strings[0].Name + "</p>" + "<br>";
    div += "<p>" + "Description: " + strings[0].Description + "</p>" + "<br>";
    div += "<p>" + "Category: " + strings[0].Category + "</p>" + "<br>";
    div += "<p>" + "Price: $" + strings[0].Price + "</p>" + "<br>";
    div+= "</div>";

    div += "<div>" + "<p>" + "Name: " + woodwind[0].Name + "</p>" + "<br>";
    div += "<p>" + "Description: " + woodwind[0].Description + "</p>" + "<br>";
    div += "<p>" + "Category: " + woodwind[0].Category + "</p>" + "<br>";
    div += "<p>" + "Price: $" + woodwind[0].Price + "</p>" + "<br>";
    div+= "</div>";

    div += "<div>" + "<p>" + "Name: " + brass[0].Name + "</p>" + "<br>";
    div += "<p>" + "Description: " + brass[0].Description + "</p>" + "<br>";
    div += "<p>" + "Category: " + brass[0].Category + "</p>" + "<br>";
    div += "<p>" + "Price: $" + brass[0].Price + "</p>" + "<br>";
    div+= "</div>";

    div += "<div>" + "<p>" + "Name: " + percussion[0].Name + "</p>" + "<br>";
    div += "<p>" + "Description: " + percussion[0].Description + "</p>" + "<br>";
    div += "<p>" + "Category: " + percussion[0].Category + "</p>" + "<br>";
    div += "<p>" + "Price: $" + percussion[0].Price + "</p>" + "<br>";
    div+= "</div>";

    item.innerHTML += div;

}

function addItemsString()
{

    let item = document.querySelector('#items');

    if (item) {
        item.innerHTML = "";
    }

    for (let index = 0; index < strings.length; index++) {
        
        let div = "<div>";

    
        div += "<p>" + "Name: " + strings[index].Name + "</p>" + "<br>";
        div += "<p>" + "Description: " + strings[index].Description + "</p>" + "<br>";
        div += "<p>" + "Category: " + strings[index].Category + "</p>" + "<br>";
        div += "<p>" + "Price: $" + strings[index].Price + "</p>" + "<br>";
        div+= "</div>";
    
        item.innerHTML += div;
    }
    
}

function addItemsWoodwind()
{

    let item = document.querySelector('#items');

    if (item) {
        item.innerHTML = "";
    }

    for (let index = 0; index < woodwind.length; index++) {
        
        let div = "<div>";

        div += "<p>" + "Name: " + woodwind[index].Name + "</p>" + "<br>";
        div += "<p>" + "Description: " + woodwind[index].Description + "</p>" + "<br>";
        div += "<p>" + "Category: " + woodwind[index].Category + "</p>" + "<br>";
        div += "<p>" + "Price: $" + woodwind[index].Price + "</p>" + "<br>";
        div+= "</div>";
    
        item.innerHTML += div;
    }
    
}

function addItemsBrass()
{

    let item = document.querySelector('#items');

    if (item) {
        item.innerHTML = "";
    }

    for (let index = 0; index < brass.length; index++) {
        
        let div = "<div>";

        div += "<p>" + "Name: " + brass[index].Name + "</p>" + "<br>";
        div += "<p>" + "Description: " + brass[index].Description + "</p>" + "<br>";
        div += "<p>" + "Category: " + brass[index].Category + "</p>" + "<br>";
        div += "<p>" + "Price: $" + brass[index].Price + "</p>" + "<br>";
        div+= "</div>";
    
        item.innerHTML += div;
    }
    
}

function addItemsPercussion()
{

    let item = document.querySelector('#items');

    if (item) {
        item.innerHTML = "";
    }

    for (let index = 0; index < percussion.length; index++) {
        
        let div = "<div>";

        div += "<p>" + "Name: " + percussion[index].Name + "</p>" + "<br>";
        div += "<p>" + "Description: " + percussion[index].Description + "</p>" + "<br>";
        div += "<p>" + "Category: " + percussion[index].Category + "</p>" + "<br>";
        div += "<p>" + "Price: $" + percussion[index].Price + "</p>" + "<br>";
        div+= "</div>";
    
        item.innerHTML += div;
    }
    
}

function validateForm() {
    var name = document.forms["formContact"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    var email = document.forms["formContact"]["email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    var address = document.forms["formContact"]["address"].value;
    if (address == "") {
      alert("Address must be filled out");
      return false;
    }
    var postalCode = document.forms["formContact"]["postalCode"].value;
    if (postalCode == "") {
      alert("postalCode must be filled out");
      return false;
    }
  }

  // check and uncheck radio buttons
  var state = function(){
    $("input[type='radio']").click(function() {
      var previousValue = $(this).attr('previousValue');
      var name = $(this).attr('name');
  
      if (previousValue == 'checked') {
        $(this).removeAttr('checked');
        $(this).attr('previousValue', false);
      } else {
        $("input[name="+name+"]:radio").attr('previousValue', false);
        $(this).attr('previousValue', 'checked');
      }
    });
  };
  
  state('option');


function checkRadio(){

    if(document.getElementById("orderProblem").checked == true) {
        document.getElementById("orderNumber").style.display = "inline";
    }else if(document.getElementById('orderProblem').checked == false) {
        document.getElementById("orderNumber").style.display = "none";
    }
}
    