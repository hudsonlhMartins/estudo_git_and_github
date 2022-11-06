import {pageHome} from './pageHome/pageHome.js'


import {util} from './utils/utils.js'
const $ = document.querySelector.bind(document)

const juros = ()=>{
    const number = $('#input_number').value
    const nF =( +number * 0.15).toFixed(1)
    const newNumber = Number(number) + Number(nF)
    const e  = util.formatedValor(newNumber)
    const p = document.createElement("p")
    p.innerText = `15% de R$ ${number} e ${e}`
    $('#outro').append('', p)

}
pageHome.initial()
$('#add').addEventListener('click', juros)
