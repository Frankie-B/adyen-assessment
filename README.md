This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[Live Demo]()

## Task

Jamie's vacation is about to end. She works at an international company, so she can choose another office to work from: either Amsterdam, Madrid, or Budapest. Help her choose which office to go to – she’d like someplace with good weather or cheap flights (or both).

If you'd like to use an API (it's optional), you could try the
Weather API ( https://developer.accuweather.com ), the Kiwi API ( https://docs.kiwi.com ), or another of your choosing.

## Decisions And Reflections

I chose to create an SPA using React.js.

I chose to use SCSS, because it allowed for the Scoping of style rules.

I chose to use OpenWeatherMap API to get back weather data and the kiwi api for the flight information. This however did not come without its own set of challenges. The Kiwi flight api in the end turned out to be quite limiting in a couple of breaking ways.

- Madrid was included in the return data in the kiwi flight data, so I modified that city to barcelona.

- The params for the requests were less than ideal For departing location, they use ITIA Airport short code for searching flight. Since this is also just a sample call the only airport jamie can actually depart from is London Heathrow (LHR).

- The second input i feel should have been a date input, due to the format of date from an input being yyyy/mm/dd this also would not work for the request which needed to be dd/mm/yyyy. I worked around that making the type text simply to allow for the correct parameter date format.

The use of the api forces a lot of assumptions. That Jamie knows airport short codes, and that she would be leaving from London Heathrow. while not realistic, work for the demonstration purposes.
