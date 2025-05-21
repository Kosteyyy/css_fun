const DAYS_FOR_WEEK = 7;
const WEEKS_PER_YEAR = 52;
const graphElement = document.querySelector(".graph");
console.log("START CODING", graphElement);
const valueVariants = [0, 0, 0, 0, 3, 3, 5, 10];

const createNewLiElement = (value) => {
    const randomIndex = randomValue();

    const element = document.createElement("li");
    element.classList.add("square");
    element.setAttribute("data-value", valueVariants[randomIndex]);
    // console.log("🚀 ~ newLiElement ~ element:", element, randomIndex);
    return element;
};

const createNewUlElement = () => {
    const element = document.createElement("ul");
    for (let i = 0; i < DAYS_FOR_WEEK; i++) {
        element.appendChild(createNewLiElement());
    }
    // console.log("🚀 ~ createNewUlElement ~ element:", element)
    return element;
};

const fillGraph = () => {
    for (let week = 0; week < WEEKS_PER_YEAR; week++) {
        graphElement.appendChild(createNewUlElement());
    }
};

const randomValue = () => Math.floor(Math.random() * valueVariants.length);

fillGraph();
