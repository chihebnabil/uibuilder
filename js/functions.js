function CreateNodeOnDrop(node) {


     var textContent =  "dummy text"
     var className =  document.querySelector('#className').value

     var slider_string ='<div id="myCarousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/placeholder.png" alt=""></div><div class="item"><img src="images/placeholder.png" alt=""></div><div class="item"><img src="images/placeholder.png" alt=""></div><div class="item"><img src="images/placeholder.png" alt=""></div></div><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>';
     var navbar_string = '<nav class="navbar navbar-default navbar-static-top"><div class="container"><div class="navbar-header"><button class="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar" type="button" data-toggle="collapse" data-target="#navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">Bootstrap Site</a></div><div class="navbar-collapse collapse" id="navbar"><ul class="nav navbar-nav"><li class=""><a  id="reset" href="#">Home</a></li></div></div></nav>';

     switch (node) {
       case "button":

         if (textContent != null) {
         var node = document.createElement("button");
                  node.className =  'btn btn-primary';
                  node.textContent  = textContent;
         }
         break;
         case "textarea":
         var node = document.createElement("textarea");
                    node.className =  'form-control';
                    node.textContent  =""

           break;
           case "image":
          var node = document.createElement("img");
              node.src  ="images/11665421_819654108161359_3226985830879850577_n.jpg"
              node.className = "img-responsive"
           break;
           case "link":

           var prpt2 = prompt("Please enter a url", "");
           if (textContent != null) {
           var node = document.createElement("a");
               node.textContent  =textContent
               node.href  = prpt2
           }
           break;
           case "form":
           var node = document.createElement("form");
              node.className  ="form"


           break;
           case "label":

           if (textContent != null) {
           var node = document.createElement("label");
               node.className  =""
               node.textContent = textContent
            }
           break;

           case "input":
           var elm = document.createElement("div");
                     elm.className  ="form-control"

           var node = document.createElement("input");
               node.className  ="form-control"

           break;
           case "row":
           var node = document.createElement("div");
               node.className  ="row"

           break;
           case "countainer":
           var node = document.createElement("div");
               node.className  ="countainer"

           break;
           case "col":
           var node = document.createElement("div");
           var n = prompt("Please enter a col size 1,2...12", "");
               node.className  ="col-md-"+n;

           break;
           case "jumbotron":
           var node = document.createElement("div");
               node.className  ="jumbotron"

           break;
           case "hr":
           var node = document.createElement("hr");


           break;
           case "H":

           var n = prompt("Please enter a H number 1,2...", "");
           if (textContent) {
           var node = document.createElement("h"+n);

               node.textContent  =textContent
               node.setAttribute("ng-model", "textContent");
           }
           break;

           case "paragraph":

           if (textContent) {
           var node = document.createElement("P");
               node.textContent  = textContent
               }
           break;
           case "alert":

           if (textContent != null) {
           var node = document.createElement("span");
               node.className  ="alert alert-danger"
               node.textContent  =textContent
               }
           break;
           case "slider":
           var node = document.createElement("div");

               node.innerHTML = slider_string;

           break;
           case "navbar":
           var node = document.createElement("div");
           node.className  =""
               node.innerHTML = navbar_string;

           break;

       default:

     }

return node;

}

var textFile = null;
MakeFile = function (text) {
   var data = new Blob([text], {type: 'text/text'});

   // If we are replacing a previously generated file we need to
   // manually revoke the object URL to avoid memory leaks.
   if (textFile !== null) {
     window.URL.revokeObjectURL(textFile);
   }

   textFile = window.URL.createObjectURL(data);
   document.querySelector('#wp').href = textFile;

   return textFile;
 };
 PreviewFile = function (text) {
    var data = new Blob([text], {type: 'text/html'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);
    document.querySelector('#preview').href = textFile;

    return textFile;
  };



function init() {

}
