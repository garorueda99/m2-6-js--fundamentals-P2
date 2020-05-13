let winningNumbers = [4, 17, 38, 9];
let firstPlace = winningNumbers[0];
let secondPlace = winningNumbers[1];
let thirdPlace = winningNumbers[2];
console.log(
  `The top three winners are: ${firstPlace}, ${secondPlace}, ${thirdPlace}.`
);

function deconst(data) {
  let [firstPlace, secondPlace, thirdPlace] = data;
  console.log(
    `De-construct. The winner numbers are: ${firstPlace}, ${secondPlace}, ${thirdPlace}`
  );
}

deconst(winningNumbers);

let weatherData = {
  city: "Toronto",
  weather: "sunny",
  temperature: 23,
};

function printWeather(data) {
  console.log(
    `It is ${data.weather} in ${data.city}, with a high of ${data.temperature}.`
  );
}

printWeather(weatherData);

function handleChange(event) {
  let { value } = event.target;
  console.log(value);
}
let input = document.querySelector("input");
input.addEventListener("change", handleChange);
