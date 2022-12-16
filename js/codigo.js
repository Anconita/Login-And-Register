let visibilidad_password = document.querySelector('.Visibilidad_Password_Off');
let input_password = document.querySelector('.Input_Password');

visibilidad_password.addEventListener('click', () =>{
    if(input_password.type == 'password'){
        input_password.type = 'text';
        visibilidad_password.classList.add('fa-eye');
        visibilidad_password.classList.remove('fa-sharp');
        visibilidad_password.classList.remove('fa-eye-slash');
        visibilidad_password.setAttribute('id','Visibilidad_Password_On');

    }else{ 
        input_password.type = 'password';
        visibilidad_password.classList.remove('fa-eye');
        visibilidad_password.classList.add('fa-sharp');
        visibilidad_password.classList.add('fa-eye-slash');
        visibilidad_password.removeAttribute('id','Visibilidad_Password_On');
    }
     
    
        
    
});