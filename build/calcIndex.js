"use strict";



document.addEventListener("DOMContentLoaded", function () {
  let tableIndex = document.querySelector(".table__index");
  tableIndex.style.display = 'none';
  document.querySelector(".form__btn").onclick = function (e) {
    e.preventDefault();
    tableIndex.style.display = 'block';
  } 

  let price = document.querySelector(".input__price");
  //let priceValue = +document.querySelector(".input__price").value;
  let avance = document.querySelector(".input__advance");
  //let avanceValue = +document.querySelector(".input__advance").value;
  let avancePercent = document.querySelector(".input__percent");
  //let avancePercentValue = document.querySelector(".input__percent").value;
  let period = document.querySelector(".input__period");

  document.querySelector(".form").addEventListener("input" , function () {
    /* Ratele dobinzii*/
    let periodValue = +document.querySelector("#period").value;
    let averagePercent;
    if((periodValue >= 12 && periodValue <= 24) && (avancePercent.value >= 20 && avancePercent.value <= 25)){
      averagePercent = +9.00;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    } else if((periodValue >= 25 && periodValue <= 36) && (avancePercent.value >= 20 && avancePercent.value <= 25)){
      averagePercent = +9.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 37 && periodValue <= 48) && (avancePercent.value >= 20 && avancePercent.value <= 25)){
      averagePercent = +9.99;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 49 && periodValue <= 60) && (avancePercent.value >= 20 && avancePercent.value <= 25)){
      averagePercent = +10.99;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }

    /* *********** */

    if((periodValue >= 12 && periodValue <= 24) && (avancePercent.value >= 26 && avancePercent.value <= 30)){
      averagePercent = +8.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    } else if((periodValue >= 25 && periodValue <= 36) && (avancePercent.value >= 26 && avancePercent.value <= 30)){
      averagePercent = +9.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 37 && periodValue <= 48) && (avancePercent.value >= 26 && avancePercent.value <= 30)){
      averagePercent = +9.99;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 49 && periodValue <= 60) && (avancePercent.value >= 26 && avancePercent.value <= 30)){
      averagePercent = +10.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }
    /* *********** */
    if((periodValue >= 12 && periodValue <= 24) && (avancePercent.value >= 31 && avancePercent.value <= 40)){
      averagePercent = +8.00;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    } else if((periodValue >= 25 && periodValue <= 36) && (avancePercent.value >= 31 && avancePercent.value <= 40)){
      averagePercent = +9.00;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 37 && periodValue <= 48) && (avancePercent.value >= 31 && avancePercent.value <= 40)){
      averagePercent = +9.99;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 49 && periodValue <= 60) && (avancePercent.value >= 31 && avancePercent.value <= 40)){
      averagePercent = +10.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }
     /* *********** */
     if((periodValue >= 12 && periodValue <= 24) && (avancePercent.value >= 41 && avancePercent.value <= 50)){
      averagePercent = +7.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    } else if((periodValue >= 25 && periodValue <= 36) && (avancePercent.value >= 41 && avancePercent.value <= 50)){
      averagePercent = +8.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 37 && periodValue <= 48) && (avancePercent.value >= 41 && avancePercent.value <= 50)){
      averagePercent = +9.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 49 && periodValue <= 60) && (avancePercent.value >= 41 && avancePercent.value <= 50)){
      averagePercent = +9.99;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }
      /* *********** */
    if((periodValue >= 12 && periodValue <= 24) && (avancePercent.value >= 51 && avancePercent.value <= 80)){
      averagePercent = +7.00;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    } else if((periodValue >= 25 && periodValue <= 36) && (avancePercent.value >= 51 && avancePercent.value <= 80)){
      averagePercent = +8.00;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 37 && periodValue <= 48) && (avancePercent.value >= 51 && avancePercent.value <= 80)){
      averagePercent = +8.50;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }else if((periodValue >= 49 && periodValue <= 60) && (avancePercent.value >= 51 && avancePercent.value <= 80)){
      averagePercent = +9.00;
      document.querySelector(".rata-dob").innerHTML = averagePercent.toFixed(2) + "%";
    }

    

    /* ========= */

    /* Rata lunara */
    //console.log(typeof(averagePercent));
    let rataAnuala;
    let rataLunaraLeasing; 
    function calculateRate () {
      rataAnuala = averagePercent / 100 / 12;
      let ii = rataAnuala + 1;
      let powerii = Math.pow(ii, periodValue);
      let poweri = powerii - 1;
      let powerres = (rataAnuala / poweri) + rataAnuala;
      let result = (price.value - avance.value) * powerres;
      rataLunaraLeasing = +result.toFixed(2);
      document.querySelector(".output__text-green").innerHTML = rataLunaraLeasing + " EUR";
    }
    
    calculateRate();

    /* DOBANDA */

    function calcDobAndVal () { 
  
      let creditData = [];
       
      let newVal = +price.value,
      
        newPeriod = +period.value,
        priceWithoutAvance = newVal - avance.value,
        ratesD = priceWithoutAvance * rataAnuala;
        let valoarea,
            rata,
            initialValue = priceWithoutAvance.toFixed(2),
            principal,
            leasing;

        function calcDobanda () {

           let rateObject = {};
          for(let i = 1;  i <= newPeriod; i++) {
            ratesD = priceWithoutAvance * rataAnuala;

            principal = rataLunaraLeasing - ratesD;

            priceWithoutAvance = (priceWithoutAvance - rataLunaraLeasing) + ratesD;
            valoarea = priceWithoutAvance;
            rata = i;
  
            leasing = +rataLunaraLeasing;


            rateObject = {
              rata: rata,
              valoarea: valoarea.toFixed(2),
              principal:  principal.toFixed(2),
              dobinda: ratesD.toFixed(2),
              leasing: leasing.toFixed(2) 
            };
            creditData.push(rateObject);

            const tableBody = document.getElementById("tableData");
            let dataHtml = '';
            dataHtml += `<tr><td>0</td><td>${initialValue}</td><td>0</td><td>0</td><td>0</td></tr>`;
            let dobindaFinal = 0;
            let rataFinal = 0;
            for(let item of creditData) {
              dataHtml += `<tr><td>${item.rata}</td><td>${item.valoarea}</td><td>${item.principal}</td><td>${item.dobinda}</td><td>${item.leasing}</td></tr>`;
              let dobindaToNumber = +item.dobinda;
              dobindaFinal += dobindaToNumber;
              let rataToNumber = +item.leasing;
              rataFinal += rataToNumber;
            }
            let avanceForRata = +avance.value;
            let rataFinalAvance = rataFinal + avanceForRata;

            dataHtml += `<tr><td>Total</td><td></td><td>${initialValue}</td><td>${dobindaFinal.toFixed(2)}</td><td>${rataFinalAvance.toFixed(2)}</td></tr>`;
            tableBody.innerHTML = dataHtml;
          } 

        }
        calcDobanda();

          /* Prepare DATA for dae formula */

        let creditSum = newVal - avance.value;  /*  suma finantarii */
        let dobUnic = 1.99 * newVal / 100;  /* dobinda unica */
        if(dobUnic <= 150){
          dobUnic = +150;
        };
       let rateee = formulajs.RATE(periodValue, -(rataLunaraLeasing) ,creditSum - dobUnic);
        let dae = Math.pow((1 + rateee), 12) - 1;
        let resultdae = dae * 100; 
        let cascoPercent = 4 * newVal / 100;
        if(cascoPercent <= 200 ){
          cascoPercent = +200
        }
        let total = +avance.value + cascoPercent + dobUnic;
        let avanceTab1 = +avance.value;

        /* First table data insert to page  */
          
         document.querySelector(".dae").innerHTML =  '~' + resultdae.toFixed(2) + '%';
        document.getElementById('initial').innerHTML = avanceTab1.toFixed(2);
        document.getElementById('casco').innerHTML = cascoPercent.toFixed(2);
        document.getElementById('dobindaU').innerHTML = dobUnic.toFixed(2);
        document.getElementById('total').innerHTML = total;  

       /*  function calcValoarea () {
          for(let i = ratesD; newPeriod > 0; newPeriod--) {
            priceWithoutAvance = (priceWithoutAvance - rataLunaraLeasing); 
            console.log(newPeriod);
            console.log(priceWithoutAvance);
          }
        }
        //calcValoarea(); */
    }

    calcDobAndVal();
    
    /* =========== */
    price.oninput = function () {
      let priceValue = this.value;
      document.querySelector(".range__price").value = priceValue;
      let maxPriceValue = Math.round(priceValue * 80 / 100);
      let minPriceValue = Math.round(priceValue * 20 / 100);
      document.querySelector(".range__advance").max = maxPriceValue;
      document.querySelector(".range__advance").min = minPriceValue;
      price.value = priceValue;
      avance.value = minPriceValue; 
      document.querySelector(".output-advance").innerHTML = avance.value + ".00" + " EUR"; 

    } 
      price.onchange = function () {
        if (price.value < 5000) {
          price.value = 5000;
        } else if (price.value > 250000) {
          price.value = 250000;
        }
      }  
     
    document.querySelector(".range__price").oninput = function (){
      let priceValue = this.value;
      let maxPriceValue = Math.round(priceValue * 80 / 100);
      let minPriceValue = Math.round(priceValue * 20 / 100);
      document.querySelector(".range__advance").max = maxPriceValue;
      document.querySelector(".range__advance").min = minPriceValue;  
      price.value = priceValue;
      avance.value = minPriceValue; 
      document.querySelector(".output-advance").innerHTML = avance.value + ".00" + " EUR";  
    }

    avance.oninput = function (){
      document.querySelector(".range__advance").value = this.value;
      let avanceValue = +avance.value;
      let priceValue = +price.value;
      let minmaxPercentValue = Math.round(avanceValue / priceValue * 100);
      avancePercent.value = minmaxPercentValue;
      if(minmaxPercentValue < 20) {
        avance.value = price.value * 20 / 100;
      } else if(minmaxPercentValue > 80) {
        avance.value = price.value * 80 / 100;
      }
      document.querySelector(".output-advance").innerHTML = avance.value + ".00" + " EUR"; 

    } 

    avance.onchange = function (){
      let avanceValue = +avance.value;
      let priceValue = +price.value;
      let minmaxPercentValue = Math.round(avanceValue / priceValue * 100);
      avancePercent.value = minmaxPercentValue; 
     
      document.querySelector(".output-advance").innerHTML = avance.value + ".00" + " EUR"; 
    } 
   

    document.querySelector(".range__advance").oninput = function () {
      avance.value = this.value;
      let avanceValueP = +avance.value;
      let priceValueP = +price.value;
      let minmaxPercentValue = Math.round(avanceValueP / priceValueP * 100); 
      avancePercent.value = minmaxPercentValue; 
      document.querySelector(".output-advance").innerHTML = avance.value + ".00" + " EUR";
    }
 
    avancePercent.oninput = function (){
      let percentValue = +this.value;
      let priceValue = +price.value;
      let percentValueToNumber = percentValue / 100 * priceValue;
      avance.value = percentValueToNumber;
    }
    avancePercent.onchange = function () {
      if(this.value < 20) {
        this.value = 20
      } else if(this.value > 80) {
        this.value = 80;
      }
      document.querySelector(".output-advance").innerHTML = avance.value + ".00" + " EUR"; 

    }

    period.oninput = function () {
      document.querySelector(".range__period").value = this.value;
      document.querySelector(".output-period").innerHTML = this.value + " luni";

    }
      document.querySelector(".range__period").oninput = function () {
      period.value = this.value;
      document.querySelector(".output-period").innerHTML = this.value + " luni";
    }

  });
});
