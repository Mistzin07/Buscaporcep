document.addEventListener('DOMcontentLoad', ()=>{

    const url = 'https://cep.awesomeapi.com.br/json'
    const form = document.querySelector('.form')
    const infos = document.querySelector('.informaçoes')
    const mensagem = document.querySelector('')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const cep = document.querySelector('.cep').value
            const buscarCep = async  () =>{
                const getData = await fetch(url)
                const response = await getData.json ()
                console.log(response+cep)
                //console.log(response)
                console.log(typeof(cep))
                console.log(response+parseInt(cep).value)

                const container = document.createElement('p')
                const ibge = document.createElement('p')
                const ddd = document.createElement('p')

                container.innerHTML = `${response.address_type}: ${response.address_name}, ${response.distritc}, ${responsecity} - ${response.state}`
                ibge.innerHTML = `código IBGE do município: ${response.city_ibge}`
                ddd.innerHTML = `DDD: ${response.ddd}`

                
                infos.appenChild(container)
                infos.appenChild(ibge)
                infos.appenChild(ddd)
 
            }
            buscarCep().then(()=>{
                mensagem.innerHTML = 'busca realizada com sucesso'
            }).catch((error)=>{
                mensagem.innerHTML = 'algo deu errado, por favor verifique o cep inserido'
                mensagem.classList.add('erro')
            })


    })
})
