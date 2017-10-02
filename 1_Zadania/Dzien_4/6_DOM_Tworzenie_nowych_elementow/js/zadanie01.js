/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener('DOMContentLoaded', function() {

     var button = document.querySelector('a');
     console.log(button);

     var menu = document.querySelector('ul');
     console.log(menu);

     button.addEventListener('click', function(e) {
         var counter = menu.children.length
         var newLi = document.createElement('li');
         newLi.innerText = ('Element '+(counter+1)+ ' w chwili dodania było '+counter+' elementów');
         this.previousElementSibling.appendChild(newLi);

     });

 });
