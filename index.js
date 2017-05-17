function lat(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
     var city= displayLocation(lat,lon);
      alert(city);
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
      fun(l);//Passing latitude and logitude
    });
  
}
getPosition();

function fun(p){ 
  //alert("first"+p);

var $target= $("#target");
 var $tweet= $("#tweet");
  
 var ajaxCall= $.ajax({
    
  url:"https://api.apixu.com/v1/current.json?key=b7816073a00e41bb9f0233424171005&q=dallas",
   // dataType: "JSON",//(remove jsonp else erro: success 200 "readyState":4 status:load
 //type: "GET",
     //crossDomain: true 
  }) 
  
 // data: "format=json&lang=en",
  ajaxCall.done (function( data ) {
    
    var img="https:";
         img +=data.current.condition.icon;
    if(data.current.is_day==0){
     // alert(img);
       if(data.current.cloud>=0&&data.current.cloud<=100){
   // $('#my').html(img);  
          //   $("#cloud").append('<img id ="im" src="https://cdn.apixu.com/weather/64x64/night/116.png"< /img>');
       
           // $("#cloud").append('<img id ="im" src="'+img+'"/>');
          $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494995603/tumblr_n3mbu7sEdR1tucbz9o7_500_yuz1qi.gif)");
     }}
      else{
    
    if(data.current.cloud>=90&&data.current.cloud<=100){
    $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994418/giphy_1_yoy0eo.gif)");  
    }
     else  if(data.current.cloud>=60&&data.current.cloud<90){
    $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994530/giphy_2_alnafm.gif)");  }
          else  if(data.current.cloud>=30&&data.current.cloud<60){
    $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994728/giphy_3_k8rrek.gif)"); 
    }
    else  if(data.current.cloud>=20&&data.current.cloud<30){
    $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994891/PSJCsb_krg8pn.gif)"); 
    }
     else  {
    $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994995/Sunrise-1024x576_abckfp.jpg)"); 
    }}
        $("#my").html(data.location.name +","+data.location.region);
    $("#para").html(data.location.country );
    $(".tem").html( data.current.temp_c);
   $("#cloud").append('<img id ="im" src="'+img+'"/>');
   // $("#cloud").append('<img id ="im" src="img"< /img>');
    $('#list').html(data.current.condition.text);
   

    $('#c').click(function(){
      $(".tem").html( data.current.temp_c);
    //  $("#c").html( "<span id='f'>°F</span>");
});
     $('#f').click(function(){
      $(".tem").html( data.current.temp_f );
       // $("#f").html( "<span id='c'>°C</span>");
});
      })
  
   ajaxCall .fail(function(data, textStatus, errorThrown) {
    // If fail
    alert("error"+data);
})
   
  
}
 

