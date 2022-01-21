let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log( count + " - ")
    saveEl.textContent +=  count + " - "
    //saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}
function reset() {
    saveEl.textContent =  "Previous entries: "
    //saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}
