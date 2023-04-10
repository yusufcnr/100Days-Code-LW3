// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour, teslaBottomColour],
  speedStats: { topSpeed: teslaTopSpeed, teslaZeroToSixty },
} = tesla;
const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour, hondaBottomColour],
  speedStats: { topSpeed: hondaTopSpeed, hondaZeroToSixty },
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
