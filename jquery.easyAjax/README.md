# jQuery easyAjax Plugin

### Version 1.0

### What is Ajax?

Ajax stands for Asyncronous JavaScript and XML. It allows you to load content from a web server when needed without reloading the page. This can increase load time especially when there is a large amount of content. With this plugin the external html pages will not be loaded until the target is clicked.

### What is easyAjax?

easyAjax is a JQuery plugin that extends the JQuery .ajax() method. It alows you to reuse the same ajax request as many times as you need to and lets you set different perameters for each instance of the plugin call. All this can be done with as little as 1 line of code. For those who have limeted JS/JQuery/Ajax knowledge this plugin provides an easy way to make use of ajax in your projects and for those who know ajax I hope you will find this plugin to be a time saver and help you to make your footprint smaller.
 
## How it Works

easyAjax can be added to any jquery target, that includes text, images, divs, buttons, html tags, etc... 

Html Markup

~~~
<a class="moreInfo" href="#">Click here!</a>
~~~

easyAjax query

~~~
$('.moreInfo').easyAjax();
~~~

When the element $('.moreInfo') is clicked it will load the default template and display it on the screen in a popup box. Keep reading to learn how to create your own templates.

### Getting Started

To install the plugin copy the plugin folder to the same directory as your html file and include the following in the head of your html document.

~~~
	<link rel="stylesheet" type="text/css" href="jquery.easyAjax/jquery.easyAjax.css">
	<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="jquery.easyAjax/jquery.easyAjax.js"></script>
 
	<script>

		$(document).ready(function() {
		
			$('.yourCustomClass').easyAjax();
			
		});
		
	</script>
~~~

### Default Template

easyAjax comes with a default template (default.html) that can be found in the ***ajaxPages*** folder. If you only need one popup box then just edit default.html and access it like this.

~~~
$('.yourClass').easyAjax();
~~~

This will load the default template when the targeted class is clicked.

### Custom Templates
If you need multiple templates, and this is usually the case, then you will need to create additional html files in the ***ajaxPages*** folder. Lets say we created an html file called ***moreinfo.html*** along side the default template. We can then access that custom template on another element like this.

~~~
$('.yourClass2').easyAjax({
	href : moreinfo.html
});
~~~
When the element with the class of .yourClass2 is clicked the moreInfo template will be loaded. This addes our first option (href) and is the only option that is required to use this plugin with multiple instences of esayAjax.

### All Options
| Key           | Value example          | 
|:------------- | :--------------------  |
| href:         | 'anypage.html'         |         
| linkColor:    | 'red' or '#900a00'     |         
| SlideSpeed:   | 500                    | 
| timeOut:      | 20000                  | 
| cursor:       | pointer                | 

***href*** - file to load from the ajaxPages folder

***linkColor*** - this sets the text link color. This only applies if the target is text.

***slideSpeed*** - this sets the speed of the transition for each call. Default setting is 1/2 second (500). 1000 = 1 sec.

***timeOut*** -          


## The Template
Here is a basic template to get you started quickly. Just copy and paste this code into an html page in the same directory as the plugin folder.

~~~
<!DOCTYPE html>
<html>
	<head>
		<title>Easy Ajax JQuery Plugin</title>

		<link rel="stylesheet" type="text/css" href="jquery.easyAjax/jquery.easyAjax.css">
		<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
		<script src="jquery.easyAjax/jquery.easyAjax.js"></script>
 
		<script>

			$(document).ready(function() {
			
				$('.default').easyAjax();

				$('.signup').easyAjax({
					href: 'signup.html',
				});

				$('.x').easyAjax({
					href: 'directions.html',
					linkColor : 'blue',
					cursor : 'crosshair',
					slideSpeed : 800,
				});

			});

		</script>

	</head>
	<body>

		<p>Lets make <span class="signup">this text</span> into a link</p>
		<p>Lets make <span class="default">this text</span> into a link</p>
		<p>Lets make <span class="x">this text</span> into a link</p>

	</body>

</html>
~~~
