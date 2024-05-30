const input = document.querySelector(`.input`);
const div = document.querySelector(`div`);


function gettable(){
    div.innerHTML = ``

    for (let i = 1; i <= 10; i++){
        console.log(`${input.value} x ${i} = ${input.value*i}`);
        div.innerHTML += `<h1>${input.value} x ${i} = ${input.value*i}</h1>`
        
    }
    input.value =  ``
    
}
