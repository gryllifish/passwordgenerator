
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Populate select 
let selectEl = document.getElementById("menu")

for (let i = 4; i < 21; i++){
    let option = document.createElement("option")
    option.value = i
    option.text = i
    selectEl.appendChild(option)
}
// Guardar en variable selectedNumber el número seleccionado por usuario
let selectedNumber = 4 
selectEl.addEventListener("change", function() {
    // Obtener el valor seleccionado del menú desplegable
    selectedNumber = selectEl.value;
})

// Obtener el checkbox
let isChecked = false;
let checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", function(){
    isChecked = checkbox.checked
    console.log(isChecked)
})

// Obtener caracteres filtrados

const filteredCharacters = characters.filter(function(character) {
    return /^[a-zA-Z0-9]+$/.test(character);
  });
  

// Botón 
let buttonEl = document.getElementById("generate-el")
let passEl = document.getElementById("password-elOne")
//let passElTwo = document.getElementById("password-elTwo")

function generatePass(){
    let randomPassword = []
    //let randomPasswordTwo = []
    for (let i = 0; i < selectedNumber; i++){
        if (isChecked === false){ 
            let randomIndex = Math.floor(Math.random() * characters.length)
            //let randomIndexTwo = Math.floor(Math.random() * characters.length)
            let randomCharacter = characters[randomIndex]
            //let randomCharacterTwo = characters[randomIndexTwo]
            randomPassword.push(randomCharacter)
           // randomPasswordTwo.push(randomCharacterTwo)
    }
        else{
            let randomIndex = Math.floor(Math.random() * filteredCharacters.length)
            //let randomIndexTwo = Math.floor(Math.random() * filteredCharacters.length)
            let randomCharacter = filteredCharacters[randomIndex]
            //let randomCharacterTwo = filteredCharacters[randomIndexTwo]
            randomPassword.push(randomCharacter)
            //randomPasswordTwo.push(randomCharacterTwo)
        }
    passEl.textContent = randomPassword.join("")
    //passElTwo.textContent = randomPasswordTwo.join("")

}

}

// Copy on click
function copyOnClick(element) {
    element.addEventListener("click", function(){
      const textToCopy = element.innerText
      navigator.clipboard.writeText(textToCopy)
        .then(()=>{
          console.log("copiado" + textToCopy)
          const message = document.createElement("div");
          message.innerText = "Copied!";
          message.classList.add("message");
        
          element.appendChild(message);
          setTimeout(() => {
            message.remove();
          }, 3000);
        })
        .catch((error) => {
          console.error("error al copiar" + error)
        });
    });
  }
copyOnClick(passEl);
copyOnClick(passElTwo);
