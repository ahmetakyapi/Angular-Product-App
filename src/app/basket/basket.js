document.querySelector("#productForm").addEventListener("submit",
 function(e) {
   const productName = document.querySelector("#productName").value;
   const productCategory = document.querySelector("#productCategory").value;
   const productPrice = document.querySelector("#productPrice").value;

   const myProducts = new Products(productName, productCategory, productPrice);

   const ui = new UI();

    if (productName == '' || productCategory == '' || productPrice == '') {
        ui.warn("Boş alan bırakmayınız !", "warn");
    }
    else {
        ui.addProduct(myProducts )
        
        ui.warn("Ekleme Başarılı !", "success");

        ui.deleteForm();
    }

   e.presentDefault();

});

function Products(productName, productCategory, productPrice) {

 this.productName = (productName);
 this.productCategory = productCategory;
 this.productPrice = productPrice;
}

function UI() {
}

UI.prototype.addProduct = function(myProducts) {
  const list = document.querySelector(".productList");

  const addUl = document.createElement("ul");
   addUl.innerHTML = `<li>${myProducts.productName}</li>
   <li>${myProducts.productCategory}</li>
   <li>${myProducts.productPrice}   </li>
   <li class= "delete">Sil</li>`

   list.appendChild(addUl);

}

UI.prototype.deleteForm = function() {
 document.querySelector("#productName").value = "";
 document.querySelector('#productCategory').value = "";
 document.querySelector('#productPrice').value = "";
}

UI.prototype.warn = function(message, className) {

    const div = document.createElement("div");
    div.className = `warn ${className}`;
    const text = document.createTextNode(message);
    div.appendChild(text);

    const form = document.querySelector("#productForm");
    document.body.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector(".warn").remove();
    }, 3000);
}

UI.prototype.deleteProductList = function (target) {
   if(target.className == "delete")
   target.parentElement.remove()
}

document.querySelector(".productList").addEventListener("click", 
function(e) {

    const ui = new UI()

    ui.deleteProductList(e.target);
    ui.warn("Silme İşlemi Başarılı!", "success")

    e.preventDefault();
});