# Weather-App
Local Weather Conditions

Without Promise and then the ajax url fail to load and executes remaining code which tends to error Status:0

<a href="https://medium.com/coding-design/writing-better-ajax-8ee4a7fb95f ">How to write Promise and then</a>  

<a href="https://www.youtube.com/watch?v=2d7s3spWAzo">Related videos About Promise Advance coding </a>

<a href="http://weather.gfc.state.ga.us/Info/WXexp.aspx"> Sky Conditions (cloud : 0 -100)</a>


JQuery to display html image: 
<a href="http://www.jquerybyexample.net/2013/04/how-to-display-load-images-from-json-file-jquery.html" > How to use JSON icon image path to display in html </a>

How to resolve unknow error's with  command+j :

<img src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495007750/Screen_Shot_2017-05-17_at_2.54.47_AM_cfvhay.png" />


* Final APP:

<img src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495007827/Screen_Shot_2017-05-17_at_2.56.41_AM_vzixoy.png" />


Added Loading Symbol:

<a href="http://stackoverflow.com/questions/2509711/display-loading-image-while-post-with-ajax" >Loading Symbol</a>

Git page:

<a href="https://paulnewman-m.github.io/Weather-App/"> Git Page (Weather App)</a>

* Second Update: ** Mobile Responsive

Forum To Discuss

<a href="https://forum.freecodecamp.com/t/one-of-the-best-api-for-weather-app-review-and-lets-discuss/116897"> Free Code Camp Forum</a>


Screen Shot 2017-05-17 at 6.31.01 PM

<img src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495065397/Screen_Shot_2017-05-17_at_6.31.01_PM_i9sweq.png" ></img>


** Found Bug **

<img src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495068225/Screen_Shot_2017-05-17_at_7.41.25_PM_irjx8u.png"></img>

Resolved By: (Hidding at time of Loading and showing Again)
```
function getPosition() {
 $('button').hide();// hide this while showing at time of loading
    lat(function (latitude, longitude) {
        var l = latitude + 
    "," + longitude;  
     // alert(l);
      fun(l);//Passing latitude and logitude
    });
  
}
getPosition();
```

* Third Version ***

1.Problem is with codepen full address,its not the exact mobile view.
2.<p>Use only codepen<mark> pen</mark> address instead of <mark>full</mark> pen.</p>
3.Solved By adding container class and only one div to whole page and increaseing the size of container to 60px.

<img  src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495092623/Screen_Shot_2017-05-18_at_2.28.33_AM_lqn3oo.png"></img>


New Mobile First Device View:

<img src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495094133/Screen_Shot_2017-05-18_at_2.54.37_AM_miaey1.png" ></img>


### Finall App: 

~~~
added buttons social networking
~~~

* About codepen and git Page mobile view issue

1.img-responsive is not working working with background image so, its useless to use

2.<meta name="viewport" content="width=device-width"> is also useless because its not responsive to background image.

<a href="https://css-tricks.com/snippets/html/responsive-meta-tag/">About Meta ViewPort</a>

3.The First issue is solved by **background-size:cover **
Second problem is with codepen full adress ,its not the exact mobile view output,here for use the normal address pen/QwerW


<img src="http://res.cloudinary.com/duqwfkttw/image/upload/v1495170477/Screen_Shot_2017-05-19_at_12.00.44_AM_ijh9an.png" />

## Important css property for background image 

Learn cover 50% 100% content,auto

<a href="https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size&preval=cover" >W3schools</a>




