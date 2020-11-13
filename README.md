# WeatherNow

A Full Stack Application (React, Express, Node) that fetches real time weather data from the Mapbox and WeatherStack API.


#### Introduction 

This repo consists of a Weather Application built with React Hooks and NodeJS. 

Front End: Utilized React Hooks over class based components for its improved ability to share logic across components. JSX is styled and rendered dynamically based on the searched location, and async spinner was added to improve UX.

Back End: Express route consists of two subsequent GET requests. First to the MapBox API, then the WeatherStack API, and returns an original JSON object for use in the UI. The client is server side rendered via express. 

#### Features 
This application provides the following features

- Search Engine that retrieves real time weather data from around the world
- Dynamic UI that changes based on the time of day of search criteria
- Asynchronous Spinner is rendered in between AJAX Requests to improve User Experience. 

