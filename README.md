# Travel Agency

@mixin to generate Flashing Animation

```scss

@use 'sass:math';

@mixin Trippy($_id, $_property, $_colors) {
  $steps: length($_colors);
  $single-step: math.div(100%, $steps - 1);

  @keyframes Trippy-#{$_id} {
    @for $i from 0 through ($steps - 2) {
      $current-stop: $single-step * $i;

      #{$current-stop} {
        #{$_property}: nth($_colors, $i + 1);
      }
    }

    100% {
      #{$_property}: nth($_colors, $steps);
    }
  }
}
```
`sass:math` is mandatory to use since the way of doing calculation that we used to do before with sass is deprecated

```scss
@include Trippy(1, background-color, $ecstasy);
@include Trippy(2, color, $sweets);
@include Trippy(3, background-color, $molly); // @include LoveDrug(1, $sweets);
```
init them and store the colors in a variable 

```scss
// Trippy Backgrounds
$ecstasy: #a54dd4, #8536ca, #db5d9f, #e3d3ff, #0e38b1, #ef3e4a, #7eceff, #1b1d1c,
  #fbfe56, #9c9cdd, #a54dd4;

$molly: white, black, tomato, white, black, blue, white;

// Loving Colors
$sweets: $color-white, $color-white, $color-black, #7121ff, $color-white,
  $color-black, $color-black, #ea1821, $color-black, #cae9bf, $color-white;
```

add animation to elements now 😎

```scss
@include media('<=689px') {
  animation: Trippy-3 0.5s step-start infinite;
  transition: all 0.2s ease-in-out;
}
```
