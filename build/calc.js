"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let price = document.querySelector(".input__price");
  //let priceValue = +document.querySelector(".input__price").value;
  let avance = document.querySelector(".input__advance");
  //let avanceValue = +document.querySelector(".input__advance").value;
  let avancePercent = document.querySelector(".input__percent");
  //let avancePercentValue = document.querySelector(".input__percent").value;
  let period = document.querySelector(".input__period");

  document.querySelector(".form").addEventListener("input" , function () {

    price.oninput = function () {
      let priceValue = this.value;
      document.querySelector(".range__price").value = priceValue;
      let maxPriceValue = Math.round(priceValue * 80 / 100);
      let minPriceValue = Math.round(priceValue * 20 / 100);
      document.querySelector(".range__advance").max = maxPriceValue;
      document.querySelector(".range__advance").min = minPriceValue;
      price.value = priceValue;
      avance.value = minPriceValue; 
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

      let periodValue = +document.querySelector("#period").value;
      if((periodValue >= 12 && periodValue <= 23) && (avancePercent.value >= 20 && avancePercent.value <= 29)){
        document.querySelector(".rata-dob").innerHTML = "8.50%";
      } else if((periodValue >= 24 && periodValue <= 35) && (avancePercent.value >= 20 && avancePercent.value <= 29)){
        document.querySelector(".rata-dob").innerHTML = "9.00%";
      }else if((periodValue >= 36 && periodValue <= 47) && (avancePercent.value >= 20 && avancePercent.value <= 29)){
        document.querySelector(".rata-dob").innerHTML = "9.50%";
      }else if((periodValue >= 48 && periodValue <= 60) && (avancePercent.value >= 20 && avancePercent.value <= 29)){
        document.querySelector(".rata-dob").innerHTML = "9.99%";
      }
    }

    avance.oninput = function (){
      document.querySelector(".range__advance").value = this.value;
      let avanceValue = +avance.value;
      let priceValue = +price.value;
      let minmaxPercentValue = Math.round(avanceValue / priceValue * 100);
      avancePercent.value = minmaxPercentValue; 
    } 
    avance.onchange = function (){
      let avanceValue = +avance.value;
      let priceValue = +price.value;
      let minmaxPercentValue = Math.round(avanceValue / priceValue * 100);
      avancePercent.value = minmaxPercentValue; 
      if(minmaxPercentValue < 20) {
        avance.value = price.value * 20 / 100;
      } else if(minmaxPercentValue > 80) {
        avance.value = price.value * 80 / 100;
      }
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



 /*  function minMax (priceValue) {
  let maxPriceValue = Math.round(priceValue * 80 / 100);
  let minPriceValue = Math.round(priceValue * 20 / 100);
  document.querySelector(".range__advance").max = maxPriceValue;
  document.querySelector(".range__advance").min = minPriceValue;
  //avance.value = minPriceValue;  
}  */
//minMax(priceValue);