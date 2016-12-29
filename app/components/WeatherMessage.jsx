var React = require("react");

//Stateless Component
//Destructuring the default props parameter
var WeatherMessage = ({temp, location}) => { //Stateless Component

  return (
    <h3>It is {location} raining in {temp}!</h3>
  );
};

module.exports = WeatherMessage;
