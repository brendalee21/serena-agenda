let clientes = JSON.parse(localStorage.getItem("clientes")) || []
let eventos = JSON.parse(localStorage.getItem("eventosLista")) || []

// LOGIN SIMPLES
function login(){
    document.getElementById("loginScreen").style.display="none"
    document.getElementById("app").classList.remove("hidden")
    atualizarTudo()
}

// NAVEGAÇÃO
function showSection(sec){
    document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"))
    document.getElementById(sec).classList.remove("hidden")

    document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"))
    event.target.classList.add("active")
}

// ================= CLIENTES =================

function addCliente(){
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    if(nome==="") return

    clientes.push({nome, telefone, email})

    localStorage.setItem("clientes", JSON.stringify(clientes))

    updateClientes()
    limparCamposCliente()
}

function limparCamposCliente(){
    document.getElementById("nome").value=""
    document.getElementById("telefone").value=""
    document.getElementById("email").value=""
}

function updateClientes(){
    let lista = document.getElementById("listaClientes")
    lista.innerHTML=""

    clientes.forEach((c,index)=>{
        let li = document.createElement("li")

        li.innerHTML = `
        ${c.nome} 
        <button onclick="removerCliente(${index})">❌</button>
        `

        lista.appendChild(li)
    })

    document.getElementById("totalClientes").innerText = clientes.length
}

function removerCliente(index){
    clientes.splice(index,1)
    localStorage.setItem("clientes", JSON.stringify(clientes))
    updateClientes()
}

function buscarCliente(){
    let busca = document.getElementById("busca").value.toLowerCase()
    let itens = document.querySelectorAll("#listaClientes li")

    itens.forEach(i=>{
        i.style.display = i.innerText.toLowerCase().includes(busca) ? "block" : "none"
    })
}

// ================= EVENTOS =================

function addSessao(){

    let cliente = document.getElementById("clienteSessao").value
    let data = document.getElementById("dataSessao").value
    let tipo = document.getElementById("tipoEvento").value
    let local = document.getElementById("localEvento").value
    let valor = document.getElementById("valorEvento").value
    let status = document.getElementById("statusEvento").value

    if(cliente==="" || data==="") return

    eventos.push({
        cliente,
        data,
        tipo,
        local,
        valor,
        status
    })

    localStorage.setItem("eventosLista", JSON.stringify(eventos))

    updateAgenda()
    atualizarDashboard()
    limparCamposEvento()
}

function limparCamposEvento(){
    document.getElementById("clienteSessao").value=""
    document.getElementById("dataSessao").value=""
    document.getElementById("localEvento").value=""
    document.getElementById("valorEvento").value=""
}

// LISTA DE EVENTOS
function updateAgenda(){

    let lista = document.getElementById("listaAgenda")
    lista.innerHTML=""

    eventos.forEach((e,index)=>{

        let li = document.createElement("li")

        li.innerHTML = `
        <strong>${e.cliente}</strong> - ${e.data} <br>
        Tipo: ${e.tipo} | Local: ${e.local} <br>
        💰 R$ ${e.valor} | Status: ${e.status}
        <button onclick="removerEvento(${index})">❌</button>
        `

        lista.appendChild(li)
    })
}

function removerEvento(index){
    eventos.splice(index,1)
    localStorage.setItem("eventosLista", JSON.stringify(eventos))
    updateAgenda()
    atualizarDashboard()
}

// ================= DASHBOARD =================

function atualizarDashboard(){

    let hoje = new Date()
    let semana = 0
    let mes = 0
    let faturamento = 0

    eventos.forEach(e=>{
        let dataEvento = new Date(e.data)

        let diff = (hoje - dataEvento) / (1000*60*60*24)

        if(diff <= 7) semana++
        if(dataEvento.getMonth() === hoje.getMonth()) mes++

        faturamento += Number(e.valor || 0)
    })

    document.getElementById("semana").innerText = semana
    document.getElementById("mes").innerText = mes
    document.getElementById("faturamento").innerText = "R$ " + faturamento
}

// ================= EVENTOS DETALHES =================

function salvarEventoCadastrado(){
    let texto = document.getElementById("textoEventos").value
    localStorage.setItem("detalhesEvento", texto)
    alert("Detalhes salvos com sucesso")
}

// ================= INIT =================

function atualizarTudo(){
    updateClientes()
    updateAgenda()
    atualizarDashboard()

    let texto = localStorage.getItem("detalhesEvento")
    if(texto){
        document.getElementById("textoEventos").value = texto
    }
}

window.onload = atualizarTudo

function gerarDadosFake(){
agenda = []
for(let i=0;i<5;i++){
    agenda.push({
        nome: "Cliente " + (i+1),
        data: "2026-03-19" + (10+i)
    })          
}

updateAgenda()
showSection("agenda")
document.getElementById("mes").innerText =
agenda.length
document.getElementById("semana").innerText = agenda.length

alert("Dados gerados com sucesso!")
}