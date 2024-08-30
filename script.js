const input= document.querySelector('.cityinput');
const cityname= document.querySelector('.cityname');
const temp= document.querySelector('.temp');
const windspeeds= document.querySelector('.windspeeds');
const humadity= document.querySelector('.humadity .p-2');
const visibility= document.querySelector('.visibility .p-2');
const airpres= document.querySelector('.airpres .p-2');



const api= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiID= "&appid=0db69f352206f6cee5ed9030b876e143";


input.addEventListener('input',()=>{

    fetch(`${api}${input.value}${apiID}`)
    .then((res)=> res.json())
    .then((data)=> {
        if(data.cod===200){
          cityname.innerHTML= data.name  
          temp.innerHTML= data.main.temp+' °C'
          windspeeds.innerHTML= data.wind.speed+' km/h'
          airpres.innerHTML= data.main.pressure+' hpa'
          humadity.innerHTML= data.main.humidity+' %'
          visibility.innerHTML= data.visibility/1000+' km/h'

         
        }
        else{
            cityname.innerHTML= 'city not found' 
            temp.innerHTML= 'no found'
            windspeeds.innerHTML= '0km/h'
            airpres.innerHTML= ' 0'
            humadity.innerHTML= ' 0'
            visibility.innerHTML= ' 0'
           
        }
       

    })
    .catch((err)=> console.log(err))
 
})
