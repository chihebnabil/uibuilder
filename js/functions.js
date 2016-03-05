function CreateNodeOnDrop(node) {




     var slider_string ='<div id="myCarousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img src="img_chania.jpg" alt="Chania"></div><div class="item"><img src="img_chania2.jpg" alt="Chania"></div><div class="item"><img src="img_flower.jpg" alt="Flower"></div><div class="item"><img src="img_flower2.jpg" alt="Flower"></div></div><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>';
     var navbar_string = '<nav class="navbar navbar-default navbar-static-top"><div class="container"><div class="navbar-header"><button class="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar" type="button" data-toggle="collapse" data-target="#navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">Bootstrap Site</a></div><div class="navbar-collapse collapse" id="navbar"><ul class="nav navbar-nav"><li class=""><a  id="reset" href="#">Home</a></li></div></div></nav>';

     switch (node) {
       case "button":
         var prpt = prompt("Please enter a button text", "");
         if (prpt != null) {
         var node = document.createElement("button");
                  node.className =  'btn btn-primary';
                  node.textContent  =prpt
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
           var prpt = prompt("Please enter a Link", "");
           var prpt2 = prompt("Please enter a url", "");
           if (prpt != null) {
           var node = document.createElement("a");
               node.textContent  =prpt
               node.href  = prpt2
           }
           break;
           case "form":
           var node = document.createElement("form");
               node.className  =""

           break;
           case "label":
           var prpt = prompt("Please enter a label", "");
           if (prpt != null) {
           var node = document.createElement("label");
               node.className  =""
               node.textContent = prpt
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
           var prpt = prompt("Please enter a H text", "");
           var n = prompt("Please enter a H number 1,2...", "");
           if (prpt != null) {
           var node = document.createElement("h"+n);
               node.textContent  =prpt
           }
           break;

           case "paragraph":
           var prpt = prompt("Please enter a paragraph", "");
           if (prpt != null) {
           var node = document.createElement("P");
               node.textContent  =prpt
               }
           break;
           case "alert":
           var prpt = prompt("Please enter a alert message", "");
           if (prpt != null) {
           var node = document.createElement("span");
               node.className  ="alert alert-danger"
               node.textContent  =prpt
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
