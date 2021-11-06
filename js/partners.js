const renderItems = (data) => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        console.log(data[i].image);
        console.log(data[i].kitchen);
        console.log(data[i].name);
        console.log(data[i].price);
        console.log(data[i].products);
        console.log(data[i].stars);
        console.log(data[i].time_of_delivery);
    }
}

fetch('https://delivery-food-11bf0-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })