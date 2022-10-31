import {pageHome} from './pageHome/pageHome.js'

const $ = document.querySelector.bind(document)

const somarMoreOne = ()=>{
    const element = $('#number')
    const moreOne = +element.innerText + 1
    element.innerHTML = moreOne
}

pageHome.initial()

$('#more-one').addEventListener('click', somarMoreOne)