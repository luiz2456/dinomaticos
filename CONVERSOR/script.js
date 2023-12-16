let botao = document.getElementById("calcular")


botao.addEventListener("click", function(event){
    event.preventDefault()

    let res = document.getElementById("resposta")
    let medidaatual = document.querySelector("#medatu")
    let convertido = document.querySelector("#conversor")
    let numero = Number(document.querySelector("#numero").value)

    if(medidaatual.value == "km" && convertido.value == "cvt_hm"){
        let conv = numero * 10
        res.innerHTML = `A conversão é: ${conv} hm`
    }
    else if(medidaatual.value == "km" && convertido.value == "cvt_dam"){
        let conv = numero * 100
        res.innerHTML = `A conversão é: ${conv} dam`
    }
    else if(medidaatual.value == "km" && convertido.value == "cvt_m"){
        let conv = numero * 1000
        res.innerHTML = `A conversão é: ${conv} m`
    }
    else if(medidaatual.value == "km" && convertido.value == "cvt_dm"){
        let conv = numero * 10000
        res.innerHTML = `A conversão é: ${conv} dm`
    }
    else if(medidaatual.value == "km" && convertido.value == "cvt_cm"){
        let conv = numero * 100000
        res.innerHTML = `A conversão é: ${conv} cm`
    }
    else if(medidaatual.value == "km" && convertido.value == "cvt_mm"){
        let conv = numero * 1000000
        res.innerHTML = `A conversão é: ${conv} mm`
    }

    if(medidaatual.value == "hm" && convertido.value == "cvt_km"){
        let conv = numero / 10
        res.innerHTML = `A conversão é: ${conv} km`
    }
    else if(medidaatual.value == "dam" && convertido.value == "cvt_km"){
        let conv = numero / 100
        res.innerHTML = `A conversão é: ${conv} km`
    }
    else if(medidaatual.value == "m" && convertido.value == "cvt_km"){
        let conv = numero / 1000
        res.innerHTML = `A conversão é: ${conv} km`
    }
    else if(medidaatual.value == "dm" && convertido.value == "cvt_km"){
        let conv = numero / 10000
        res.innerHTML = `A conversão é: ${conv} km`
    }
    else if(medidaatual.value == "cm" && convertido.value == "cvt_km"){
        let conv = numero / 100000
        res.innerHTML = `A conversão é: ${conv} km`
    }
    else if(medidaatual.value == "mm" && convertido.value == "cvt_km"){
        let conv = numero / 1000000
        res.innerHTML = `A conversão é: ${conv} km`
    }

    if(medidaatual.value == "hm" && convertido.value == "cvt_dam"){
        let conv = numero * 10
        res.innerHTML = `A conversão é: ${conv} dam`
    }
    else if(medidaatual.value == "hm" && convertido.value == "cvt_m"){
        let conv = numero * 100
        res.innerHTML = `A conversão é: ${conv} m`
    }
    else if(medidaatual.value == "hm" && convertido.value == "cvt_dm"){
        let conv = numero * 1000
        res.innerHTML = `A conversão é: ${conv} dm`
    }
    else if(medidaatual.value == "hm" && convertido.value == "cvt_cm"){
        let conv = numero * 10000
        res.innerHTML = `A conversão é: ${conv} cm`
    }
    else if(medidaatual.value == "hm" && convertido.value == "cvt_mm"){
        let conv = numero * 100000
        res.innerHTML = `A conversão é: ${conv} mm`
    }

    if(medidaatual.value == "dam" && convertido.value == "cvt_hm"){
        let conv = numero / 10
        res.innerHTML = `A conversão é: ${conv} hm`
    }
    else if(medidaatual.value == "dam" && convertido.value == "cvt_m"){
        let conv = numero * 10
        res.innerHTML = `A conversão é: ${conv} m`
    }
    else if(medidaatual.value == "dam" && convertido.value == "cvt_dm"){
        let conv = numero * 100
        res.innerHTML = `A conversão é: ${conv} dm`
    }
    else if(medidaatual.value == "dam" && convertido.value == "cvt_cm"){
        let conv = numero * 1000
        res.innerHTML = `A conversão é: ${conv} cm`
    }
    else if(medidaatual.value == "dam" && convertido.value == "cvt_mm"){
        let conv = numero * 10000
        res.innerHTML = `A conversão é: ${conv} mm`
    }

    if(medidaatual.value == "m" && convertido.value == "cvt_dam"){
        let conv = numero / 10
        res.innerHTML = `A conversão é: ${conv} dam`
    }
    else if(medidaatual.value == "m" && convertido.value == "cvt_hm"){
        let conv = numero / 100
        res.innerHTML = `A conversão é: ${conv} hm`
    }
    else if(medidaatual.value == "m" && convertido.value == "cvt_dm"){
        let conv = numero * 10
        res.innerHTML = `A conversão é: ${conv} dm`
    }
    else if(medidaatual.value == "m" && convertido.value == "cvt_cm"){
        let conv = numero * 100
        res.innerHTML = `A conversão é: ${conv} cm`
    }
    else if(medidaatual.value == "m" && convertido.value == "cvt_mm"){
        let conv = numero * 1000
        res.innerHTML = `A conversão é: ${conv} mm`
    }

    if(medidaatual.value == "dm" && convertido.value == "cvt_hm"){
        let conv = numero / 1000
        res.innerHTML = `A conversão é: ${conv} hm`
    }
    else if(medidaatual.value == "dm" && convertido.value == "cvt_dam"){
        let conv = numero / 100
        res.innerHTML = `A conversão é: ${conv} dam`
    }
    else if(medidaatual.value == "dm" && convertido.value == "cvt_m"){
        let conv = numero / 10
        res.innerHTML = `A conversão é: ${conv} m`
    }
    else if(medidaatual.value == "dm" && convertido.value == "cvt_cm"){
        let conv = numero * 10
        res.innerHTML = `A conversão é: ${conv} cm`
    }
    else if(medidaatual.value == "dm" && convertido.value == "cvt_mm"){
        let conv = numero * 100
        res.innerHTML = `A conversão é: ${conv} mm`
    }

    if(medidaatual.value == "cm" && convertido.value == "cvt_hm"){
        let conv = numero / 10000
        res.innerHTML = `A conversão é: ${conv} hm`
    }
    else if(medidaatual.value == "cm" && convertido.value == "cvt_dam"){
        let conv = numero / 1000
        res.innerHTML = `A conversão é: ${conv} dam`
    }
    else if(medidaatual.value == "cm" && convertido.value == "cvt_m"){
        let conv = numero / 100
        res.innerHTML = `A conversão é: ${conv} m`
    }
    else if(medidaatual.value == "cm" && convertido.value == "cvt_dm"){
        let conv = numero / 10
        res.innerHTML = `A conversão é: ${conv} dm`
    }
    else if(medidaatual.value == "cm" && convertido.value == "cvt_mm"){
        let conv = numero * 10
        res.innerHTML = `A conversão é: ${conv} mm`
    }

    if(medidaatual.value == "mm" && convertido.value == "cvt_hm"){
        let conv = numero / 100000
        res.innerHTML = `A conversão é: ${conv} hm`
    }
    else if(medidaatual.value == "mm" && convertido.value == "cvt_dam"){
        let conv = numero / 10000
        res.innerHTML = `A conversão é: ${conv} dam`
    }
    else if(medidaatual.value == "mm" && convertido.value == "cvt_m"){
        let conv = numero / 1000
        res.innerHTML = `A conversão é: ${conv} m`
    }
    else if(medidaatual.value == "mm" && convertido.value == "cvt_dm"){
        let conv = numero / 100
        res.innerHTML = `A conversão é: ${conv} dm`
    }
    else if(medidaatual.value == "mm" && convertido.value == "cvt_cm"){
        let conv = numero / 10
        res.innerHTML = `A conversão é: ${conv} cm`
    }
})