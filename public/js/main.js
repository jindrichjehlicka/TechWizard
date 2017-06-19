var cartArr = JSON.parse(readCookie("Cart")) || [];
var currency = "€";

//WHEN DOM IS READY LAUNCH IT
(function() {
    navQty();
    cartTotal();
})();


function getJson(url, callback){
        var AJAX_req = new XMLHttpRequest();
        AJAX_req.open("GET", url, true);
        AJAX_req.setRequestHeader("Content-type", "application/json");

        AJAX_req.onreadystatechange = function() {
            if(AJAX_req.readyState == 4 && AJAX_req.status == 200){
                callback(JSON.parse(AJAX_req.responseText));
            }
        };
        AJAX_req.send();
}


// COOKIE FUNCTIONS
function createCookie(name,value,days) {
    var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0){
            var string = c.substring(nameEQ.length,c.length);
            return string;
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function navQty(){
    var div = document.getElementById("badge");
    if(div != null){
        var qty = 0;
        for(var i = 0; i < cartArr.length; i++){
            var c = cartArr[i];

            if (('qty' in c)){
                qty += c.qty;
            }
        }
        div.innerHTML = qty;
    }
}

function cartQty(id){
    var div = document.getElementById( "qty-" + id);
    if(div != null){
        var qty = 0;
        for(var i = 0; i < cartArr.length; i++){
            if(cartArr[i].id == id){
                qty = cartArr[i].qty;
            }
        }
        div.innerHTML = qty;
    }
}

function cartTotal(){
    var divArr = document.querySelectorAll("#cartTotal, #total");
    divArr.forEach((item)=>{
        div = item;
        if(div != null) {
            var total = 0;
            for (var i = 0; i < cartArr.length; i++) {
                var c = cartArr[i];

                if (('qty' in c)) {
                    total += c.price * c.qty;
                } else {
                    total += c.price;
                }
            }
            div.value = total;
            div.innerHTML = "<b>Total: </b>" + total + currency;
        }
    })
}

function remove(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

