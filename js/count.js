var waypoint = new Waypoint({
    element:document.getElementById('strawNumber'),
    handler:function(direction){
        var options = {
              useEasing: true, 
              useGrouping: true, 
              separator: ',', 
              decimal: '.', 
            };
            var strawsUS = new CountUp('strawNumber', 0, 500000000, 0, 5, options);
            if (!strawsUS.error) {
            strawsUS.start();
            } else {
              console.error(strawsUS.error);
            }
      },
      offset: "40%"
  })
