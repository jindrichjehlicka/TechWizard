
/*

 var string = "foo",
 substring = "f";
 string.includes(substring);

 console.log(string.includes(substring));
}*/

module.exports = {
    methods: {
        search: function (array){
            var value = document.getElementById("searchInput").value.toLowerCase();
            var parent = document.getElementById("dialog");
            var count = 0;
            parent.style.display = "none";
            while(parent.firstChild){
                parent.removeChild(parent.firstChild);
            }
            if(value){

                for(var i = 0; i < array.length; i++){
                    var obj = array[i];
                    var objName = obj.name.toLowerCase();
                    if(objName.includes(value) && count < 4){
                        var z = document.createElement('p');
                        z.innerHTML = "<li><a href='/api/product/" + obj.id + "'>"+ obj.name +"</a></li>";
                        parent.appendChild(z);
                        parent.style.display = "block";
                        count++;
                    }
                }
            }
        },
        searchUser: function (array){
            var value = document.getElementById("searchInputUser").value.toLowerCase();
            var parent = document.getElementById("dialog");
            var count = 0;
            parent.style.display = "none";
            while(parent.firstChild){
                parent.removeChild(parent.firstChild);
            }
            if(value){

                for(var i = 0; i < array.length; i++){
                    var obj = array[i];
                    var objName = obj.name.toLowerCase();
                    if(objName.includes(value) && count < 4){
                        var z = document.createElement('p');
                        z.innerHTML = "<li><a href='/api/user/" + obj.id + "'>"+ obj.name +"</a></li>";
                        parent.appendChild(z);
                        parent.style.display = "block";
                        count++;
                    }
                }
            }
        },
        createCookie : function (name,value,days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        readCookie : function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            var tempArr = [];
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0){
                    var string = c.substring(nameEQ.length,c.length);
                    tempArr = string.split(",");
                    return string;
                }
            }
            return null;
        },
        eraseCookie : function (name) {
            createCookie(name,"",-1);
        },
        addToCart : function (item){
            function loop(item){
                for(var i = 0; i < cartArr.length; i++){
                    if(cartArr[i].name == item.name){
                        var item = cartArr[i];
                        item.qty += 1;
                        console.log("Ran");
                        return true;
                    }
                }
            }

            if(!loop(item)){
                if (!('qty' in item)){
                    item.qty = 1;
                    cartArr.push(item);
                }
            }




            createCookie("Cart", JSON.stringify(cartArr), 30);
            console.log(cartArr);
            navQty();
        },
        delFromCart: function (id){
            var elem = "product-" + id;

            for(var i = 0; i < cartArr.length; i++){
                if(cartArr[i].id == id){
                    var item = cartArr[i];

                    if(item.qty <= 1){
                        cartArr.splice(i, 1);
                        remove(elem);
                    }else{
                        item.qty -= 1;
                    }

                    createCookie("Cart", JSON.stringify(cartArr), 30);
                    cartQty(id);
                    cartTotal();
                    navQty();
                }
            }
        }
    },
    filters: {
        truncat: function (text, stop, clamp) {
            return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
        }
    }
}






