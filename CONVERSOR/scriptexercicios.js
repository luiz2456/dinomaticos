botaoQuestao1 = document.querySelector("#botao-questao1")

botaoQuestao1.addEventListener("click", function (event) {
    event.preventDefault()
    let questao1 = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    for (let i = 0, length = questao1.length; i < length; i++) {
        if (questao1[i].checked) {
            if (questao1[i].value == 'a') {
                gabarito1.textContent = "Gabarito A. Resposta certa"
                questao1[i].parentElement.classList.add("certa")
            } else {
                gabarito1.textContent = "Gabarito A. Resposta errada"
                questao1[i].parentElement.classList.add("errada")
            }

            break;
        }
    }
})


botaoQuestao2 = document.querySelector("#botao-questao2")

botaoQuestao2.addEventListener("click", function (event) {
    event.preventDefault()
    let questao2 = document.getElementsByName("questao2")
    let gabarito2 = document.getElementById("gabarito2")
    for (let i = 0, length = questao2.length; i < length; i++) {
        if (questao2[i].checked) {
            if (questao2[i].value == 'c') {
                gabarito2.textContent = "Gabarito C. Resposta certa"
                questao2[i].parentElement.classList.add("certa")
            } else {
                gabarito2.textContent = "Gabarito C. Resposta errada"
                questao2[i].parentElement.classList.add("errada")
            }

            break;
        }
    }
})


botaoQuestao3 = document.querySelector("#botao-questao3")

botaoQuestao3.addEventListener("click", function (event) {
    event.preventDefault()
    let questao3 = document.getElementsByName("questao3")
    let gabarito3 = document.getElementById("gabarito3")
    for (let i = 0, length = questao3.length; i < length; i++) {
        if (questao3[i].checked) {
            if (questao3[i].value == 'a') {
                gabarito3.textContent = "Gabarito A. Resposta certa"
                questao3[i].parentElement.classList.add("certa")
            } else {
                gabarito3.textContent = "Gabarito A. Resposta errada"
                questao3[i].parentElement.classList.add("errada")
            }

            break;
        }
    }
})


botaoQuestao4 = document.querySelector("#botao-questao4")

botaoQuestao4.addEventListener("click", function (event) {
    event.preventDefault()
    let questao4 = document.getElementsByName("questao4")
    let gabarito4 = document.getElementById("gabarito4")
    for (let i = 0, length = questao4.length; i < length; i++) {
        if (questao4[i].checked) {
            if (questao4[i].value == 'c') {
                gabarito4.textContent = "Gabarito C. Resposta certa"
                questao4[i].parentElement.classList.add("certa")
            } else {
                gabarito4.textContent = "Gabarito C. Resposta errada"
                questao4[i].parentElement.classList.add("errada")
            }

            break;
        }
    }
})


botaoQuestao5 = document.querySelector("#botao-questao5")

botaoQuestao5.addEventListener("click", function (event) {
    event.preventDefault()
    let questao5 = document.getElementsByName("questao5")
    let gabarito5 = document.getElementById("gabarito5")
    for (let i = 0, length = questao5.length; i < length; i++) {
        if (questao5[i].checked) {
            if (questao5[i].value == 'b') {
                gabarito5.textContent = "Gabarito B. Resposta certa"
                questao5[i].parentElement.classList.add("certa")
            } else {
                gabarito5.textContent = "Gabarito B. Resposta errada"
                questao5[i].parentElement.classList.add("errada")
            }

            break;
        }
    }
})