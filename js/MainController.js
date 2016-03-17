var app = angular.module('app', ['ngTouch']);
var elementDragged = null;
var drop = angular.element('#drop');

app.controller('MainController',function($scope, $sce, $compile){
    $scope.HtmlElements = ['row','countainer','col','jumbotron','button','link','image','label','form', 'input','textarea','H','paragraph','alert','footer']
    $scope.Components =   ['navbar','slider'];
    $scope.dragElements = document.querySelectorAll('.drag');

    if (localStorage.getItem('code')) {
      drop.html( localStorage.getItem('code')) ;
    }
    $scope.reset = function () {
        drop.html("");
    }

    $scope.source = function () {

      var data = drop.html()
      document.querySelector('#code').value = data

    }
    $scope.save = function () {
      var data = drop.html();
      localStorage.setItem('code', data);
    }
    $scope.remove = function() {

      document.querySelector('.selected').remove()

    };





});

app.directive('dragElement', function(){
   return {
      restrict: 'A', //attribute only
      link: function(scope, elem, attr, ctrl) {
        elem.bind('dragstart', function(e) {

             e.originalEvent.dataTransfer.effectAllowed = 'move';
             e.originalEvent.dataTransfer.setData('text', this.innerHTML);
             elementDragged = this;

        });

         elem.bind('dragend', function(e) {
           elementDragged = null;

         });


      }
   };
});

app.directive('dropArea', function() {
   return {
       restrict: 'A',
       link: function(scope, elem, attr, ctrl){

       elem.bind('dragleave', function(e) {


       });
         elem.bind('dragover', function(e) {
           if (e.preventDefault) {
             e.preventDefault();
           }

           e.originalEvent.dropEffect = 'move';

           return false;

         });
            elem.bind('drop', function(e) {
              if (e.preventDefault) e.preventDefault();
              if (e.stopPropagation) e.stopPropagation();
                     console.log(elementDragged);
              var node = CreateNodeOnDrop(elementDragged.textContent);
              e.target.appendChild(node);
              return false;
            });
            elem.bind('click', function(e) {
            
              if(angular.element('.selected')){


              angular.element(".selected").removeClass('selected');


              }else {

                e.originalEvent.srcElement.className = e.originalEvent.srcElement.className +' selected'
              }

              if (e.originalEvent.srcElement.nodeName == "H1" || e.originalEvent.srcElement.nodeName == "BUTTON"  || e.originalEvent.srcElement.nodeName == "LABEL" ||  e.originalEvent.srcElement.nodeName == "P" || e.originalEvent.srcElement.nodeName == "H2" || e.originalEvent.srcElement.nodeName == "A" || e.originalEvent.srcElement.nodeName == "LI") {
                e.originalEvent.srcElement.textContent= document.querySelector('#textContent').value
              }
              if (e.originalEvent.srcElement.nodeName == "IMG" ) {

                  e.originalEvent.srcElement.src = document.querySelector('#src').value

              }
              angular.element('#SelectedNode').val(e.originalEvent.srcElement.nodeName)
              angular.element('#SelectedNodeClass').val(e.originalEvent.srcElement.className);

            });
       }
   };
});
