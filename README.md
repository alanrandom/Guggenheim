Hello! This project was completed just now (2/13/2020). I'm not much of a frontend guy, so this was a challenge! Here's what I have:

I created an Angular front end and a C# backend. The user can input ride details into fields on the front end, and those values
get sent to the backend, some calculations are done, and a final price for the ride is returned to the client. 

Instructions to run code/use meter:

build and run the GuggenheimFinal solution (built in Visual Studio 2019). Also, download angular cli and run ng serve in the 
GuggenHeimFrontEnd folder. The URL is http://localhost:4200/ for the frontend, and you should be able to enter in values to the 
different fields at this point. Clicking "Get Price for Ride" button will send the data to the built solution (GuggenheimFinal), 
and after some calculations it will send back your total value, displayed underneath the button.

Testing:
To run the backend tests, you can simply use visual studio to run the tests in GuggenheimFinal/GuggenheimFinal.Tests/UnitTests.cs. 
To run frontend tests, you can run ng test (again, need angular CLI) in any directory with a .spec.ts file (should be in 
GuggenHeimFrontEnd/src/app, and GuggenHeimFrontEnd/src/app/Charges). Tests used Jasmine with karma. 
To run integration tests, you will need protractor. Go to GuggenHeimFrontEnd/e2e, and run protractor protractor.conf.js to 
get end-to-end tests. 

