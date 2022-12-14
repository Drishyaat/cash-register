const billAmount= document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");
//var numberOfNotes=0;
const availableNotes=[2000 ,500 ,100 ,20 ,10 ,5 ,1 ];

checkButton.addEventListener("click", function validateBillandCash()
{message.style.display="none"; 
    
    if(Number(billAmount.value) > 0 )
    {
        if(Number(cashGiven.value) >= Number(billAmount.value))
        {
            const amountTobeReturned= cashGiven.value - billAmount.value;
            calculateChange(amountTobeReturned);
        }
        else
        {
            showMessage("Cash given should be atleast equal to bill amount.");
        }
    }
    else
    {
        showMessage("Invalid bill amount");
    }
}
);

function calculateChange(amountTobeReturned){
for( var i=0; i< availableNotes.length ;i++)
{
    var numberOfNotes= Math.trunc(amountTobeReturned/availableNotes[i]);

    amountTobeReturned = amountTobeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
}
}
function showMessage(msg){
    
    message.style.display= "block";
    message.innerText= msg;
}