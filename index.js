let rangeBar = document.querySelector(".rangebar");
let rangeBarValue = document.querySelector(".rangebar-value");
rangeBarValue.innerHTML = rangeBar.value;

rangeBar.addEventListener("input", function(){
    rangeBarValue.innerHTML = rangeBar.value;
});
