##ExploreCountriesFrontEnd_React

A simple front-end react app to explore countries by retrieving general information about each one such as their Capitals, Flags, Cities and else more.

Inside the react app there is 4 main components the Home, Navbar, Country and Currency.
the react app is configuerd to send request to the back-end service and displaying the response in human readable data using html and CSS for the layout.

In the home page by default all the countries are retrieved with there capital and flag along with an Accordion to display ISO codes for each country,
its all done by the GET method which gets sent from the react app on first running to the back-end endpoint the one that was made in the spring service. 
To explore more about the country and displaying the cities there is a button named Explore Country it sends a POST request directly to the API with the country name as a param,
and the response will be placed in side the Accordion from the offcanvas you could choose to go home or to retrieve country currencies. 

###

Language used to code: JavaScript

Framework used for back-end development: React.