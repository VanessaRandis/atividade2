


function verificador(){
    var nIdade= window.document.getElementById('ano')
    var nIdade = Number(nIdade.value)
    var data= new Date()
    var anoAtual= data.getFullYear()
    var idade = anoAtual - nIdade
    var sexo= window.document.getElementsByName('radsex')
    var genero = ''
    var img = window.document.getElementById('foto')
     
    if(idade < 0 || nIdade === 0){
        window.alert('Verifique os ano inserido, pois não confere')
    }else if(sexo[0].checked){
        genero='masculino'
            if(idade >=0 && idade <= 2){
                
                img.src='imagens/bebe-menino.png'
                document.body.style.background= '#7FFFD4'
            }else if(idade > 2 && idade <=16){
                
                img.src='imagens/menino-crianca.png'
                document.body.style.background= '#7B68EE'
            } else if(idade > 16 && idade <=60) {
                
                img.src='imagens/homem-adulto.png'
                document.body.style.background= '#6B8E23'
            }else if(idade > 60 && idade <= 120) {
                
                img.src='imagens/senhor.png'
                document.body.style.background= '#808000'
            }else {
                img.src='imagens/caveira.png'
                document.body.style.background= '#C0C0C0'
            }
    }else if(sexo[1].checked){
        genero='feminino'
            if(idade >= 0 && idade <= 2){
                
                img.src='imagens/bebe-menina.png'
                document.body.style.background= '#FFB6C1'
            }else if(idade > 2 && idade <= 16){
                
                img.src='imagens/menina-crianca.png'
                document.body.style.background= '#FF69B4'
            } else if(idade > 16 && idade <= 60) {
                
                img.src='imagens/mulher-adulta.png'
                document.body.style.background= '#DB7093'
            }else if (idade > 60 && idade <= 120){
                
                img.src='imagens/senhora.png'
                document.body.style.background= '#E9967A'
            }else {
                img.src='imagens/caveira.png'
                document.body.style.background= '#C0C0C0'
            }
    
}
    res.innerHTML = `Essa pessoa é do sexo ${genero} e tem ${idade} 'anos`


}

