function lat(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        callback.call(null, lat, lon);
    }, function (error) {
        console.log("Something went wrong: ", error);
    });
}

function getPosition() {
  //url( 'http://api.apixu.com/v1/current.json?key=b7816073a00e41bb9f0233424171005&q=dallas' ).load();
    lat(function (latitude, longitude) {
        var l = latitude + 
    "," + longitude;  
     // alert(l);
      fun(l);
    });
  
}
getPosition();

function fun(p){ 
  alert("first"+p);
 //p=90.000;
 // p=location;
 // e.preventDefault();
var $target= $("#target");
 var $tweet= $("#tweet");
//var parentNode = document.getElementById( "myParentNode" );
  //makePreloader( parentNode );
  
 var a= $.ajax({
    
  url:"https://api.apixu.com/v1/current.json?key=b7816073a00e41bb9f0233424171005&q="+p,
   // dataType: "JSON",//(remove jsonp else erro: success 200 "readyState":4 status:load
 //type: "GET",
     //crossDomain: true 
  }) 
  
 // data: "format=json&lang=en",
  .done (function( data ) {
        alert("success");
        
        $target.html("<h4 id='my' class='text-center'>" +
         data.location.name + "</h4><p id='para'><br>&dash; " + data.location.region+ "</p> <br>      ")
      })
    .fail(function(data, textStatus, errorThrown) {
    // If fail
    alert("error"+data);
});
}
  
 // randomQuote();