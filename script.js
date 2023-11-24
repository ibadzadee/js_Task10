// ------------------------------------------------------------- 1 -------------------------------------------------------------

// let body = document.querySelector("body")

// let divYaslilar = document.createElement("div")
// let divBoyukler = document.createElement("div")
// let divKicikler = document.createElement("div")
// let radioYaslilar = document.createElement("input")
// let readioBoyukler = document.createElement("input")
// let radioKicikler = document.createElement("input") 
// let btn = document.createElement("button")

// btn.innerText = "Add"

// body.append(divBoyukler )
// body.append(divYaslilar)
// body.append(divKicikler)
// body.append(btn)

// divBoyukler.innerText = "Boyukler ucun"
// divKicikler.innerText = "Kicikler ucun"
// divYaslilar.innerText = "Yaslilar ucun"

// radioYaslilar.type= "radio"
// radioKicikler.type= "radio"
// readioBoyukler.type = "radio"

// radioYaslilar.value = "yaslilar ucun"
// radioKicikler.value = "kicikler ucun"
// readioBoyukler.value = "boyukler ucun"

// radioYaslilar.name = "radio"
// radioKicikler.name = "radio"
// readioBoyukler.name = "radio"

// radioYaslilar.innerText = "yaslilar ucun"
// radioKicikler.innerText = "kicikler ucun"
// readioBoyukler.innerText = "boyukler ucun"


// divKicikler.append(radioKicikler)
// divBoyukler.append(readioBoyukler)
// divYaslilar.append(radioYaslilar)

// btn.addEventListener("click" , ()=>{
//     let radio = document.querySelector("input[name='radio']:checked")
//     console.log(radio.value)
// })

// ------------------------------------------------------------- 2 -------------------------------------------------------------

let body = document.querySelector("body")
let input = document.createElement("input")
let btnClose = document.createElement("button")
let btnOpen = document.createElement("button")

input.type = "text" 
btnClose.innerText = "Close"
btnOpen.innerText = "Open"

body.append(input);
body.append(btnClose);
body.append(btnOpen);

btnOpen.setAttribute('disabled' , false);

btnClose.addEventListener("click" , ()=>{
    btnClose.setAttribute('disabled' , true);
    btnOpen.removeAttribute('disabled');
    input.setAttribute('readonly', true);
})

btnOpen.addEventListener("click" , ()=>{
    btnOpen.setAttribute('disabled' , true);
    btnClose.removeAttribute('disabled');
    input.removeAttribute('readonly');
})