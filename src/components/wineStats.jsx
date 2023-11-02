import React, { useState } from 'react';
import { wineDataset } from '../data';




// Function to calculate mean, median, and mode for a property within each alcohol class
const calculateMeasures = (dataset, property) => {
  const classes = {};
  dataset.forEach(data => {
    const alcoholClass = data.Alcohol;
    if (!classes[alcoholClass]) {
      classes[alcoholClass] = [];
    }
    classes[alcoholClass].push(data[property]);
  });

  const classStats = {};
  for (const alcoholClass in classes) {
    const values = classes[alcoholClass];
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const sortedValues = values.sort((a, b) => a - b);
    const median = sortedValues[Math.floor(sortedValues.length / 2)];

    const counts = {};
    let mode = null;
    let maxCount = 0;
    values.forEach(value => {
      counts[value] = (counts[value] || 0) + 1;
      if (counts[value] > maxCount) {
        maxCount = counts[value];
        mode = value;
      }
    });

    classStats[alcoholClass] = { mean, median, mode };
  }

  return classStats;
};

// Function to calculate the "Gamma" property for each data point in the dataset
const createGammaProperty = (dataset) => {
  dataset.forEach(data => {
    data.Gamma = (data.Ash * data.Hue) / data.Magnesium;
  });
};

const WineStats = () => {
  // Calculate "Gamma" property for each data point
  createGammaProperty(wineDataset);

  // Calculate statistics for "Flavanoids" and "Gamma" properties
  const flavanoidsStats = calculateMeasures(wineDataset, 'Flavanoids');
  const gammaStats = calculateMeasures(wineDataset, 'Gamma');
 

  return (
    <div>
      <h2>Flavanoids Statistics</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(flavanoidsStats).map(alcoholClass => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {Object.keys(flavanoidsStats).map(alcoholClass => (
              <td key={alcoholClass}>{flavanoidsStats[alcoholClass].mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {Object.keys(flavanoidsStats).map(alcoholClass => (
              <td key={alcoholClass}>{flavanoidsStats[alcoholClass].median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {Object.keys(flavanoidsStats).map(alcoholClass => (
              <td key={alcoholClass}>{flavanoidsStats[alcoholClass].mode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <h2>Gamma Statistics</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(gammaStats).map(alcoholClass => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {Object.keys(gammaStats).map(alcoholClass => (
              <td key={alcoholClass}>{gammaStats[alcoholClass].mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {Object.keys(gammaStats).map(alcoholClass => (
              <td key={alcoholClass}>{gammaStats[alcoholClass].median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {Object.keys(gammaStats).map(alcoholClass => (
              <td key={alcoholClass}>{gammaStats[alcoholClass].mode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStats;
