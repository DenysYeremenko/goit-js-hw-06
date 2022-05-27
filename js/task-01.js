let arrItem = document.querySelectorAll(".item")
console.log(`Number of categories: ${arrItem.length}`)
console.log("");
let categoryFunc = () => {
    for (let el of arrItem) {
        console.log(`Category: ${el.children[0].textContent}`);
        let list = el.children[1]
        let items = list.children
        console.log(`Elements: ${items.length}`);
        console.log("");
    }
}
categoryFunc()