export const util = {
    $: document.querySelector.bind(document),
    formatedValor: (value)=>{
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(value)
    }

} 