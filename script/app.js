//Loader Spinner


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
          
          Email.send({
               Host: "smtp.gmail.com",
         Username: "davidazuaje1084@gmail.com",
         Password: `FCbarcelona01*`,
         To: "davidazuaje1084@gmail.com",
         From: document.querySelector("#email").value,
         Subject: `Contact from Personal Portfolio: Nombre: ${name}  Subject: ${subject}`,
         Body: `<b>The email:<b/> ${email}, 
                    name: ${name}
                    message: ${message}
                    
                    `,
       });
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

checkBox.addEventListener('click', () => {
  
  const esp = document.querySelector('.spanish');
  const eng = document.querySelector('.english');
  
  if(checkBox.checked){
    eng.classList.add('activenglish');
    esp.classList.remove('activespanish')

    /*
    setTimeout(() => {
      
      
     $eng.classList.add('activeModal');
    

      
      
    }, 200);
    setTimeout(() => {
      
     $esp.classList.remove('activeModal')
      
    }, 200);

    setTimeout(() => {
     
      $eng.classList.remove('activeModal')
 
      
    }, 1500);

    //alert('English');
  
  }
  else{ 
    //$esp.classList.toggle('activeModal');
    setTimeout(() => {
      
      
      $eng.classList.remove('activeModal');

    }, 200);
    setTimeout(() => {
      $esp.classList.add('activeModal');
    


    }, 200);

    setTimeout(() => {
      
      
      $esp.classList.remove('activeModal');

    }, 1500);
    //alert('Spanish');
    /*$
    $esp.style.visibility = 'visible'
    */
  }
  else{
    eng.classList.remove('activenglish');
    esp.classList.add('activespanish')
  }

    
  
      
})





































const btns = document.querySelector('.ntb'); 
console.log(btns);
