# Wine Statistics React Component

This React component calculates and displays statistics for a wine dataset. It provides information about Flavanoids and Gamma properties for different classes of wine.

## Getting Started

To use this component, follow these steps:

1. Clone or download the repository to your local machine.

2. Install the necessary dependencies by running: 
## npm install

3. Run the React development server:
 ## yarn start  
 or
 ## npm start

4. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to see the component in action.

## Usage

This component does the following:

- Calculates the mean, median, and mode of Flavanoids and Gamma properties for different wine classes.

## Example

Here's how you can use the WineStats component in your React application:

```jsx
import React from 'react';
import WineStats from './WineStats'; // Adjust the import path

function App() {
return (
 <div>
   <h1>Wine Statistics</h1>
   <WineStats />
 </div>
);
}

export default App;


