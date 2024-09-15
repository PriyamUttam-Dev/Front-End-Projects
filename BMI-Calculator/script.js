const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)
//in dono  ko humne event ke andar isiliye likha kyunki agar bahar likhte toh page jaise hi load hota toh null ya empty value load hojati pr hume chahiye ki submit button pe click krne ke baad value process ho
form.addEventListener('submit',function(e){
    e.preventDefault() //jo bhi humara event ka default action hai usko thoda pause kro ya roko thoda sa aur submit wubmit mat karo

    const height = parseInt(document.querySelector('#height').value)
    // queryselevtor se hume jo value milegi woh string mei milegi fir usko parseint se convert krke int mei convert krdenge
    const weight = parseInt(document.querySelector('#weight').value)
    const results =  document.querySelector('#results')
    
     
//     if(height === '' || height < 0 || isNaN(height)){ //nan check krta hai ki agar number mei convertable hoga height toh true miljaega aur agar false hogi toh hum aage badhna bhi nhi chahte hai
//            results.innerHTML = 'Please give a valid height';
//     }
//     results.innerHTML = `${height}`;
//     if(weight === '' || weight < 0 || isNaN(weight)){ //nan check krta hai ki agar number mei convertable hoga height toh true miljaega aur agar false hogi toh hum aage badhna bhi nhi chahte hai
//         results.innerHTML = 'Please give a valid height';
//  }

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});