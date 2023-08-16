// 
const dipositbutton = document.getElementById('dipositid').addEventListener('click',function(){
    // console.log('hi')
    const dipositi = document.getElementById('dipositinput');
    
    const diposittext = dipositi.value;
    dipositi.value = '';
    if(isNaN(diposittext) ){
        return alert('not a number')
    }
   const newdiposit = parseFloat(diposittext);
   


// second steap 

   const dipositspan1 = document.getElementById('dipositspan');
   const dipositspanvalue = dipositspan1.innerText;
   const dipositspannumber = parseFloat(dipositspanvalue)

//    console.log(dipositspannumber)
const totaldiposit = dipositspannumber  + newdiposit;
dipositspan1.innerText = totaldiposit;


const balance1 = document.getElementById('balanceid');
const balancetext = balance1.innerText;
const balancenumber = parseFloat(balancetext);


const totalbalance = balancenumber + newdiposit;



balance1.innerText = totalbalance



});



// another part 
 

document.getElementById('withdrowid').addEventListener('click',function(){
    // console.log('hi')
    const withdrowinput1 = document.getElementById('withdrowinput');
    const withdrowtext = withdrowinput1.value;
    withdrowinput1.value = '';
    if(isNaN(withdrowtext) ){
        return alert('not a number')
    }
    const withdrownumber = parseFloat(withdrowtext);
    // console.log(withdrownumber)
   
   


    

    const withdrawspan1 = document.getElementById('withdrawspan');
   const withdrawspanvalue = withdrawspan1.innerText;
   const withdrawspannumber = parseFloat(withdrawspanvalue)

   
    






    const balance1 = document.getElementById('balanceid');
const balancetext = balance1.innerText;
const balancenumber = parseFloat(balancetext);



if(withdrownumber>balancenumber){
    return alert('hi')
}


// console.log(dipositspannumber)
const totalwithdraw = withdrawspannumber + withdrownumber;
withdrawspan1.innerText = totalwithdraw;

const dicrement = balancenumber - withdrownumber;
balance1.innerText = dicrement;


});
