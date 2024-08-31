const copyBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');


copyBtn.addEventListener("click", () => {
    textarea.select();
    let textValue = textarea.value;
    let h2 = document.createElement("h2");

    if (textValue.trim() === '') {
        alert("Please type")
    } else {
        navigator.clipboard.writeText(textValue);
        copyBtn.innerText = "Copied";
    
        setTimeout(() => {
        copyBtn.innerText = "Copy";
        }, 2000)   
    }
})