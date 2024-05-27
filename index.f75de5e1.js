"use strict";
const populationList = [
    ...document.getElementsByClassName("population")
];
let total = 0;
populationList.forEach((population)=>{
    total += Number(population.textContent.replace(/,/g, ""));
});
const average = total / populationList.length;
document.querySelector(".average-population").innerText = average.toLocaleString("en-US");
document.querySelector(".total-population").innerText = total.toLocaleString("en-US");

//# sourceMappingURL=index.f75de5e1.js.map
