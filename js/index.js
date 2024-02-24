let personas = []
let $name = document.querySelector("#name")
let apellido = document.querySelector("#apellido")
let email = document.querySelector("#email")
let departamento = document.querySelector("#select-departamento")
let plantilla = document.querySelector("#plantilla")



const actualizarPlantilla = function(){
    plantilla.innerHTML = ""
    personas.forEach(function(elem){
        plantilla.innerHTML += `<p class="text-black bg-secondary w-75 p-2 rounded-3 text-center m-0"> ${elem.name} ${elem.apellido}</p>`
    })
}
const actualizarDepartamentos = function(){
    let markt = 0
    let it = 0
    let ventas = 0
    let admin = 0
    personas.forEach(function(elem){
        if(elem.departamento === "Marketing") markt++
        if(elem.departamento === "IT") it++
        if(elem.departamento === "Ventas") ventas++
        if(elem.departamento === "Administración") admin++
    })
    document.querySelector("#info-it").innerHTML = `${it} trabajador(es)`
    document.querySelector("#info-marketing").innerHTML = `${markt} trabajador(es)`
    document.querySelector("#info-ventas").innerHTML = `${ventas} trabajador(es)`
    document.querySelector("#info-administracion").innerHTML = `${admin} trabajador(es)`
    
}


document.querySelector("#enviar").addEventListener("click", () => {
    personas.push({name : $name.value, apellido : apellido.value, email : email.value, departamento: departamento.value})  
    actualizarPlantilla()
    actualizarDepartamentos()
    //resetear el aspecto
    $name.value = ""
    apellido.value=""
    departamento.selectedIndex = 0;

})




