//GPGP

var waypoint = new Waypoint({ //charles
    element:document.getElementById("charlesMoore"),
    handler:function(direction){
        this.element.classList.add("slideInRight");
        this.element.classList.add("animated");
        this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //Texas
    element:document.getElementById("XMLID_54_"),
    handler:function(direction){
        this.element.classList.add("zoomIn");
        this.element.classList.add("animated");
        this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

var waypoint = new Waypoint({ //Texas
    element:document.getElementById("XMLID_73_"),
    handler:function(direction){
        this.element.classList.add("zoomIn");
        this.element.classList.add("animated");
        this.element.classList.add("see"); //this makes the element stay after you continue to scroll
    },
    offset: "90%" //scroll to 50% for it to be activated
})

