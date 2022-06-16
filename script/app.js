
//Loader Spinner

/*
const video = document.querySelector('video');
video.currentTime = 3;
video.addEventListener('mouseover', () => {

  video.play()
})

video.addEventListener('mouseleave', () => {

  video.pause()
})
*/


window.addEventListener("load", () => {
  let containerSpinner = document.querySelector(".container-spinner");
  containerSpinner.style.display = "none";
  document.body.style.overflow = 'visible';
  
});
document.body.style.overflow = 'hidden';






//Menu Hamburguesa
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".link-Container");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  links.classList.toggle("active");
});

//AL momento de dar click se sale
links.addEventListener("click", () => {
  links.classList.toggle("active");
});

//Back On top

const up = document.querySelector(".container-up");
up.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

//SVG LOGO
const logoHome = document.querySelector("nav svg");
logoHome.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});



//Form

const $form = document.querySelector("#form");


$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault()
     
     const email = document.querySelector("#email").value;
     const name = document.querySelector("#name").value;
     const subject = document.querySelector("#subject").value;
     const message = document.querySelector("#message").value;
     
     
     if (email && /(^\w.*@\w+\.\w)/.test(email)) {
      
      $form.reset();
      
      setTimeout(() => {
        let modalSuccessForm = document.querySelector('.successfullForm');
        modalSuccessForm.style.display = 'block';

      }, 1000);
      setTimeout(() => {
        let modalSuccessForm = document.querySelector('.successfullForm');
        modalSuccessForm.style.display = 'none';
        
      }, 4000);
    }
  else{
       e.preventDefault();
       document.querySelector('#name').style.border = '2px solid red';
       document.querySelector('#subject').style.border = '2px solid red';
       document.querySelector('#email').style.border = '2px solid red';
       document.querySelector('#message').style.border = '2px solid red'


             
      setTimeout(() => {
        let error = document.querySelector('.error');
        error.style.display = 'block';

      }, 1000);
      setTimeout(() => {
        let error = document.querySelector('.error');
        error.style.display = 'none';
        
      }, 4000);
  }

  
}

/*
const $esp = document.querySelector('.esp');
const $eng = document.querySelector('.eng');
*/




const checkBox = document.querySelector('#checkbox');


//Selectors to change

//nav
let $inicioLang = document.querySelector('.inicioLang');
let $sobreLang = document.querySelector('.sobreLang');
let $habilidadesLang = document.querySelector('.habilidadesLang');
let $proyectosLang = document.querySelector('.proyectosLang');
let $contactLang = document.querySelector('.contactLang');

//Switch
//let $englishLang = document.querySelector('.englishLang');
//let $spanishLang = document.querySelector('.spanishLang');

//content home
let $saludoLang = document.querySelector('.saludoLang');
let $puestoLang = document.querySelector('.puestoLang');
let $contactameLang = document.querySelector('.contactameLang');

//skills
let $tecnologiasLang = document.querySelector('.tecnologiasLang');
let $softskillLang = document.querySelector('.softSkillLang');

//SoftSkills

let $resolucionLang = document.querySelector('.resolucionLang');
let $metodicoLang = document.querySelector('.metodicoLang');
let $creatividadLang = document.querySelector('.creatividadLang');
let $comunicacionLang = document.querySelector('.comunicacionLang');
let $equipoLang = document.querySelector('.equipoLang');
let $resilienciaLang = document.querySelector('.resilienciaLang');

//Contact
let $contactTitleLang = document.querySelector('.contactTitleLang');
let $contactMessageLang = document.querySelector('.contactMessageLang');
let $contactMessageSecondLang = document.querySelector('.contactMessageSecondLang')

let $fullNameLang = document.querySelector('.fullNameLang');
let $subjectLang = document.querySelector('.subjectLang');
let $emailLang = document.querySelector('.emailLang');
let $messageLang = document.querySelector('.messageLang');
let $submitLang = document.querySelector('.submitLang');



/*Data for translate */

