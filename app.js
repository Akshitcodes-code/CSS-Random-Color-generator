let color = document.querySelector("#main-color-heading");
let generateBtn = document.querySelector("#generate-color");
let copyBtn = document.querySelector("#copy-code");
let hexCode = document.querySelector("#Hex-code")

function getRandomHexColor(){
  const randomInt = Math.floor(Math.random() * 16777216);
  const hex = randomInt.toString(16).padStart(6, '0');
  return `#${hex}`;
}



generateBtn.addEventListener("click",() =>{
    const newColor = getRandomHexColor();
    color.style.backgroundColor = newColor;
    console.log(newColor);
    hexCode.innerText=newColor;
});

copyBtn.addEventListener("click",  async () =>{
    const textToCopy = hexCode.innerText;

    try{
        await navigator.clipboard.writeText(textToCopy);
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied!";
        
        setTimeout(() => {
        copyBtn.innerText = originalText;
        }, 2000);
    } catch (err) {
        console.error("Failed to copy hex code:", err);
    }
});

