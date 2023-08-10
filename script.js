const bbody = document.body;
const cityinp = document.getElementById("city");
const errorbox = document.querySelector(".error");
const wbox = document.querySelector(".winfo")
const wimag = document.querySelector("#wimg")
const curtemp = document.querySelector(".currenttemp")
const details = document.querySelector(".deets")

async function GetWeatherData (cityinpv){
    try{
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9d5ca831ac58467db48104040230808&q=${cityinpv}&aqi=no`,{mode:"cors"})
        let weatherdata = await response.json()
        console.log(weatherdata)
        console.log(weatherdata.current.temp_c)
        shweather(weatherdata)
    }catch(err){

        errorbox.innerHTML = err
    }
    
}

let shweather = (wdata) => {

    cityinp.value = ""
    details.innerHTML = wdata.location.name
    curtemp.innerHTML = `${wdata.current.temp_c}&#8451;`
    wimag.classList.add("wimga")
    errorbox.innerHTML = ""
    if (wdata.current.condition.text == "Sunny" || wdata.current.condition.text == "Clear"){
        
        bbody.style.backgroundColor = "#f2f27a"
        wimag.src = "sun.png"

    }else{
        bbody.style.backgroundColor = "#9099a1"
        wimag.src = "cloud.png"
    }



}

cityinp.addEventListener("keyup",e => {
    

    if (e.key == "Enter") {
        let cityinpv = cityinp.value
        GetWeatherData(cityinpv)
    }

})
