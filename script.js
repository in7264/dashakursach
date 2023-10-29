const carsData = [
    {
        brand: "Audi",
        model: "A4",
        year: 2018,
        price: 25000,
        image: "images/audi_a6__0009.webp",
        engine: "2.0 л, бензин",
        mileage: 40000,
        city: "Київ",
        transmission: "автомат",
    },
    {
        brand: "BMW",
        model: "3 Series",
        year: 2019,
        price: 28000,
        image: "images/bmw_x5__0762.webp",
        engine: "2.0 л, бензин",
        mileage: 35000,
        city: "Львів",
        transmission: "автомат",
    },
    // інші автомобілі
];

const carList = document.querySelector(".car-list");
const brandFilter = document.getElementById("brandFilter");
const yearFilter = document.getElementById("yearFilter");
const priceFilter = document.getElementById("priceFilter");
const applyFiltersButton = document.getElementById("applyFilters");

function populateCarList() {
    carList.innerHTML = "";
    carsData.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");
        carCard.innerHTML = `
            <img src="${car.image}" class="car-image" alt="${car.brand}">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p>Ціна: $${car.price}</p>
                <p>Рік: ${car.year}</p>
                <p>Двигун: ${car.engine}</p>
                <p>Пробіг: ${car.mileage} км</p>
                <p>Місто: ${car.city}</p>
                <p>Тип коробки передач: ${car.transmission}</p>
            </div>
        `;
        carList.appendChild(carCard);
    });
}

function applyFilters() {
    const selectedBrand = brandFilter.value;
    const selectedYear = yearFilter.value;
    const selectedPrice = priceFilter.value;

    const filteredCars = carsData.filter((car) => {
        return (
            (selectedBrand === "all" || car.brand === selectedBrand) &&
            (selectedYear === "all" || car.year == selectedYear) &&
            (selectedPrice === "" || car.price <= selectedPrice)
        );
    });

    carList.innerHTML = "";
    filteredCars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");
        carCard.innerHTML = `
            <img src="${car.image}" class="car-image" alt="${car.brand}">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p>Ціна: $${car.price}</p>
                <p>Рік: ${car.year}</p>
                <p>Двигун: ${car.engine}</p>
                <p>Пробіг: ${car.mileage} км</p>
                <p>Місто: ${car.city}</p>
                <p>Тип коробки передач: ${car.transmission}</p>
            </div>
        `;
        carList.appendChild(carCard);
    });
}

applyFiltersButton.addEventListener("click", applyFilters);

populateCarList();
