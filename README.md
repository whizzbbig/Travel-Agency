# 🥤Gulp Locomotive Boilerplate

A Gulp boilerplate to get developing locally with a few helpful tools already set up.

Tasks included:

- HTML minify (on build)
- CSS autoprefixer
- Sass minify
- JS minify
- Image minify
- Nunjucks
- Live reload
- Babel

## How to run
Install Gulp globally (if you don't already have it). Full installation docs (https://gulpjs.com/docs/en/getting-started/quick-start).

    npm install gulp-cli -g
Install necessary packages

    npm install
Run Gulp.

    gulp

The live reload task should then initiate the project on http://localhost:3000. If that port is already taken it will default to another number such as localhost:3001.

## Building assets

To build assets without starting a local server with live reload, use the build command:

    gulp build

# Locomotive Scrolling with Responsive Behavior

To enable horizontal scrolling in section add
    ``.horizontal``
class to the section and pin it and animation wrap to have horizontal scroll 
    ``.pin-wrap``
    ``.animation-wrap``

you can move it right by adding 
    ``.to-right``
to ``.animation-wrap`` div

same goes with left
    ``.to-left``
    
## Example
```html
 <section data-bgcolor="#c4f" class="horizontal">
        <div class="pin-wrap">
          <div class="animation-wrap to-right">
                <!--- Your Code Here 😁 ---->
          </div>
        </div>
</section>
```

here we use ``data-bgcolor`` property on section to change the background color of the body thats where
i introduce the color changing feature of the boilerplate

you can also use ``data-textcolor`` to change the text color of the body when the defined section enters in the viewport of the device

this horizontal scroll is also responsive to the small devices too where it works vertically to prevent good user experience
