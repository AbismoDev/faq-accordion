const showResponse = (divId, iconId) =>{
    let res = document.getElementById(divId)
    let icon = document.getElementById(iconId)

    //aqui verificamos se a lista de classes da div em questão tem ou não uma classe com o nome "hidden"
    if(res.classList.contains('hidden')){
        res.classList.remove('hidden')
        res.classList.add('show')
        icon.src = 'assets/images/icon-minus.svg'
        icon.alt = 'icon minus'
    }else{
        res.classList.remove('show')
        res.classList.add('hidden')
        icon.src = 'assets/images/icon-plus.svg'
        icon.alt = 'icon plus'
    }
}