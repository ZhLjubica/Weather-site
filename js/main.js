let weatherToday = new XMLHttpRequest();

let weatherTomorrow = new XMLHttpRequest();

let todayObj;
let tomorrowObj;


weatherToday.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=fc1f65d253a529271dda185fc4d7bac1&units=metric','true');
weatherToday.responseText = 'text';
weatherToday.send(null);

weatherToday.onload = function(){
    if (weatherToday.status === 200) {
        todayObj = JSON.parse(weatherToday.responseText);

        console.log(todayObj);
        // console.log(todayObj.weather[0].icon);
        // location
        document.getElementById('location').innerHTML = todayObj.name;

        // temperature
        document.getElementById('temp').innerHTML = todayObj.main.temp + "&#8451;";
        document.getElementById('description').innerHTML= todayObj.weather[0].description;
        let iconCode =  todayObj.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

        document.getElementById('icon').setAttribute('src', iconUrl );
    }
}

weatherTomorrow.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=Belgrade&appid=fc1f65d253a529271dda185fc4d7bac1&units=metric', true);
weatherTomorrow.responseText = 'text';
weatherTomorrow.send();

weatherTomorrow.onload = function(){
    if(weatherTomorrow.status === 200){
        tomorrowObj = JSON.parse(weatherTomorrow.responseText);

        console.log(tomorrowObj);
        document.getElementById('temp1').innerHTML = tomorrowObj.list[7].main.temp+ "&#8451;";
        document.getElementById('feelsLike1').innerHTML ="Feels like: " + tomorrowObj.list[7].main.feels_like+ "&#8451;";

        let date1 = tomorrowObj.list[7].dt_txt;
        document.getElementById('date1').innerHTML = date1.substring(0, 16);
        


        document.getElementById('temp2').innerHTML = tomorrowObj.list[15].main.temp+ "&#8451;";
        document.getElementById('feelsLike2').innerHTML ="Feels like: " + tomorrowObj.list[15].main.feels_like+ "&#8451;";

        let date2 = tomorrowObj.list[15].dt_txt;
        document.getElementById('date2').innerHTML = date2.substring(0, 16);

        // icon1
        let iconCode1 =  tomorrowObj.list[7].weather[0].icon;
        let iconUrl1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
        document.getElementById('icon1').setAttribute('src', iconUrl1 );

        //icon2
        let iconCode2 =  tomorrowObj.list[15].weather[0].icon;
        let iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
        document.getElementById('icon2').setAttribute('src', iconUrl2 );

       
    }
}