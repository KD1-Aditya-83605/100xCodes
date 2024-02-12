async function getData(){
//  fetch('https://fakerapi.it/api/v1/persons')
//  .then((responce)=>{
//     responce.json()
//     .then((final)=>{
//         console.log(final);
//     })
//  })

const responce = await fetch('https://fakerapi.it/api/v1/persons');
const data  = await responce.json()
return data


}

const button = document.querySelector('.button')
const data = document.querySelector('.data')
button.addEventListener('click', async()=>{
    
    
     const res = await getData()
     data.innerHTML = JSON.stringify(res)

})