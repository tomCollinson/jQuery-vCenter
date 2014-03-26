function vCenter(element, contentTarget) {

  'use strict';
  
  var container = element,
  target = element.find(contentTarget);
  
  target.css('top', ($(element).height() - target.height()) / 2);
    
}
