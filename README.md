#jQuery-vCenter

vCenter is a small plugin to solve the common issue of vertically centering an element in relation to its parent. There are pure CSS solutions available however they usually require the parent element to have fixed dimensions which is not ideal for fluid responsive design. This plugin will adjust the position of the child element on page load and whenever the window is resized, making it perfect for responsive design.

##Getting Started

Include jQuery and the plugin, then provider the selector of the parent element relative to which your child element should be vertically aligned.
One option is available; 'target'. This is the selector for the child element. If no selector is provided here the default '.vCenter' will be used.

```html
<script src="js/jquery.js"></script>
<script src="js/jquery.vCenter.min.js"></script>
<script>
$(document).ready(function(){
      $('.container').vCenter({
        target: '.container__content'
      });
    });
</script>
```

###Non-Plugin Code

If you prefer to have a standalone function to integrate into your own code and just don't need a full plugin you can use the one provided in vCenter-function.js and shown below. Pass two jQuery objects through as arguements and the function will handle the rest.

```javascript

function vCenter(element, contentTarget) {

  'use strict';
  
  var container = element,
  target = element.find(contentTarget);
  
  target.css('top', ($(element).height() - target.height()) / 2);
    
}

```

###CSS

Ensure that the following css rules are applied to the parent and child elements as a minimum to allow them to be positioned correctly in relation to each other.

```css
.parent-element {
  position: relative;
}

.child-element {
  position: absolute;
}
```
