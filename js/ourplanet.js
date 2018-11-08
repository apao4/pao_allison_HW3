window.onload = function(){
    console.log("Hello");
};

var waypoint = new Waypoint({ //octopus
    element:document.getElementById("octopus"),
    handler:function(direction){
        this.element.classList.add("bounce");
        this.element.classList.add("animated");
        //this.element.classList.add("see");
    },
    offset: "90%" //scroll to 50% for it to be activated
  })

  var waypoint = new Waypoint({ //octopus
    element:document.getElementById("starfish"),
    handler:function(direction){
        this.element.classList.add("bounce");
        this.element.classList.add("animated");
        //this.element.classList.add("see");
    },
    offset: "90%" //scroll to 50% for it to be activated
  })

  var waypoint = new Waypoint({ //octopus
    element:document.getElementById("happyEarth"),
    handler:function(direction){
        this.element.classList.add("bounce");
        this.element.classList.add("animated");
        //this.element.classList.add("see");
    },
    offset: "90%" //scroll to 50% for it to be activated
  })

var clean = document.querySelector('#clean');
        function refreshPage(){
            window.location.reload();
        } 
        clean.addEventListener("click", refreshPage);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
