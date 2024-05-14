function guardarDatos(){
    const Miformulario=document.getElementById('Formulario')
    const DatosDelFormulario ={
        username: Miformulario.username.value,
        password: Miformulario.password.value,

    }

    
const datos= JSON.stringify(DatosDelFormulario)

localStorage.setItem("matecitos", datos)

}
       
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
 
button.addEventListener('click', guardarDatos)

button.addEventListener('click', (e)=>{
    e. preventDefault()
   
    const data ={
        
        username: username.value,
      password: password.value, }
      let enviado = "Formulario Enviado"
      alert("formulario Enviado"),
    
    
 

    console.log(data)



    

}
)