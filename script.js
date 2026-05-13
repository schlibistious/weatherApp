async function setData(){
    //sorry for the messy code lol
    //getData
    const result = await fetch("https://api.weather.gov/gridpoints/MTR/88,126/forecast")
    const data = await result.json()
    console.log(data.properties.periods)

    //now
    document.getElementById('time').innerHTML = data.properties.periods[0].name

    const tempLabel = document.createTextNode(data.properties.periods[0].temperature + "°" + data.properties.periods[0].temperatureUnit)
    document.getElementById('temp').appendChild(tempLabel)

    const windLabel = document.createTextNode(data.properties.periods[0].windSpeed)
    document.getElementById('windSpeed').appendChild(windLabel)

    const windDir = document.createTextNode(data.properties.periods[0].windDirection)
    document.getElementById('windDir').appendChild(windDir)

    const rainChance = document.createTextNode(data.properties.periods[0].probabilityOfPrecipitation.value)
    document.getElementById('rainChance').appendChild(rainChance)

    const description = document.createTextNode(data.properties.periods[0].detailedForecast)
    document.getElementById('desc').appendChild(description)
    //sun/moon icons
    if(data.properties.periods[0].isDaytime == true){
        let img = document.createElement('img')
        img.src = 'sun.jpg'
        img.style.width = '5%'
        img.style.height = "5%"
        document.getElementById('time').appendChild(img)
    }
    else{
        let img = document.createElement('img')
        img.src = 'moon.png'
        img.style.width = "4%"
        img.style.height = "4%"
        document.getElementById('time').appendChild(img)
    }

    //later
    document.getElementById('time2').innerHTML = data.properties.periods[1].name

    const tempLabel2 = document.createTextNode(data.properties.periods[1].temperature + "°" + data.properties.periods[1].temperatureUnit)
    document.getElementById('temp2').appendChild(tempLabel2)

    const windLabel2 = document.createTextNode(data.properties.periods[1].windSpeed)
    document.getElementById('windSpeed2').appendChild(windLabel2)

    const windDir2 = document.createTextNode(data.properties.periods[1].windDirection)
    document.getElementById('windDir2').appendChild(windDir2)

    const rainChance2 = document.createTextNode(data.properties.periods[1].probabilityOfPrecipitation.value)
    document.getElementById('rainChance2').appendChild(rainChance2)

    const description2 = document.createTextNode(data.properties.periods[1].detailedForecast)
    document.getElementById('desc2').appendChild(description2)
    //sun/moon icons
    if(data.properties.periods[1].isDaytime == true){
        let img = document.createElement('img')
        img.src = 'sun.jpg'
        img.style.width = '5%'
        img.style.height = "5%"
        document.getElementById('time2').appendChild(img)
    }
    else{
        let img = document.createElement('img')
        img.src = 'moon.png'
        img.style.width = '4%'
        img.style.height = "4%"
        document.getElementById('time2').appendChild(img)
    }
}
setData()