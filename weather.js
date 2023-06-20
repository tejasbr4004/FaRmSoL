let image1 = document.querySelector('#weatherimg');
let image2 = document.querySelector('#weatherimg2');
let image3 = document.querySelector('#weatherimg3');
var img1 = document.createElement('img');
var img2 = document.createElement('img');
var img3 = document.createElement('img');
image1.appendChild(img1);
image2.appendChild(img2);
image3.appendChild(img3);





const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84381d76a8msheb027c69cac5054p103592jsn979f77f212c0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			temp.innerHTML = response.temp;
			humidity.innerHTML = response.humidity;
			wind_speed.innerHTML = response.wind_speed;

            // temperature image changing
			if (parseInt(temp.innerHTML) >= 25) {
				
				
				img1.src = 'https://cdn-icons-png.flaticon.com/512/1684/1684375.png';
				img1.style.height = '70px';
				img1.style.width = '70px';
				
			}
			else if(parseInt(temp.innerHTML)<25 && parseInt(temp.innerHTML)>=20){
				
				img1.src = 'https://cdn-icons-png.flaticon.com/512/6218/6218295.png';
				img1.style.height = '70px';
				img1.style.width = '70px';
				
			}
			else if(parseInt(temp.innerHTML)<20){
				
				
				img1.src='https://cdn-icons-png.flaticon.com/512/2322/2322701.png';
				img1.style.height = '70px';
				img1.style.width = '70px';
				
			}


			// humidity image changing
            if(parseInt(humidity.innerHTML)<20){
				img2.src='https://cdn-icons-png.flaticon.com/512/481/481453.png';
				img2.style.height = '70px';
				img2.style.width = '70px';
			}

            else if(parseInt(humidity.innerHTML)>=20 && parseInt(humidity.innerHTML)<=50){
				img2.src='https://cdn-icons-png.flaticon.com/512/481/481453.png';
				img2.style.height = '70px';
				img2.style.width = '70px';
			}
			else if(parseInt(humidity.innerHTML)>50){
				img2.src='https://cdn-icons-png.flaticon.com/512/5664/5664993.png';
				img2.style.height = '70px';
				img2.style.width = '70px';
			}


            // windspeed image changing
			if(parseFloat(wind_speed.innerHTML)<=1.0){
				img3.src='https://cdn-icons-png.flaticon.com/512/6015/6015171.png';
				img3.style.height = '70px';
				img3.style.width = '70px';
			}
			else if(parseFloat(wind_speed.innerHTML)>1.0 && parseFloat(wind_speed.innerHTML)<2.0){
				img3.src='	https://cdn-icons-png.flaticon.com/512/6014/6014856.png';
				img3.style.height = '70px';
				img3.style.width = '70px';
			}
			else if(parseFloat(wind_speed.innerHTML)>=2.0){
				img3.src='https://cdn-icons-png.flaticon.com/512/5532/5532989.png';
				img3.style.height = '70px';
				img3.style.width = '70px';
			}
		})
		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getweather(city.value)
})

//by default i am calling bangalore- this will give bangalore weather wen we open the website
getweather("Tumkur");



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		hydertemp.innerHTML = response.temp;
		hyderhumidity.innerHTML = response.humidity;
		hyderwind_speed.innerHTML = response.wind_speed;
		hydercloud.innerHTML=response.cloud_pct;
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		delhitemp.innerHTML = response.temp;
		delhihumidity.innerHTML = response.humidity;
		delhiwind_speed.innerHTML = response.wind_speed;
		delhicloud.innerHTML=response.cloud_pct;
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		mumbaitemp.innerHTML = response.temp;
		mumbaihumidity.innerHTML = response.humidity;
		mumbaiwind_speed.innerHTML = response.wind_speed;
		mumbaicloud.innerHTML=response.cloud_pct;
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		chennaitemp.innerHTML = response.temp;
		chennaihumidity.innerHTML = response.humidity;
		chennaiwind_speed.innerHTML = response.wind_speed;
		chennaicloud.innerHTML=response.cloud_pct;
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		bengatemp.innerHTML = response.temp;
		bengahumidity.innerHTML = response.humidity;
		bengawind_speed.innerHTML = response.wind_speed;
		bengacloud.innerHTML=response.cloud_pct;
	})
	.catch(err => console.error(err));

