// Foursquare API Info
const clientId = "W1453P1A3GWK4R2HCZHK1GRVJUQTB1J1RJWW3SUUJ5BHCQZ1";
const clientSecret = "ZV5ZNFUVJVZNYHNUH322KC0SP2FMC2ERXBFCOVLY4QTFCDIU";
const url = "https://api.foursquare.com/v2/venues/explore> near=";

// OpenWeather Info
const openWeatherKey = "";
const weatherUrl = "";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Add AJAX functions here:
const getVenues = () => {};

const getForecast = () => {};

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = "";
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (day) => {
  // Add your code here:

  let weatherContent = "";
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach((venue) => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues();
  getForecast();
  return false;
};

$submit.click(executeSearch);
