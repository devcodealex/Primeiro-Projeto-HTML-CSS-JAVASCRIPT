let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocaNaTela(dados) {

    document.querySelector(".cidade").innerHTML="Tempo em "+dados.name
    document.querySelector(".temp").innerHTML=Math.floor(dados.main.temp)+"°"
    document.querySelector(".descricao").innerHTML=dados.weather[0].description
    document.querySelector(".umidade").innerHTML="Umidade "+dados.main.humidity+"%"
    document.querySelector(".icone").src="http://openweathermap.org/img/wn/"+dados.weather[0].icon+".png"

    console.log(dados)
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())
    colocaNaTela(dados)

}



function cliqueiNoBotao() {

    let cidade = document.querySelector(".nomeCidade").value
    console.log(cidade)

    buscarCidade(cidade)



}