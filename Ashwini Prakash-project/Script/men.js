 
    var data = [
        {
            img:"https://images.bewakoof.com/t320/4x4-off-road-half-sleeve-t-shirt-481844-1648094981-1.jpg",
            price:"₹299",
            strikedOffPrice:"999"
        },
        {
            img:"https://images.bewakoof.com/t320/psy-glow-half-sleeve-t-shirt-482684-1648181945-1.jpg",
            price:"₹299",
            strikedOffPrice:"999"
    
        },
        {
            img:"https://images.bewakoof.com/t320/busy-doing-nothing-2-0-479993-1647890630-1.jpg",
            price:"₹449",
            strikedOffPrice:"1199"
    
        },
        {
            img:"https://images.bewakoof.com/t320/4x4-off-road-half-sleeve-t-shirt-481846-1648095003-1.jpg",
            price:"₹299",
            strikedOffPrice:"999"
        },
        {
            img:"https://images.bewakoof.com/t320/spaced-nasa-480034-1647890493-1.jpg",
            price:"₹399",
            strikedOffPrice:"999"
    
        },
        ];
    
        data.map(function(elem){
            var div=document.createElement("div");
    
            var img= document.createElement("img");
            img.setAttribute("onclick","location.href='detail.html'")
            img.setAttribute("src",elem.img);
           
            var div1=document.createElement("div");
    
            var price=document.createElement("h4");
            price.innerText=elem.price;
    
            var strikedOffPrice=document.createElement("p");
            strikedOffPrice.innerText=elem.strikedOffPrice;
            strikedOffPrice.style.textDecoration="line-through";
            div1.append(price,strikedOffPrice)
    
            div.append(img,div1)
            document.querySelector("#container7").append(div);
        })
    
    
        var data1 = [
        {
            img:"https://images.bewakoof.com/t320/lemon-drop-half-sleeve-t-shirt-346164-1639374604-1.jpg",
            price:"₹349",
            strikedOffPrice:"699"
        },
        {
            img:"https://images.bewakoof.com/t320/solo-brathukey-half-sleeve-t-shirt-303810-1638215608-5.jpg",
            price:"₹199",
            strikedOffPrice:"449"
    
        },
        {
            img:"https://images.bewakoof.com/t320/king-of-mrzpr-half-sleeve-t-shirt-black-295735-1635868850-5.jpg",
            price:"₹349",
            strikedOffPrice:"499"
    
    
        },
        {
            img:"https://images.bewakoof.com/t320/verdant-green-half-sleeve-t-shirt-346181-1635869169-6.jpg",
            
            price:"₹349",
            strikedOffPrice:"799"
        },
        {
            img:"https://images.bewakoof.com/t320/bold-red-half-sleeve-plus-size-t-shirt-326628-1632718568-5.jpg",
            price:"₹499",
            strikedOffPrice:"799"
        },
        ];
    
        data1.map(function(elem){
            var div=document.createElement("div");
    
            var img= document.createElement("img");
            img.setAttribute("onclick","location.href='detail.html'")
            img.setAttribute("src",elem.img);
           
            var div1=document.createElement("div");
    
            var price=document.createElement("h4");
            price.innerText=elem.price;
    
            var strikedOffPrice=document.createElement("p");
            strikedOffPrice.innerText=elem.strikedOffPrice;
            strikedOffPrice.style.textDecoration="line-through";
            div1.append(price,strikedOffPrice)
    
            div.append(img,div1)
            document.querySelector("#container8").append(div);
        })