window.onload = function(){
    console.log("Hello");
};

var waypoint = new Waypoint({ //whale
    element:document.getElementById("whale_2_"),
    handler:function(direction){
        this.element.classList.add("flipInX");
        this.element.classList.add("animated");
        this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //fish
    element:document.getElementById("XMLID_89_"),
    handler:function(direction){
        this.element.classList.add("fadeOut");
        this.element.classList.add("animated");
        //this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //fish
    element:document.getElementById("XMLID_110_"),
    handler:function(direction){
        this.element.classList.add("fadeOut");
        this.element.classList.add("animated");
        //this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //fish
    element:document.getElementById("XMLID_117_"),
    handler:function(direction){
        this.element.classList.add("fadeOut");
        this.element.classList.add("animated");
        //this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //fish
    element:document.getElementById("XMLID_140_"),
    handler:function(direction){
        this.element.classList.add("fadeOut");
        this.element.classList.add("animated");
        //this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //fish
    element:document.getElementById("XMLID_157_"),
    handler:function(direction){
        this.element.classList.add("fadeOut");
        this.element.classList.add("animated");
        //this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})






