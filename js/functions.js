function DropNode(node) {


     switch (node) {
       case "button":
       var node = document.createElement("button");
                  node.className =  'btn btn-primary';
                  node.textContent  ="Button"

         break;
         case "textarea":
         var node = document.createElement("textarea");
                    node.className =  'form-control';
                    node.textContent  =""

           break;
           case "image":
          var node = document.createElement("img");
              node.src  ="images/bg.png"
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
           var elm = document.createElement("div");
                     elm.className  ="form-control"

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
           case "colx3":
           var node = document.createElement("div");
               node.className  ="col-md-3"

           break;
           case "colx6":
           var node = document.createElement("div");
               node.className  ="col-md-6"

           break;
           case "jumbotron":
           var node = document.createElement("div");
               node.className  ="jumbotron"

           break;
           case "H1":
           var node = document.createElement("h1");
               node.textContent  ="Title 1"
           break;
           case "H2":
           var node = document.createElement("h2");
               node.textContent  ="Title 2"
           break;
           case "H3":
           var node = document.createElement("h3");
               node.textContent  ="Title 3"
           break;
           case "H4":
           var node = document.createElement("h4");
               node.textContent  ="Title 4"
           break;
           case "H5":
           var node = document.createElement("h5");
               node.textContent  ="Title 5"
           break;
           case "paragraph":
           var node = document.createElement("P");
               node.textContent  ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore e"
           break;


       default:

     }

return node;

}
