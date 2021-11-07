const menu = () => {
    const restaurant = 'food-band';

    const renderItems = (data) => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }

    fetch(`./db/${restaurant}.json`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error) => {
            console.log(error);
        })
}
export default menu;