let dataExchange = {
  english:{
    
    
    //Nav
    "inicio":"Home",
    "sobreMi":"About Me",
    "habilidades":"Skills",
    "proyectos":"Projects",
    "contacto":"Contact",

    //Content
    "saludo":"Hi! I'm",
    "puesto":"FrontEnd Developer",
    "contactame":"Contact Me",

    //SoftSkills

    "tecnology":"Skills Technologies",

    "softSkill": "Soft Skills",

    "resolucion":"Problem-Solving",
    "metodico":"Methodical",
    "creatividad":"Creativity",
    "comunicacion":"Communication",
    "equipo":"Teamwork",
    "resiliencia":"Resilience",

    //contact

    "contactTitle":"Contact",
    "contactMessage":"You can contact me by sending an email through my social networks.",
    "contactMessageSecond":"I look forward to your message!!",

    //
    "nameForm":"Full Name:",
    "subjectForm":"Subject:",

    "emailForm":"Email:",
    "messageForm":"Message:",
    "submitForm":"Send",







    
  },
  spanish:{

    
    // Nav
    "inicio":"Inicio",
    "sobreMi":"Sobre Mi",
    "habilidades":"Habilidades",
    "proyectos":"Proyectos",
    "contacto":"Contacto",
    
    //Content
    "saludo":"Hola! Soy",
    "puesto":"Desarrollador Web FrontEnd",
    "contactame":"Contáctame",

    //SoftSkills

    "tecnology":"Habilidades Tecnologias",
    "softSkill": "Habilidades Blandas",

    "resolucion":"Resolución Problemas",
    "metodico":"Metódico",
    "creatividad":"Creatividad",
    "comunicacion":"Comunicación",
    "equipo":"Trabajo en equipo",
    "resiliencia":"Resiliencia",
    
    //contact

    "contactTitle":"Contacto",
    "contactMessage":"Puedes contactarme enviando un mail o a través de mis redes sociales.",
    "contactMessageSecond":"¡Espero tu mensaje!",
    
    //
    "nameForm":"Nombre Completo:",
    "subjectForm":"Asunto:",
    
    "emailForm":"Correo:",
    "messageForm":"Mensaje:",
    "submitForm":"Enviar",
    
    

    


  },
};


console.log(dataExchange);


function changeLanguage(language){

  //nav
  $inicioLang.textContent = language.inicio;
  $sobreLang.textContent = language.sobreMi;
  $habilidadesLang.textContent = language.habilidades;
  $proyectosLang.textContent = language.proyectos;
  $contactLang.textContent = language.contacto;
  //content home
  $saludoLang.textContent = language.saludo;
  $puestoLang.textContent = language.puesto;
  $contactameLang.textContent = language.contactame;
  //Project
  $tecnologiasLang.textContent = language.tecnology;
  $softskillLang.textContent = language.softSkill;
  //Items
  $resolucionLang.textContent = language.resolucion;
  $metodicoLang.textContent = language.metodico;
  $creatividadLang.textContent = language.creatividad;
  $comunicacionLang.textContent = language.comunicacion;
  $equipoLang.textContent = language.equipo;
  $resilienciaLang.textContent = language.resiliencia;
  //Contact
  $contactTitleLang.textContent = language.contactTitle;
  $contactMessageLang.textContent = language.contactMessage;
  $contactMessageSecondLang.textContent = language.contactMessageSecond;

  $fullNameLang.textContent = language.nameForm;
  $subjectLang.textContent = language.subjectForm;
  $emailLang.textContent = language.emailForm;
  $messageLang.textContent = language.messageForm;
  $submitLang.textContent = language.submitForm;

}
//LocalStorage
/*
let espaniol = true
let pave = localStorage.setItem("Languages",espaniol );
console.log(pave);
*/

const languageText = document.querySelector('.languageText');
const esp = document.querySelector('.esp');
checkBox.addEventListener('click', () => {

  if(checkBox.checked){
   
   

  esp.classList.add('activeModal');
  languageText.textContent = 'English';
  setTimeout(() => {
    esp.classList.remove("activeModal");
  }, 500);
  //console.log(modalLanguage);
    let ingles = dataExchange.english;
   changeLanguage(ingles)

  }
  else{
    
   
    
    let espanol = dataExchange.spanish;
   
    changeLanguage(espanol);
    
    
    esp.classList.add('activeModal');
    languageText.textContent = languageText.dataset.language;
    
 
  setTimeout(() => {
    esp.classList.remove("activeModal");
  }, 500);
   
  }

    
  
      
});



const projectCard = document.querySelectorAll('.project-card');
console.log(projectCard);

const videos = document.querySelectorAll('video');
console.log(videos);

projectCard[0].addEventListener('mouseover', () => {
  videos[0].play();
});

projectCard[0].addEventListener('mouseleave', () => {
  videos[0].pause();
});

projectCard[1].addEventListener('mouseover', () => {
  videos[1].play();

});

projectCard[1].addEventListener('mouseleave', () => {
  videos[1].pause();
});

/*

//Efecto Hover de Card video 


const video = document.querySelector('.adviceGenerator');


projectCard.forEach( (item, index) => {
  item.addEventListener('mouseover', () => {
    console.log(item,index);
    video.currentTime = 3;
    video.play();
  })

  item.addEventListener('mouseleave', () => {
    console.log(item,index);
    video.pause();
  })
  
})

projectCard.addEventListener('click', () => {
  projectCard.forEach( (e, currentIndex) => { console.log(`Click de ${currentIndex}`) })
})
*/


































const btns = document.querySelector('.ntb'); 
//console.log(btns);
