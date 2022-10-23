const $ = document.querySelector.bind(document)

const somarMoreOne = ()=>{
    const element = $('#number')
    const moreOne = +element.innerText + 1
    element.innerHTML = moreOne
}

$('#more-one').addEventListener('click', somarMoreOne)