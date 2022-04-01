   
    var data = [
        {
            img:"https://images.bewakoof.com/t320/brooklyn-nyc-lines-lightweight-adjustable-strap-men-slider-333620-1641198633-1.jpg",
            price:"₹499",
            strikedOffPrice:"1999"
        },
        {
            img:"https://images.bewakoof.com/t320/soldier-star-printed-laptop-bag-avl-361091-1638213957-1.jpg",
            price:"₹799",
            strikedOffPrice:"1699"
    
        },
        {
            img:"https://images.bewakoof.com/t320/sliding-bat-lightweight-adjustable-strap-men-slider-367177-1640357910-1.jpg",
            price:"₹849",
            strikedOffPrice:"1699"
    
        },
        {
            img:"https://images.bewakoof.com/t320/surf-dinosaur-lightweight-adjustable-strap-women-slider-330389-1640354617-5.jpg",
            price:"₹299",
            strikedOffPrice:"999"
        },
        {
            img:"https://images.bewakoof.com/t320/last-benchers-printed-small-backpack-black-237470-1644581818-1.jpg",
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
            img:"https://images.bewakoof.com/t320/men-s-white-and-yellow-color-block-casual-shoes-479851-1646294433-1.jpg",
            price:"₹1349",
            strikedOffPrice:"2699"
        },
        {
            img:"https://images.bewakoof.com/t320/men-s-blue-and-white-color-block-sneakers-479862-1646294556-1.jpg",
            price:"₹1199",
            strikedOffPrice:"3449"
    
        },
        {
            img:"https://images.bewakoof.com/t320/men-s-grey-self-design-lace-up-sneakers-479529-1646221988-1.jpg",
            price:"₹349",
            strikedOffPrice:"1499"
    
    
        },
        {
            img:"https://images.bewakoof.com/t320/men-s-blue-and-black-color-block-casual-shoes-479838-1646294315-1.jpg",
            
            price:"₹2349",
            strikedOffPrice:"3799"
        },
        {
            img:"https://images.bewakoof.com/t320/men-s-white-sneakers-479860-1646293872-1.jpg",
            price:"₹4499",
            strikedOffPrice:"8799"
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
    