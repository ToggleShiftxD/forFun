
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
    console.log(parseInt(toDot))
    if (parseInt(toDot) < 25.6) {
        responseEl.innerHTML = `<span style="color: red">Neigiamas</span>`
    } else if (parseInt(toDot) >= 25.6 && parseInt(toDot) <= 35.1) {
        responseEl.textContent = "Ribinis"
    } else if (parseInt(toDot) > 35.1) {
        responseEl.innerHTML = `<span style="color: green">Teigiamas</span>`
    }
}

console.log(50 > 25.6)

