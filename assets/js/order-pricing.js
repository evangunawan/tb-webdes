var price = 0;

function priceConvert(){
    var getSelect = document.getElementById("select-model");
    var selectedModel = getSelect.options[getSelect.selectedIndex].value;
    
    if(selectedModel == "ModelS"){
        price = "$76,200";
    }
    else if(selectedModel == "Model3"){
        price = "$36,200";
    }
    else if(selectedModel == "ModelX"){
        price = "$82,200";
    }
    else if(selectedModel == "ModelY"){
        price = "$47,000";
    }
    else if(selectedModel == "Roadster"){
        price = "$200,000";
    }

    document.getElementById("price").innerHTML = price;
}

function reviewOrder(){
    var confirmText = "Thankyou! Your order has been booked. \nTotal Payment: " + price;    

    if(price != 0){
        alert(confirmText);
    }
    else {
        alert("Please choose your order car..")
    }
}