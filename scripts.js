const key = "5860b1a93e7cf83c6b5cdac5d906451e"




function colocarDadosNaTela(dados) {

    console.log(dados)
    document.querySelector(".max").innerHTML = "Max " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".min").innerHTML = "Min " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".cidade").innerHTML = (dados.name)
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsão").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}