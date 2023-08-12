



// async function fetchData(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// fetchData();


function fetchData1(city) {
    
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "12cce957b9msh87af8a29f1499ccp1df4f6jsn058837b970e4",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
        }
    };

    const upper = city.toUpperCase()
        document.getElementById("cityhead").innerHTML= upper
    
    console.log(url);
    fetch(url, options)
    .then(response =>response.json())
    .then(result =>{
        
         document.getElementById("cloud_pct").innerHTML= result.cloud_pct
         
        document.getElementById("feels_like").innerHTML= result.feels_like
        document.getElementById("humidity1").innerHTML= result.humidity
        document.getElementById("humidity2").innerHTML= result.humidity
        
        document.getElementById("temp1").innerHTML= result.temp
        document.getElementById("temp2").innerHTML= result.temp
        document.getElementById("min_temp").innerHTML= result.min_temp
        document.getElementById("max_temp").innerHTML= result.max_temp
        
        document.getElementById("wind_speed1").innerHTML= result.wind_speed
        document.getElementById("wind_speed2").innerHTML= result.wind_speed
         document.getElementById("wind_degrees").innerHTML= result.wind_degrees

        // document.getElementById("sunrise").innerHTML= result.sunrise
        // document.getElementById("sunset").innerHTML= result.sunset
        
        // THIS ALSO WORKS
        // cloud_pct.innerHTML= result.cloud_pct
        // feels_like.innerHTML=result.feels_like
        // humidity.innerHTML=result.humidity
        // temp.innerHTML=result.temp
        // min_temp.innerHTML=result.min_temp
        // max_temp.innerHTML=result.max_temp
        // wind_speed.innerHTML= result.wind_speed
        // wind_degrees.innerHTML= result.wind_degrees
        // sunrise.innerHTML= result.sunrise
        // sunset.innerHTML=result.sunset
        
        
        console.log(result)
    })
     .catch(err =>console.error(err))
    
}






const btn = document.getElementById("btn");
const city_name= document.getElementById("city_name")

btn.addEventListener("click",(e)=>{

fetchData1(city_name.value)
e.preventDefault();

})

fetchData1("delhi");


//================================


//======================================watch list=================

function fetchData2(city,wind,temp,humid){

    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "12cce957b9msh87af8a29f1499ccp1df4f6jsn058837b970e4",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
        }
    };

    
    fetch(url, options)
    .then(response =>response.json())
    .then(result =>{
        
     
        document.getElementById(humid).innerHTML= result.humidity
      
        document.getElementById(temp).innerHTML= result.temp
     
        document.getElementById(wind).innerHTML= result.wind_speed
      
})
 .catch(err =>console.error(err))

}

//=============================================





const add_btn1 = document.getElementById("add_btn1");
const city_name1= document.getElementById("city_name1")

const add_btn2 = document.getElementById("add_btn2");
const city_name2= document.getElementById("city_name2")

const add_btn3 = document.getElementById("add_btn3");
const city_name3= document.getElementById("city_name3")


add_btn1.addEventListener("click",(e)=>{

    fetchData2(city_name1.value,"add_wind_speed1","add_temp1","add_humidity1")
    e.preventDefault();
    
    })

add_btn2.addEventListener("click",(e)=>{

    fetchData2(city_name2.value,"add_wind_speed2","add_temp2","add_humidity2")
    e.preventDefault();
    
    })
    
add_btn3.addEventListener("click",(e)=>{

    fetchData2(city_name3.value,"add_wind_speed3","add_temp3","add_humidity3")
    e.preventDefault();
    
    })
    