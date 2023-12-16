let botao = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');

//inventei kkkkk
let cores = ['#ff5733', '#3399ff', '#33cc33'];
let corIndex = 0;

botao.addEventListener('click', function(event){
    event.preventDefault();

    let xMin = Number(document.querySelector('#xMin').value);
    let xMax = Number(document.querySelector('#xMax').value);

   
    let base = xMin;
    let altura = xMax;

    let volume = base * altura;

    resultado.innerHTML = `<p>Volume: ${volume} (m³)</p>`;

    resultado.style.color = cores[corIndex];

    // Atualiza o índice da cor
    corIndex = (corIndex + 1) % cores.length;
});
