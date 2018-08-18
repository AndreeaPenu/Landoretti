# Landoretti

Art auction website: frontend assignment

## Deploy Document

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Node modules

First we will need the dev dependencies

```
	npm install
```

### Gulp

This is an easy way to compress the images, compile the js and convert scss to css.

```
	gulp watch
```

## Frontend guideline

The most used structures/elements

### Navigation bars

White navigation bar classes

```
	navbar-light bg-light
```

Gray navigation bar classes

```
	navbar-dark bg-dark
```

Both use the same structure:

```
	<ul class="navbar-nav">
		<li class="nav-item">
			<a class="nav-link" href="index.html">HOME</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="art.html">ART</a>
		</li>
	</ul>
```

### Blue overlay without call to action

Structure that you can add in front of a cover picture.
Has a round decoration followed by an overlay class with overlay text.

```
	<div class="decoration-round"></div>
	<div class="overlay">
	<p class="overlay-text">Your text goes here.</p>
	</div>
```

### Blue overlay with call to action

Structure that you can add in front of a cover picture. + Title and Button
Has a round decoration followed by an overlay class with overlay text. Adds a title and button.

```
	<div class="decoration-round-cta"></div>
	<div class="overlay-cta">
        <div class="overlay-h3-cta">
            <h3>Title goes here.</h3>
        </div>
        <p class="overlay-text-cta">Text goes here.</p>
    </div>
    <div class="visit">
        <a href="#"><p>VISIT AUCTION ></p></a>
    </div>
```

### Breadcrumbs

Helps the user to find his way back. Used with container-fluid to use full screen size.
The breadcrumbs class adds the right color

```
    <div class="container-fluid">
        <p class="breadcrumbs">Home > Frequently Asked Questions</p>
    </div>
```
	
	
### Custom table

Wrap the table in container-fluid and auction classes to get the custom style

```
	<div class="container-fluid auction"> </div>
```
	
### Success checkmark

Add the i tag with the classes fas fa-check and id success between label and input tags to show frontend success validation to the user.

```
	<label for="title">Auction title</label>
	<i class="fas fa-check" id="success"></i>
	<input type="text" class="form-control" id="title" name="title" placeholder="Auction title">
```

### Error messages

Frontend validation for the user is shown in the error-messages class.

```
	<div class="error-message"></div>
```