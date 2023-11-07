function fetchData()
{
  let city = document.getElementById('input').value
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2fd478e42d73513557d5a40307bc1cc0`)
  .then(res=>res.json())
  .then(res=>getGeoDetail(res))
}

function getGeoDetail(res)
{
  let arr = Object.entries(res)
  let lon = (arr[0][1].lon)
  let lat = (arr[0][1].lat)
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fd478e42d73513557d5a40307bc1cc0`)
  .then(res=>res.json())
  .then(res=>display(res))
}

function display(res)
{
  let data = Object.entries(res)
  let description = data[1][1][0].description
  let temp = data[3][1].temp
  temp = (temp - 273.15).toFixed(2)
  let city = document.getElementById('input').value
  document.getElementById("city").innerHTML = "City : "+city
  document.getElementById("temp").innerHTML = "Temperature : "+temp;
  document.getElementById("description").innerHTML = "Description : "+description


}