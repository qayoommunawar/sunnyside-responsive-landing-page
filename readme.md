# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot
[Screenshot](./screenshot.png)

### Links

- Solution URL: [Gihub Repo Link](https://github.com/qayoommunawar/sunnyside-responsive-landing-page)
- Live Site URL: [Github Live Page](https://qayoommunawar.github.io/sunnyside-responsive-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

I practiced toggeling between mobile and desktop navbar while using the same html structure.

```html
<h1>Some HTML code I'm proud of</h1>
```<nav id="mobile-menu"> 
        <ul class="nav-links">
          <li>
            <a href="#">
            About
            </a>
          </li>
          <li>
            <a href="#">
            Services
            </a>
          </li>
          <li>
            <a href="#">
            Projects
            </a>
          </li>
          <li>
            <a href="#" class="btn-primary">
              Contact
            </a>
          </li>
        </ul>
      </nav>

```css
#mobile-menu {
        position: absolute;
        width: 90%;
        height: 250px;
        top: 80px;
        left: 50%;
        transform: translateX(-50%) scaleY(0);  
        transform-origin: top;
        background-color: var(--color-white);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.3s ease, opacity 0.3s ease;
}
```

```js
btnToggle.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.toggle('active');
    const expanded = btnToggle.getAttribute('aria-expanded') === 'true';
    btnToggle.setAttribute('aria-expanded', !expanded);
  }
});
```


### Continued development

Contined development for: 
- how i can manage header+hero section bg without giving header or backgroound img height:100vh; ? because
it does not looks good, and the other way if height is not used image is not shown fully.
- should i use fluid-grid style or manage it through media query ?? for example in section.img-gallery i styled images
using fluid grid:
here is the css snap:
```css
  .grid-gallery{
    display: grid;
    grid-template-columns:
        repeat(
          auto-fit,
          minmax(370px, 1fr)
        );
    justify-content: center;
    align-items: center;
}
```
- in section-flex which is bascially a grid layout, i set grid-rows so that both the image and text take exactly
the same height and width, is this a good practice ? wether i use flex for this ?? what is the best 
practice in these scenerios ??

```css
  .section-flex{
    display: grid;
    place-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2,1fr);
    justify-content: center;
    align-items: stretch;
}
```
- looking forward to any postive suggestions to enhance my grip on desgin and logic.

