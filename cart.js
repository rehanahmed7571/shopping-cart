
       // plus button handler
       document.getElementById('count-items').value="1";
        document.getElementById('plusButtons').addEventListener('click',function(){


                countingItem('count-items')

                amountIncreasing('amount');
                amountIncreasing('total');
                amountIncreasing('subTotal');
        });

        // second plus button handler
        document.getElementById('count-item').value="1";
        document.getElementById('plusBtn').addEventListener('click',function(){

                countingItem('count-item');

                amountIncreasingTwo('amountTwo');
                amountIncreasingTwo('total');
                amountIncreasingTwo('subTotal');

        });

        // counting function
        function countingItem(id){

            const countItem= document.getElementById(id).value;
            const countItemNumber = parseFloat(countItem);
            const totalCountItem = countItemNumber + 1;
                document.getElementById(id).value=totalCountItem;
        }




        //amount increasing function
        function amountIncreasing(id){

            const amountIncrease = document.getElementById(id).innerText;
            const amountIncreaseNumber = parseFloat(amountIncrease);
            const totalAmountIncrease = amountIncreaseNumber + 1100;
                document.getElementById(id).innerText=totalAmountIncrease; 

        }
        //amount increasing function two
        function amountIncreasingTwo(id){

            const amountIncrease = document.getElementById(id).innerText;
            const amountIncreaseNumber = parseFloat(amountIncrease);
            const totalAmountIncrease = amountIncreaseNumber + 100;
                document.getElementById(id).innerText=totalAmountIncrease; 

        }




        // Minus button handler
        document.getElementById('minusOne').addEventListener('click',function(){


                countItemMinus('count-items')

                amountDecreasing('amount');
                amountDecreasing('total');
                amountDecreasing('subTotal');
        });

        // second Minus button handler
        document.getElementById('minusTwo').addEventListener('click',function(){

                countItemMinus('count-item');

                amountDecreasingTwo('amountTwo');
                amountDecreasingTwo('total');
                amountDecreasingTwo('subTotal');

        });

        // counting Minus
        function countItemMinus(id){

            const countItem= document.getElementById(id).value;
            const countItemNumber = parseFloat(countItem);
            const totalCountItem = countItemNumber - 1;
                document.getElementById(id).value=totalCountItem;
        }


        
        //amount Decreasing function
        function amountDecreasing(id){

            const amountIncrease = document.getElementById(id).innerText;
            const amountIncreaseNumber = parseFloat(amountIncrease);
            const totalAmountIncrease = amountIncreaseNumber - 1100;
                document.getElementById(id).innerText=totalAmountIncrease; 

        }
        //amount Decreasing function two
        function amountDecreasingTwo(id){

            const amountIncrease = document.getElementById(id).innerText;
            const amountIncreaseNumber = parseFloat(amountIncrease);
            const totalAmountIncrease = amountIncreaseNumber - 100;
                document.getElementById(id).innerText=totalAmountIncrease; 

        }