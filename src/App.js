import React, { useState } from "react";

const App =()=>{

    let [latitude,setLattitude] = useState("")
    let [longitude,setLongitude] = useState("")
    let [hemisphere,setHemisphere] = useState("")
    let [month,setMonth] = useState("")


    function getLocation(){

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) =>{
                setLattitude(location.coords.latitude);
                setLongitude(location.coords.longitude);
                setMonth(new Date().getMonth() +1)

                if(location.coords.latitude > 0){
                    setHemisphere("Northen Hemisphere")
                }
                else if(location.coords.latitude < 0){
                    setHemisphere("Southern Hemisphere")
                }
                else{
                    setHemisphere("Equator")
                }
            })
        }  
    }

    return ( 
        <div className="display_container">
            <div className="left_div">
                <h1>Lattitude: {latitude}</h1>
                <h1>Longitude: {longitude}</h1>
                <h2>Hemisphere : {hemisphere} </h2>
                <h2>Month : {month} </h2>
                <button onClick={getLocation} >Get Weather</button>
            </div>

            
            <div className="right_div">
                    { 
                (hemisphere === "Northen Hemisphere" && month >= 2 && month <= 9)
                  ||(hemisphere === "Southern Hemisphere" && (month< 2 || month> 9)) ? (
                    <div>
                        <h3>{hemisphere} : चुभती जलती गर्मी का मौसम आया!! आया मौसम ठंडे-ठंडे गर्मी कूल का !!</h3>
                        <h2>Taaje rasile Aam ka swaad Maaza!!!</h2>
                        <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/01/29hy_7_29012022_1.jpg" alt="maza" />
                    </div>
                ) : ( (hemisphere === "Northen Hemisphere" && (month < 2 || month >9))
                        || (hemisphere === "Southern Hemisphere" && (month >= 2 && month <=9)) ? ( 
                    <div>
                        <h3>{hemisphere} : सर्दी की नजर न लगे !! Thanda Thanda cool cool !</h3>
                        <h2>Sardi main de garmi ka Full ehsaas !! Doller Ultra Thand ka Weapon !! </h2>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/170716-mackage-08-duo2-1807-logo-1505851930.jpg?resize=480:*" alt="winter" />
                    </div>
                ) : (
                    <h4>Click on "Get Weather" to fetch current weather!</h4>
                    )
                  )
                }
            </div>
            
        </div>
    )
}

export default App;