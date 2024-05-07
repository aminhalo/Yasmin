
// JS Proyecto Integrado Yasmin El Halouani


// HOME

// MENU HAMBURGUESA

function abrirMenu(){
	document.getElementById("menuHamburguesa").style.left = "0px";
	// document.getElementById("menuHamburguesa").style.opacity = "0";

}

function cerrarMenu(){
	document.getElementById("menuHamburguesa").style.left = "-100%";
	// document.getElementById("menuHamburguesa").style.opacity  = "1";
}


// SLIDER

let counter = 1

setInterval(()=>{

    document.querySelector('.autosliderimg.show').classList.remove('show')
    const img = document.querySelector(`.img-${counter}`)
    img.classList.add('show')
    counter++

    if(counter >4){
        counter = 1
    }

},3000)



// ACCORDEON

function readyAccordeon(){

	let titols = document.getElementsByClassName("titolsItemAcc");
	for (let i = 0; i < titols.length; i++) {
			titols[i].addEventListener("click", unfoldFoldAcc);
		}
}

function unfoldFoldAcc(){
	// console.log(event.currentTarget.nextElementSibling);
	event.currentTarget.nextElementSibling.classList.toggle("accHeight");
}


