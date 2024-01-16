/*За допомогою ajax-запиту вивести погоду
q=XXX - місто, для якого показати погоду
temp – температура
pressure - тиск
description – опис
humidity – вологість 
speed – швидкість вітру
deg - напрям у градусах
icon - значок, де 10d код іконки
http://openweathermap.org/img/w/10d.png
*/

const button = document.querySelector('button');


async function fetchData () {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log(data);
        
        const body = document.querySelector('body');
        const table = document.createElement('table');
        body.appendChild(table);

        const weatherObj = {nameCity:`${data.name}`, 
                            temp:`${data.main.temp}`, 
                            pressure:`${data.main.pressure}`,
                            description: `${data.weather[0].description}`,
                            humidity: `${data.main.humidity}`,
                            speed: `${data.wind.speed}`,
                            deg: `${data.wind.deg}`,
                            icon: `<img src="http://openweathermap.org/img/w/10d.png" alt="icon">` }
        console.log(weatherObj);

        for (const key in weatherObj) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML += `${key}: ${weatherObj[key]}`

            }

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

button.addEventListener('click', fetchData);



  