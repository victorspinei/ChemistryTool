const inputElement = document.getElementById("inputElement");
const outputElement = document.getElementById("outputElement");
const buttonElement = document.getElementById("buttonElement");

let AllElements = []

async function fetchAndSave() {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/all");
        const data = await response.json();
        AllElements = data; // Assuming AllElements is defined outside this function

        // Now you can use AllElements here or return it, depending on your needs
    } catch (error) {
        console.error("Error getting the elements: ", error);
    }
}

async function fetchData() {
    await fetchAndSave()
    buttonElement.addEventListener('click', function(){
        const value = inputElement.value
        if (!value) return;


        const elements = parseChemicalFormula(value);

        
        let sum = 0.00;

        for (let symbol in elements) {
            let element = findElement(symbol);

            // if (!element) {
            //     outputElement.value = "Error";
            //     return;
            // }
            try {
                sum += parseFloat(element['atomic_weight']) * elements[symbol];
            } catch (error) {
                sum += 0;
            }
        }

        outputElement.value = sum.toFixed(2) + " g/mol" 
    });
    function findElement(symbol) {
        for (let i = 0; i < AllElements.length; i++) {
            if (symbol === AllElements[i]['symbol']) {
                return AllElements[i];
            }
        } 
        return null;
    }
    const buttons = document.querySelectorAll('.e')
    const modal = document.querySelector('#myModal');


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let symbol = btn.querySelector('abbr').innerText

            const element = findElement(symbol)

            let head = element['name']
            
            let html = `<p class="text-secondary">Atomic Number: <span class="fw-bold text-light">${element['atomic_number']}</span></p>
            <p class="text-secondary">Atomic Weight: <span class="fw-bold text-light">${element['atomic_weight']}</span></p>
            <p class="text-secondary">Electron Configuration: <span class="fw-bold text-light">${element['electron_configuration']}</span></p>
            <p class="text-secondary">Group: <span class="fw-bold text-light">${element['group']}</span></p>
            <p class="text-secondary">Period: <span class="fw-bold text-light">${element['period']}</span></p>
            <p class="text-secondary">Block: <span class="fw-bold text-light">${element['block']}</span></p>
            <p class="text-secondary">Category: <span class="fw-bold text-light">${element['category']}</span></p>`

            modal.querySelector(".modal-title").innerHTML = head;
            modal.querySelector(".modal-body").innerHTML = html;
        })
        modal.addEventListener('shown.bs.modal', () => {
            btn.focus()
        })
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

fetchData()

function parseChemicalFormula(formula) {
  const regex = /([A-Z][a-z]*)(\d*)/g;
  let elements = {};
  let match;

  while ((match = regex.exec(formula)) !== null) {
    const element = match[1];
    const count = match[2] === "" ? 1 : parseInt(match[2], 10);
    if (elements[element]) {
      elements[element] += count;
    } else {
      elements[element] = count;
    }
  }

  return elements;
}

