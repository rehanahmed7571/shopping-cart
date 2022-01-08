

    document.getElementById('phone-count').value=1;
    document.getElementById('case-count').value=1;

    function productHandelChange(product,isIncrease){

    const productInput =productCount(product);
    console.log(productInput);
    let productNewNumber = productInput;

    if(isIncrease == true){
        productNewNumber = productNewNumber + 1;
    }if(isIncrease == false && productNewNumber > 0){
        productNewNumber = productNewNumber -1
    }
    document.getElementById(product+'-count').value = productNewNumber;
    let productTotalPrice = 0;
    if (product == 'phone'){

        productTotalPrice = productNewNumber * 1100
    }if (product == 'case'){
        productTotalPrice = productNewNumber * 100
    }
    document.getElementById(product +'-price').innerText=productTotalPrice;

    totalPrice();
    
    };


    function totalPrice(){
        const phoneNumber = productCount('phone');
        const caseNumber = productCount('case');

        totalPrices = phoneNumber * 1100 + caseNumber * 100;
        document.getElementById('total').innerText=totalPrices;

        const tax = Math.round(totalPrices * 0.1)
        document.getElementById('tax').innerText=tax;

        const grandTotal = tax +totalPrices;
        document.getElementById('grand-total').innerText=grandTotal;

    };

     function productCount(product){

        const productCount = document.getElementById(product + '-count');
        const productNumber = parseInt(productCount.value);

        return productNumber;

    }
      




// function caseHandelChange(isIncrease){

//     const caseInput = document.getElementById('case-count');
//     const caseInputNumber = parseInt(caseInput.value);
//     let caseNewNumber = caseInputNumber

//     if(isIncrease == true){
//         caseNewNumber = caseNewNumber + 1;
//     }if(isIncrease == false && caseNewNumber > 0){
//         caseNewNumber = caseNewNumber -1
//     }
//     caseInput.value = caseNewNumber;
//     const caseTotalPrice = caseNewNumber * 100;
//     document.getElementById('case-price').innerText=caseTotalPrice;

// }


// function phoneHandleChange(isIncrease){

//     const phoneInput = document.getElementById('phone-count');
//     const phoneInputNumber = parseInt(phoneInput.value);
//     let phoneNewTotal = phoneInputNumber
//     if(isIncrease == true){
//         phoneNewTotal = phoneNewTotal + 1;
//     } if (isIncrease == false && phoneNewTotal > 0){
//         phoneNewTotal = phoneNewTotal - 1;
//     }

//     phoneInput.value = phoneNewTotal;
//     phoneTotalPrice = phoneNewTotal * 1100;
//     document.getElementById('phone-price').innerText = phoneTotalPrice;

// }


// document.getElementById('phone-increase').addEventListener('click',function(){

//     const phoneInput = document.getElementById('phone-count');
//     const phoneInputNumber = parseInt(phoneInput.value);
//     const phoneTotal = phoneInputNumber + 1;
//     phoneInput.value = phoneTotal;
//     phoneTotalPrice = phoneTotal * 1100;
//     document.getElementById('phone-price').innerText = phoneTotalPrice;
// })
// document.getElementById('phone-decrease').addEventListener('click',function(){

//     const phoneInput = document.getElementById('phone-count');
//     const phoneInputNumber = parseInt(phoneInput.value);
//     const phoneTotal = phoneInputNumber - 1;
//     phoneInput.value = phoneTotal;
//     phoneTotalPrice = phoneTotal * 1100;
//     document.getElementById('phone-price').innerText = phoneTotalPrice;
// })



// document.getElementById('case-increase').addEventListener('click',function(){

//     const caseInput = document.getElementById('case-count');
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseTotal = caseInputNumber +  1;
//     caseInput.value = caseTotal;
//     const caseTotalPrice = caseTotal * 100;
//     document.getElementById('case-price').innerText=caseTotalPrice;

// })

// document.getElementById('case-decrease').addEventListener('click',function(){

//     const caseInput = document.getElementById('case-count');
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseTotal = caseInputNumber -  1;
//     caseInput.value = caseTotal;
//     const caseTotalPrice = caseTotal * 100;
//     document.getElementById('case-price').innerText=caseTotalPrice;

// })






