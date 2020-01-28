console.log("Learning Javascript Events");

const pies = [
    {
        name: "Jell-O Pie",
        price: 900,
        isWarm: false,
        isOrganic: false,
        crust: "graham cracker",
        iceCream: "None",
        isAvailable: false,
        imageUrl: "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/12168/patrioticpie.jpg",
        drinkPairing: "Milk",
        instructor: "Self"
    },
    {
        name: "Dutch Apple",
        price: 1100,
        isWarm: true,
        isOrganic: true,
        crust: "graham",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/5b481045-507b-4e3f-908e-749f5ca06e7e.jpg",
        drinkPairing: "Whiskey",
        instructor: "Zoe"
    },
    {
        name: "Chocolate",
        price: 5000,
        isWarm: false,
        isOrganic: true,
        crust: "Oreo",
        iceCream: "Vegan Chocoalate",
        isAvailable: true,
        imageUrl: "https://static01.nyt.com/images/2018/08/09/dining/seneviratne_chocolateoreopie_horizontal/merlin_141910416_bf7098a9-7c73-4a7c-b632-4e99fd575356-articleLarge.jpg",
        drinkPairing: "All Wine",
        instructor: "Mary"
    },
    {
        name: "Pizza",
        price: 250,
        isWarm: true,
        isOrganic: false,
        crust: "Flour",
        iceCream: "Nope",
        isAvailable: true,
        imageUrl: "http://www.rhodesbread.com/blog/images/YvonneF/10102016/rhodes-pizza-pie-10.jpg",
        drinkPairing: "High Life",
        instructor: "Luke"
    },
    {
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "Flour",
        iceCream: "None",
        isAvailable: true,
        imageUrl: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150313105721-pi-day-graphic.jpg",
        drinkPairing: "Milk",
        instructor: "Luke"
    },
    {
        name: "Berry Pie",
        price: 750,
        isWarm: true,
        isOrganic: true,
        crust: "Flour",
        iceCream: "Vanilla",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/808f7319-ed9b-41c7-8d35-959d83c868e8.jpg",
        drinkPairing: "Whiskey",
        instructor: "Zoe"
    },
    {
        name: "Sweet Potato",
        price: 1400,
        isWarm: true,
        isOrganic: true,
        crust: "Flour",
        iceCream: "None",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/e54755e0-70f5-42d8-8d2d-cd75eb7b218a.jpg",
        drinkPairing: "Don't know",
        instructor: "Self" 
    },
    {
        name: "Smores Pie",
        price: 1800,
        isWarm: false,
        isOrganic: false,
        crust: "Flour",
        iceCream: "None",
        isAvailable: true,
        imageUrl: "https://tastykitchen.com/wp-content/uploads/2013/07/Tasty-Kitchen-Blog-Smores-Pie-00.jpg",
        drinkPairing: "Milk",
        instructor: "Self" 
    }
];

console.log('pies', pies);

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const pieBuilder = (monkeybuttArray) => {
    let domString = '';
    for (let i = 0; i < monkeybuttArray.length; i++) {
        domString += `<div class="pie">`;
        domString += `<header>${monkeybuttArray[i].name}</header>`;
        domString +=    `<img src=${monkeybuttArray[i].imageUrl} class=${monkeybuttArray[i].type}Img></img>`;
        domString +=    `<section class="cost">Price: $${monkeybuttArray[i].price}</section>`;
        domString +=    `<section class="warm">Served Warm? ${monkeybuttArray[i].isWarm}</section>`;
        domString +=    `<section class="organic">Organic? ${monkeybuttArray[i].isOrganic}</section>`;
        domString +=    `<section class="iceCream">Ideal Ice Cream: ${monkeybuttArray[i].iceCream}</section>`;
        domString +=    `<p class="crust">Crust type: ${monkeybuttArray[i].crust}</p>`;
        domString +=    `<p class="drinkPair">Ideal drink: ${monkeybuttArray[i].drinkPairing}</p>`;
        domString +=    `<section class="available">Available? ${monkeybuttArray[i].isAvailable}</section>`;
        domString +=    `<footer class=${monkeybuttArray[i].instructor}>Who's Fave? ${monkeybuttArray[i].instructor}</footer>`;
        domString += '</div>'
}
printToDom('pie-cards', domString);
};

const selfPie = (e) => {
    const buttonId = e.target.id;
    if(buttonId === 'All'){
        pieBuilder(pies);
    } else{
    const myPies = []
        for (let i = 0; i < pies.length; i++){
            if( pies[i].instructor === buttonId){
                myPies.push(pies[i]);
            }
        }
    pieBuilder(myPies);
    }
};

const event = () => {
    document.getElementById('Zoe').addEventListener('click', selfPie);
    document.getElementById('Mary').addEventListener('click', selfPie);
    document.getElementById('Luke').addEventListener('click', selfPie);
    document.getElementById('Self').addEventListener('click', selfPie);
    document.getElementById('All').addEventListener('click', selfPie);
};

const init = () => {
    pieBuilder(pies);
    event();
};

init();