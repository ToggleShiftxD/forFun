
const responseEl = document.getElementById("responseEl")
const resultInputBox = document.getElementById("resultInputBox")
const checkResultsBtn = document.getElementById("checkResultsBtn")

checkResultsBtn.addEventListener("click", function() {
    
    commaToDot()
    
    positiveOrNegativeResultChecker()
    
    resultInputBox.value = ""

    
})

toDot = ""
function commaToDot() {
    
    // converts all commas to dots
    toDot = resultInputBox.value.replace(/,/g, '.')

}

function positiveOrNegativeResultChecker() {
    if (parseFloat(toDot) < 25.6) {
        responseEl.innerHTML = `<span style="color: red">Neigiamas</span>`
    } else if (parseFloat(toDot) >= 25.6 && parseFloat(toDot) <= 35.1) {
        responseEl.textContent = "Ribinis"
    } else if (parseFloat(toDot) > 35.1) {
        responseEl.innerHTML = `<span style="color: green">Teigiamas</span>`
    }
}

console.log(25.6 * 10)

test = "10.5"
console.log(parseFloat(test))
