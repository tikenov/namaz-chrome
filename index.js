const api = "https://namaz.muftyat.kz/kk/api/times/2021";
const result = document.querySelector(".result");
const data = {
  "cities": [
    {
      "name": "Oskemen",
      "coordinate": "49.95/82.616667"
    },
    {
      "name": "Nur-sultan",
      "coordinate": "51.133333/71.433333"
    },
    {
      "name": "Aqtobe",
      "coordinate": "50.3/57.166667"
    }
  ]
};

const searchForCountry = async () => {
  try {
    const response = await axios.get(`${api}/49.95/82.616667`);
    result.innerText = response.data.city_name
  } catch (error) {
    result.innerText = JSON.stringify(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  searchForCountry();
})