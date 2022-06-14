function validarFormulario(){
    console.log(document.getElementById("nome").value)
    var cep = document.getElementById("cep").value
    if(cep.length !== 8){
        console.log("CEP não valido")
        alert("CEP não Valido")
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response =>{response.json()
    .then(data => {
        if(data.error){
            alert("CEP não valido")
        }
        document.getElementById("bairro").value = data.bairro
        document.getElementById("rua").value = data.logradouro
        document.getElementById("cidade").value = data.localidade
        document.getElementById("estado").value = data.uf
    })
    })

}