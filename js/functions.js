function CreateNodeOnDrop(node) {


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


       default:

     }

return node;

}
