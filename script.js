// function to get menu
 async function getmenu(){
    const main_container = document.getElementById("main-section");
    let response, result;
    try{
        response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        result = await response.json();
    } 
    catch(error){
        throw new Error("error");
    }
    //  console.log(response,result);
    result.forEach(item => {
        const menu =   document.createElement("div");
        menu.className="card"
        menu.innerHTML = `
        <img src= ${item.imgSrc}/></img>
        <p>${item.name}</p>
        <p>$${item.price}</p>
        `
        main_container.append(menu);
    });

 }

//function to take the order
function takeorder(){
    return new Promise(resolve =>{
        setTimeout(() => {
            const order = {
                burgers: ['Burger 1', 'Burger 2', 'Burger 3']
            };
            resolve(order);
        }, 2500);
    });
}

//function for order preparation
 function orderPrep(){
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = {
                order_status: true,
                paid: false
            };
            resolve(orderStatus);
        }, 1500);
    });
 }

 //function for payment
  function payOrder(){
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = {
                order_status: true,
                paid: true
            };
            resolve(orderStatus);
        }, 1000);
    });
  }

  //function to display the thank you message
  function thankYou(){
    alert('Thank you for eating with us today!');
  }

  //Event
  getmenu().then(()=>{
    return takeorder();
  }).then((order)=>{
    console.log(order);
    return orderPrep();
  }).then((orderStatus)=>{
    console.log(orderStatus);
    return payOrder();
  }).then((orderStatus)=>{
    console.log(orderStatus);
    if(orderStatus.paid)
    return thankYou();
    else throw new Error("Payment not completed")
  }).catch(err => {
    console.log(err);
  })
