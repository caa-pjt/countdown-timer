![JS - CountDownTimer. Creat a count down timer without dependencies!](/src/images/countDownTimer.png)

# countdown-timer
A javascript countdown clock or timer. That is simple to use in any project or on any website.

## Usage


Include the (minified) JavaScript Templates script in your HTML markup:

```html
<script src="./dist/countdownTimer.min.j"></script>
```

### HTML code

```html

    <div class="contdown">
        <div class="bloc" id="days"></div>
        <div class="bloc" id="hours"></div>
        <div class="bloc" id="minutes"></div>
        <div class="bloc" id="seconds"></div>
    </div>
````

### JS code

```javascript

    new ContDownTimer({
        
        options...
        
    }, callback function... )
```


### Options

```js
    {
        launchDate :  new Date(year, monthIndex, day, hours, minutes, seconds),
        language : "string<language>" // Avaliable en|fr default en

    }, function() {

        // This code will be called after the time is finished
    }
```


### Valid code example

```javascript 

new ContDownTimer({
    launchDate :  new Date(2023, 10, 22, 0, 0),
    language : "fr"
}, () => {
        
    document.querySelector('.contdown-container').style.display = 'none'
    document.body.innerHTML = `<h1>The timer is ended !</h1>` 
})

```
