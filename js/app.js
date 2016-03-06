var drop = document.querySelector('#drop');
var dragElements = document.querySelectorAll('.drag');
var elementDragged = null;

if (localStorage.getItem('code')) {
  drop.innerHTML = localStorage.getItem('code');
}
document.querySelector('#reset').addEventListener('click',function (e) {

  drop.innerHTML ="";
})

document.querySelector('#source').addEventListener('click',function (e) {

  var data = drop.innerHTML;
  document.querySelector('#code').value = data
  console.log(data);
})
document.querySelector('#save').addEventListener('click',function (e) {

  var data = drop.innerHTML;
  localStorage.setItem('code', data);
})



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


});

// Event Listener for when the dragged element leaves the drop zone.
drop.addEventListener('dragleave', function(e) {
  this.className = "";
});
drop.addEventListener('drop', function(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();

  var node = CreateNodeOnDrop(elementDragged.textContent);
  e.target.appendChild(node);
  return false;
});


document.querySelector('#drop').onclick = function(e) {



         if(document.querySelector('.selected')){

            document.querySelector('.selected').removeClass('selected')

            
         }else {
           e.srcElement.className = e.srcElement.className +' selected'
         }


      if (e.srcElement.nodeName == "H1" ||  e.srcElement.nodeName == "P" || e.srcElement.nodeName == "H2" || e.srcElement.nodeName == "A" || e.srcElement.nodeName == "LI") {
           e.srcElement.textContent= document.querySelector('#textContent').value
      }



         document.querySelector('#SelectedNode').value = e.srcElement.nodeName
         document.querySelector('#SelectedNodeClass').value = e.srcElement.className

};



document.querySelector('#remove').onclick = function(e) {

 document.querySelector('.selected').remove()

};
