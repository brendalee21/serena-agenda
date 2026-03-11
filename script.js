
let clientes = []
let agenda = []


function login(){

document.getElementById("loginScreen").style.display="none"
document.getElementById("app").classList.remove("hidden")

}


function showSection(sec){

document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"))

document.getElementById(sec).classList.remove("hidden")

document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"))

event.target.classList.add("active")

}



function addCliente(){

let nome = document.getElementById("nome").value

if(nome=="") return

clientes.push(nome)

updateClientes()

document.getElementById("nome").value=""

}



function updateClientes(){

let lista = document.getElementById("listaClientes")

lista.innerHTML=""

clientes.forEach(c=>{

let li = document.createElement("li")

li.innerText = c

lista.appendChild(li)

})

document.getElementById("totalClientes").innerText = clientes.length

}



function buscarCliente(){

let busca = document.getElementById("busca").value.toLowerCase()

let itens = document.querySelectorAll("#listaClientes li")

itens.forEach(i=>{

i.style.display = i.innerText.toLowerCase().includes(busca) ? "block" : "none"

})

}



function addSessao(){

let nome = document.getElementById("clienteSessao").value

let data = document.getElementById("dataSessao").value

if(nome=="" || data=="") return

agenda.push({nome,data})

updateAgenda()

}



function updateAgenda(){

let lista = document.getElementById("listaAgenda")

lista.innerHTML=""

agenda.forEach(a=>{

let li = document.createElement("li")

li.innerText = a.nome + " - " + a.data

lista.appendChild(li)

})

document.getElementById("mes").innerText = agenda.length
document.getElementById("semana").innerText = agenda.length

}



function salvarProntuario(){

let texto = document.getElementById("textoProntuario").value

localStorage.setItem("prontuario",texto)

alert("Prontuário salvo com sucesso")

}



window.onload = function(){

let texto = localStorage.getItem("prontuario")

if(texto){

document.getElementById("textoProntuario").value = texto

}

}