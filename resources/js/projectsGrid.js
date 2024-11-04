// Projects Container
const projectElements = document.getElementsByClassName("grid-item");

// Opacity on Mouse Over
Array.from(projectElements).forEach(element => {
    element.onmouseover = (event) => {
        event.target.style.opacity = "0.6";
    };
    element.onmouseleave = (event) => {
        event.target.style.opacity = "";
    }
}); 

// const projectsDiv = document.getElementById("projects");

// // Get Element Children
// const projectChildren = projectsDiv.children;

// // Indexes Array
// const indexArray = [...Array(projectChildren.length).keys()];

// const shuffleArray = (array) => {
//     let arrayIndex = array.length;

//     // Fisher–Yates (aka Knuth) Shuffle
//     while (arrayIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * arrayIndex);
//         arrayIndex--;
//         // Replace Item with Random Item
//         [array[arrayIndex], array[randomIndex]] = [array[randomIndex], array[arrayIndex]];
//     }
// }

// shuffleArray(indexArray);

// console.log(indexArray)
// // console.log(shuffledIndexes)
