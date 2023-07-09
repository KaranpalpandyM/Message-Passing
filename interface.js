(function(){
    const form =document.querySelector("#messageform")

    form.addEventListener('submit',function(e){
        e.preventDefault()

        const message = document.querySelector('#message')
        const alerts = document.querySelector('.alerts')
        const result = document.querySelector('.result')

        if(message.value === ''){
            alerts.classList.add('show')
            setTimeout(function(){
               alerts.classList.remove('show')
            },4000)
        }else
        {
            result.textContent =message.value
            message.value = ''
        }
    })

})()