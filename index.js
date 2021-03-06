// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

var weather_result = '';

function lat(callback) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        callback.call(null, lat, lon);
    }, function(error) {
        console.log("Something went wrong: ", error);
    });
}

function getPosition() {
    $('button').hide();
    $('#fcc').hide();
    lat(function(latitude, longitude) {
        var l = latitude + "," + longitude;
        fun(l);
    });
}
getPosition();

function fun(p) {
    var $target = $("#target");
    var $tweet = $("#tweet");
    var ajaxCall = $.ajax({
        url: "https://api.apixu.com/v1/current.json?key=b7816073a00e41bb9f0233424171005&q=" + p,
    }) ;ajaxCall.done(function(data) {
        weather_result = data;
        $('#loadingmessage').hide();
        $('button').show();
        $('#fcc').show();
        var img = "https:";
        img += data.current.condition.icon;
        if (data.current.is_day == 0) {
            if (data.current.cloud >= 0 && data.current.cloud <= 100) {
                $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1495003736/giphy_4_icaphx.gif)");
            }
        } else {
            if (data.current.cloud >= 90 && data.current.cloud <= 100) {
                $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994418/giphy_1_yoy0eo.gif)");
            } else if (data.current.cloud >= 60 && data.current.cloud < 90) {
                $('body').css("background-image", "url(http://res.cloudinary.com/duqwfkttw/image/upload/o_69/v1495164447/Sean_R_Heavey_2_1_nffbjf.jpg)");
            } else if (data.current.cloud >= 30 && data.current.cloud < 60) {
                $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994728/giphy_3_k8rrek.gif)");
            } else if (data.current.cloud >= 20 && data.current.cloud < 30) {
                $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1495067194/giphy_8_hn1rlu.gif)");
            } else {
                $('body').css("background-image", "url(https://res.cloudinary.com/duqwfkttw/image/upload/v1494994728/giphy_3_k8rrek.gif)");
            }
        }
        $("#my").html(data.location.name + "," + data.location.region);
        $("#para").html(data.location.country);
        $(".tem").html(data.current.temp_c);
        $("#cloud").append('<img id ="im" src="' + img + '"/>');
        $('#list').html(data.current.condition.text);
        $('#unit').click(function() {
            var v = document.getElementById("unit").text;
            if (v == '°C') {
                $(".tem").html(data.current.temp_f);
                $("#unit").html("°F");
            } else {
                $(".tem").html(data.current.temp_c);
                $("#unit").html("°C");
            }
        });
    }); ajaxCall.fail(function(data, textStatus, errorThrown) {
        alert("error" + data);
    });
}