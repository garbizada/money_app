class Despesa{

  constructor(ano,mes,dia,tipo,descricao,valor){
    
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor


  }


  validarDados(){
    for(let i in this) {
      if(this[i] == undefined || this[i] == '' || this[i] == null) {
        return false
      }
    }
    return true
  }


}

class Bd {

  constructor(){
    let id = localStorage.getItem('id')

    if(id === null){
      localStorage.setItem('id', 0)
    }
  }

  getProximoId(){
    let proximoId = localStorage.getItem('id')
    return parseInt(proximoId) + 1
  }

  gravar(d) {
    let id = this.getProximoId()

    localStorage.setItem(id, JSON.stringify(d))


    localStorage.setItem('id',id)
  }

  recuperarTodosRegistros(){

    let despesas = Array()


    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++){
      
      let despesa = JSON.parse(localStorage.getItem(i))

      if (despesa === null) {
        continue
      }

      despesas.push(despesa)
    }
    return despesas
  }

  pesquisar(despesa) {
    console.log(despesa)
  }



}

let bd = new Bd()



function cadastrardespesa(){
  
  let ano = document.getElementById(`ano`)
  let mes = document.getElementById(`mes`)
  let dia = document.getElementById(`dia`)
  let tipo = document.getElementById(`tipo`)
  let descricao = document.getElementById(`descricao`)
  let valor = document.getElementById(`valor`)


  let despesa = new Despesa (ano.value, mes.value, dia.value, tipo.value,
     descricao.value, valor.value ) 
  

  if(despesa.validarDados()){
    bd.gravar(despesa)

    


    $('#sucessoGravacao').modal('show')

    ano.value = ''
    mes.value = ''
    dia.value = ''
    tipo.value = ''
    descricao.value = ''
    valor.value = ''
    



  }else {

<<<<<<< HEAD
  
=======
   
>>>>>>> 0ce34ead8f174bf2161ae86df2438222aa99e31d



    $('#erroGravacao').modal('show')
    
  }
  
}

function carregaListaDespesas() {
  let despesas = Array()

  despesas = bd.recuperarTodosRegistros()

  console.log(despesas)

  let listaDespesas = document.getElementById('lista_consulta_d')

  despesas.forEach(function(d) {

    let linha = lista_consulta_d.insertRow()

    linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
  

    switch(d.tipo) {
      case '1': d.tipo = 'Alimentacao'
        break
      case '2': d.tipo = 'Educacao'
        break
      case '3': d.tipo = 'Lazer'
        break
      case '4': d.tipo = 'Saude'
        break
      case '5': d.tipo = 'Transporte'
        break
    }

    linha.insertCell(1).innerHTML = d.tipo
    linha.insertCell(2).innerHTML = d.descricao
    linha.insertCell(3).innerHTML = d.valor
  
  
  
  })

}

function pesquisarDespesa() {
<<<<<<< HEAD
  let ano = document.getElementById('ano').value
  let mes = document.getElementById('mes').value
  let dia = document.getElementById('dia').value
  let tipo = document.getElementById('tipo').value
  let descricao = document.getElementById('descricao').value
  let valor = document.getElementById('valor').value

=======
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value



    let despesa = new Despesa(ano, mes, dia, tipo, descricao,  valor)

    bd.pesquisar(despesa)
>>>>>>> 0ce34ead8f174bf2161ae86df2438222aa99e31d
}
