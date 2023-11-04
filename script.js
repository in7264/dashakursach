const carsData = [
    {
        brand: "Audi",
        model: "A4",
        year: 2018,
        price: 25000,
        image: "images/audi_a4__0009.webp",
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
        image: "images/bmw_3s__0762.webp",
        engine: "2.0 л, бензин",
        mileage: 35000,
        city: "Львів",
        transmission: "автомат",
    },
    {
        brand: "Mercedes-Benz",
        model: "C-Class",
        year: 2020,
        price: 32000,
        image: "images/mercedes-benz_c-class__522484991f.webp",
        engine: "2.0 л, дизель",
        mileage: 25000,
        city: "Одеса",
        transmission: "автомат",
    },
    {
        brand: "Toyota",
        model: "Camry",
        year: 2019,
        price: 23000,
        image: "images/toyota_camry__517156419f.webp",
        engine: "2.5 л, гібрид",
        mileage: 30000,
        city: "Дніпро",
        transmission: "автомат",
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2020,
        price: 21000,
        image: "images/honda_civic__521879904f.webp",
        engine: "1.5 л, бензин",
        mileage: 28000,
        city: "Харків",
        transmission: "автомат",
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2019,
        price: 19000,
        image: "images/ford_focus__522520559f.webp",
        engine: "1.0 л, бензин",
        mileage: 32000,
        city: "Кривий Ріг",
        transmission: "механіка",
    },
    {
        brand: "Volkswagen",
        model: "Golf",
        year: 2017,
        price: 17000,
        image: "images/volkswagen_golf__522443846f.webp",
        engine: "1.4 л, бензин",
        mileage: 42000,
        city: "Запоріжжя",
        transmission: "автомат",
    },
    {
        brand: "Nissan",
        model: "Altima",
        year: 2018,
        price: 16000,
        image: "images/nissan_altima__522418914f.webp",
        engine: "2.5 л, бензин",
        mileage: 38000,
        city: "Полтава",
        transmission: "автомат",
    },
    {
        brand: "Audi",
        model: "Q5",
        year: 2021,
        price: 35000,
        image: "images/audi_q5__522091412f.webp",
        engine: "2.0 л, бензин",
        mileage: 18000,
        city: "Львів",
        transmission: "автомат",
    },
    {
        brand: "Audi",
        model: "A3",
        year: 2020,
        price: 28000,
        image: "images/audi_a3__521530646f.webp",
        engine: "1.8 л, бензин",
        mileage: 22000,
        city: "Київ",
        transmission: "автомат",
    },
    {
        brand: "BMW",
        model: "5 Series",
        year: 2019,
        price: 32000,
        image: "images/bmw_5-series__426173066f.webp",
        engine: "3.0 л, бензин",
        mileage: 30000,
        city: "Одеса",
        transmission: "автомат",
    },
    {
        brand: "BMW",
        model: "X3",
        year: 2020,
        price: 35000,
        image: "images/bmw_x3__513474983f.webp",
        engine: "2.0 л, дизель",
        mileage: 25000,
        city: "Дніпро",
        transmission: "автомат",
    },
    {
        brand: "Mercedes-Benz",
        model: "E-Class",
        year: 2019,
        price: 33000,
        image: "images/mercedes-benz_e-class__522083588f.webp",
        engine: "2.0 л, бензин",
        mileage: 28000,
        city: "Харків",
        transmission: "автомат",
    },
    {
        brand: "Mercedes-Benz",
        model: "GLC",
        year: 2020,
        price: 36000,
        image: "images/mercedes-benz_glc-class__515876884f.webp",
        engine: "2.5 л, гібрид",
        mileage: 20000,
        city: "Львів",
        transmission: "автомат",
    },
    {
        brand: "Toyota",
        model: "RAV4",
        year: 2020,
        price: 28000,
        image: "images/toyota_rav4__521706951f.webp",
        engine: "2.5 л, бензин",
        mileage: 28000,
        city: "Київ",
        transmission: "автомат",
    },
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2021,
        price: 30000,
        image: "images/toyota_corolla__522293872f.webp",
        engine: "1.8 л, гібрид",
        mileage: 22000,
        city: "Львів",
        transmission: "автомат",
    },
    {
        brand: "Honda",
        model: "Accord",
        year: 2020,
        price: 26000,
        image: "images/honda_accord__520697326f.webp",
        engine: "2.0 л, бензин",
        mileage: 25000,
        city: "Одеса",
        transmission: "автомат",
    },
];

const carList = document.querySelector(".car-list");
// Отримати унікальні марки та роки випуску з масиву автомобілів
const uniqueBrands = [...new Set(carsData.map((car) => car.brand))];
const uniqueYears = [...new Set(carsData.map((car) => car.year))];

// Отримати посилання на вибіркові списки в HTML
const brandFilter = document.getElementById("brandFilter");
const yearFilter = document.getElementById("yearFilter");

// Заповнити вибіркові списки унікальними марками та роками випуску
uniqueBrands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
});

uniqueYears.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
});
const priceFilterMin = document.getElementById("priceFilterMin");
const priceFilterMax = document.getElementById("priceFilterMax");
const mileageFilterMin = document.getElementById("mileageFilterMin");
const mileageFilterMax = document.getElementById("mileageFilterMax");
const transmissionFilter = document.getElementById("transmissionFilter");
const applyFiltersButton = document.getElementById("applyFilters");

function populateCarList() {
    // Отримати вибрані значення фільтрів
    const selectedBrand = brandFilter.value;
    const selectedYear = yearFilter.value;

    carList.innerHTML = "";
    carsData.forEach((car) => {
        // Додавання умов для фільтрації за обраними маркою і роком
        if (
            (selectedBrand === "all" || car.brand === selectedBrand) &&
            (selectedYear === "all" || car.year == selectedYear)
        ) {
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
        }
    });
}

function applyFilters() {
    const selectedBrand = brandFilter.value;
    const selectedYear = yearFilter.value;
    const selectedPriceMin = priceFilterMin.value;
    const selectedPriceMax = priceFilterMax.value;
    const selectedMileageMin = mileageFilterMin.value;
    const selectedMileageMax = mileageFilterMax.value;
    const selectedTransmission = transmissionFilter.value;

    const filteredCars = carsData.filter((car) => {
        return (
            (selectedBrand === "all" || car.brand === selectedBrand) &&
            (selectedYear === "all" || car.year == selectedYear) &&
            (selectedPriceMin === "" || car.price >= selectedPriceMin) &&
            (selectedPriceMax === "" || car.price <= selectedPriceMax) &&
            (selectedMileageMin === "" || car.mileage >= selectedMileageMin) &&
            (selectedMileageMax === "" || car.mileage <= selectedMileageMax) &&
            (selectedTransmission === "all" || car.transmission === selectedTransmission)
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