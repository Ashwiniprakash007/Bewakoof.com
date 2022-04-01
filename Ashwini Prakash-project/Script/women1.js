var data = [
    {
        img:"https://images.bewakoof.com/t540/mickey-colourful-boy-friend-fit-tshirt-441316-1644558389-1.jpg",
        price:"₹599",
        strikedOffPrice:"899"
    },
    {
        img:"https://images.bewakoof.com/t540/been-there-2-0-boyfriend-t-shirt-482683-1648181861-1.jpg",
        price:"₹299",
        strikedOffPrice:"999"

    },
    {
        img:"https://images.bewakoof.com/t540/enough-nonsense-boyfriend-t-shirt-481831-1648011681-1.jpg",
        price:"₹299",
        strikedOffPrice:"999"

    },
    {
        img:"https://images.bewakoof.com/t320/nasa-astronaut-boyfriend-t-shirt-481837-1648011703-1.jpg",
        price:"₹299",
        strikedOffPrice:"999"
    },
    {
        img:"https://images.bewakoof.com/t540/sleepy-head-dl-boyfriend-t-shirt-481842-1648094952-1.jpg",
        price:"₹299",
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
        img:"https://images.bewakoof.com/t540/happy-today-half-sleeve-t-shirts-women-s-half-sleeve-printed-t-shirt-313948-1610098291.jpg",
        price:"₹249",
        strikedOffPrice:"699"
    },
    {
        img:"https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-232388-1638184271-1.jpg",
        price:"₹299",
        strikedOffPrice:"449"

    },
    {
        img:"https://images.bewakoof.com/t540/mickey-don-t-care-half-sleeve-t-shirt-dl-women-s-half-sleeve-printed-t-shirt-275402-1593592080.jpg",
        price:"₹349",
        strikedOffPrice:"999"


    },
    {
        img:"https://images.bewakoof.com/t540/bella-tokyo-half-sleeve-t-shirt-270505-1637995798-1.jpg",
        price:"₹249",
        strikedOffPrice:"549"
    },
    {
        img:"https://images.bewakoof.com/t540/lemon-drop-boyfriend-t-shirt-346179-1635868994-1.jpg",
        price:"₹299",
        strikedOffPrice:"₹99"
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
