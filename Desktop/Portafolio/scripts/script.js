let menuvisible = false;

//para ocultar y mostrar el menu en pantalla chica

function mostrarocultarmenu(){
    if (menuvisible){

        document.getElementById("nav").classList="";
        menuvisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuvisible = true;
    }

}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuvisible = false;
}

//aplica las animaciones para las habilidades
function efectohabilidades(){
var skills =document.getElementById("skills");
var distancia_skills = Window.innerHeigth - skills.getBoundingClientRect().top;
if(distancia_skills >= 300){
    let habilidades =document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("sql");
    habilidades[3].classList.add("java");
    habilidades[4].classList.add("phyton");
    habilidades[5].classList.add("ilustraitor");
    habilidades[6].classList.add("coreldraw");
    habilidades[7].classList.add("photoshop");
    habilidades[8].classList.add("adobexd");
    habilidades[9].classList.add("animate");
    habilidades[10].classList.add("blender");
    habilidades[11].classList.add("git");
    habilidades[12].classList.add("clipstudio");
    habilidades[13].classList.add("wordpress");
    habilidades[14].classList.add("comunicacion");
    habilidades[15].classList.add("trabajo");
    habilidades[16].classList.add("creatividad");
    habilidades[17].classList.add("dedicacion");
    habilidades[18].classList.add("proyect");
    habilidades[19].classList.add("cumplimiento");
}
}


//detectar la animacion del scrolling
window.onscroll = function(){
    efectohabilidades();
}