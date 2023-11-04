# AlchemyAPI

This is an API I made to test my knowledge and to further improve. I hope that it is also useful to someone!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Project

Users should be able to:

- Use the API
- Use the Applications
- Be responsive
- Do no leave too early
- Be impressed

### Screenshot

![](./api/static/screenshot.png)

### Links

- Git Repo URL: [link](https://github.com/victor247k/ChemistryTool)
- Live Site URL: [TODO!](TODO!)

## My process

### Built with

- Figma
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Python
- [Flask](https://flask.palletsprojects.com/en/3.0.x/https://reactjs.org/) - Python Web Framework
- [Jinja2](https://jinja.palletsprojects.com/en/3.1.x/https://nextjs.org/) - templating engine
- [Font Awsome](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - For fonts
- [ChatGPT](https://chat.openai.com/) - For help and to get the data
- [Bard](https://bard.google.com/chat) - For help
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - For styles

### What I learned

I have learned a lot. The most important lesson was to [keep it simple, stupid](https://en.wikipedia.org/wiki/KISS_principle), at the begining i went a little overboard with the design. A lot of unnecesarry things that if I had done would've took a lot of time and would have distracted me from what is really important: to learn how to create an API. Other than that i have learned how to use bootstrap to make my website pretty, how to fetch a request from the localhost with javascript, how to enable modals, a bit with regexes, I hve learned a bit of python, and lastly I got more used to json, which was kind of strange to me. Oh and I forgot to mention that I have also learned how to use Figma, it was a game changer when it came down to designing the logo and the website.

```html
<button class="e" data-bs-toggle="modal" data-bs-target="#myModal"><abbr title="Aluminium">Al</abbr></button>
```
```js
const regex = /([A-Z][a-z]*)(\d*)/g;

modal.addEventListener('shown.bs.modal', () => {
    btn.focus()
});

const response = await fetch("http://127.0.0.1:5000/api/all");
```
```py
def find_element(symbol):
    """here we will find the element from the list and return the info about it"""
    with open("elements.json", "r") as file:
        elemets = json.load(file)

    for element in elemets:
        if element['symbol'] == symbol:
            return element

    return None

@app.route("/api/all")
def get_all_elements():
    with open("elements.json", "r") as file:
        elements = json.load(file)
    return jsonify(elements)
```

### Continued development

There is a lot I have and want to learn. First of all, I want to learn how to host this website online free. Then I will probably look into NextJs and ReactJs, because they use Javascript, and don't get me wrong I love python but I want to experiment.

### Useful resources

- [Responsive Periodic Table](https://codepen.io/dudleystorey/pen/rmWMXYhttps://www.example.com) - This helped me with that table. I copied everything, but added some stuff. I honestly don't know what sort of magic did he use, but it is Awesome!
- [Zen Quotes](https://zenquotes.io/) - This was the biggest inspiration, also very good and inspiring quotes. I wish I had discovered this sooner.
- [Rest Countries](https://restcountries.com/) - This is a cool API I had discovered, and it is the main reason I decided to do what I had done. Thanks!

## Author

- Bio Website - [dose.lol](https://dose.lol/victor)
- YouTube - [youtube.com](https://www.youtube.com/channel/UCZ1VP5t1ASHYSrwScC7XjMQ)

## Acknowledgments

I am really glad for the internet, I searched up the errors that I was facing and problems I didn't know how to do. A special thanks to this API website that I inspired, mostly copied everything from [zenquotes.io](https://zenquotes.io/).
