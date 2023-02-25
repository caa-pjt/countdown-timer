<div align="center">
    <img src="/src/images/countDownTimer.png" alt="JS - CountDownTimer. Creat a count down timer without dependencies!"/>
</div>

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


    <script>
        new ContDownTimer({
            
            options...
            
        }, callback function)
    </script>
```


### Options (required)

```js
    {
        launchDate :  new Date(year, monthIndex, day, hours, minutes, seconds),
        language : "string[language]" // Avaliable en|fr default en
    }
```
