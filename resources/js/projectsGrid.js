// Projects Container
const projectElements = Array.from(document.getElementsByClassName("grid-item"));

const projectAnchors = Array.from(document.getElementsByClassName("grid-item-project"));

// Titles
const projectTitles = Array.from(document.getElementsByClassName("grid-item-title"));
// const projectTitles = document.getElementsByClassName("grid-item-title");
console.log(projectElements[0])
console.log(projectTitles[0])


projectElements.forEach((element, index) => {
    element.onmouseover = () => {
        projectAnchors[index].style.opacity = "0.5";
        projectTitles[index].style.display = "block";
    };
    element.onmouseleave = () => {
        projectAnchors[index].style.opacity = "";
        projectTitles[index].style.display = "";
    };
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
