var drop = document.querySelector('#drop');
var dragElements = document.querySelectorAll('.drag');
var elementDragged = null;

var elements = [
  ['button','input','textarea'],
  [
  '<b>BUTTON</b>',
  'input',
  'textarea'
  ]];


for (var i = 0; i < dragElements.length; i++) {

  // Event Listener for when the drag interaction starts.
  dragElements[i].addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', this.innerHTML);
    elementDragged = this;
  });

  // Event Listener for when the drag interaction finishes.
  dragElements[i].addEventListener('dragend', function(e) {
    elementDragged = null;
  });

};

drop.addEventListener('dragover', function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
});

drop.addEventListener('dragenter', function(e) {
  this.className = "over";
});

// Event Listener for when the dragged element leaves the drop zone.
drop.addEventListener('dragleave', function(e) {
  this.className = "";
});
drop.addEventListener('drop', function(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();




  this.className = "";

   console.log(elementDragged.textContent);


   switch (elementDragged.textContent) {
     case "button":
     var node = document.createElement("button");
                node.className =  'btn btn-primary';
                node.textContent  ="Button"

       break;
       case "textarea":
       var node = document.createElement("textarea");
                  node.className =  'textarea';
                  node.textContent  =""

         break;
         case "image":
        var node = document.createElement("img");
            node.src  ="#"
         break;
         case "link":
         var node = document.createElement("a");
             node.href  ="#"
             node.textContent  ="Link"
         break;
         case "form":
         var node = document.createElement("form");
             node.className  =""

         break;
         case "input":
         var node = document.createElement("input");
             node.className  ="form-control"

         break;
         case "row":
         var node = document.createElement("div");
             node.className  ="row"

         break;
         case "colx12":
         var node = document.createElement("div");
             node.className  ="col-md-12"

         break;
         case "colx4":
         var node = document.createElement("div");
             node.className  ="col-md-4"

         break;



     default:

   }



  e.target.appendChild(node);





  return false;
});
