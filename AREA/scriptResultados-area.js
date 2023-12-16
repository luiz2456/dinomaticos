

function f1(){
  

      let resul1 = document.getElementById('resul1')
 

    let comp1=Number(document.querySelector("#comp1").value);
    let larg1=Number(document.querySelector("#larg1").value);
    let alt1=Number(document.querySelector("#alt1").value);

    let Apa = (2 * comp1 * larg1) + (2 * larg1 * alt1) + (2*comp1 * alt1)
    console.log(`A sua resposta é: ${Apa} cm²`)
   resul1.innerHTML = `A área do paralelepípedo é: ${Apa}cm²`
   
}


function f2(){
  

    let resul2 = document.getElementById('resul2')


  let pi2=Number(document.querySelector("#pi2").value);
  let raio2=Number(document.querySelector("#raio2").value);
  let alt2=Number(document.querySelector("#alt2").value);

  let Aci = 2*pi2*raio2*(raio2+alt2)
  console.log(`A sua resposta é: ${Aci} cm²`)
 resul2.innerHTML = `A área do cilindro  é: ${Aci}cm²`
 
}

function f3(){
  

let resul3 = document.getElementById('resul3')


  let bs3=Number(document.querySelector("#bs3").value);
  let alt3=Number(document.querySelector("#alt3").value);

  let Ar= bs3 * alt3
  console.log(`A sua resposta é: ${Ar} cm²`)
  resul3.innerHTML = `A área do retângulo é: ${Ar}cm²`
 
}
function f4(){
  

    let resul4 = document.getElementById('resul4')
    
    
      let bs3=Number(document.querySelector("#bs4").value);
      let alt3=Number(document.querySelector("#alt4").value);
    
      let At= bs3 * alt3/2
      console.log(`A sua resposta é: ${At} cm²`)
      resul4.innerHTML = `A área do trângulo é: ${At}cm²`
     
    }
    function f5(){
  

        let resul5 = document.getElementById('resul5')
        
        
          let pi5=Number(document.querySelector("#pi5").value);
          let raio5=Number(document.querySelector("#raio5").value);
        
          let Ac= pi5* (raio5*raio5)
          console.log(`A sua resposta é: ${Ac} cm²`)
          resul5.innerHTML = `A área do círculo é: ${Ac}cm²`
         
        }