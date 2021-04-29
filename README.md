# My stocks application

 Overview:
 My stocks application to view details of individual stocks, filter based on tags and delete action on row.

 How to run locally:
    1. Clone the application 
        git clone https://github.com/varshabelligundu/myStocks.git
    2. change directory to myStocks and run 'npm install' command 
    3. Application uses https://www.npmjs.com/package/json-server for mock json to depict API calling. 
    Run 'sudo npm install -g json-server' under myStocks directory
    Please run 'json-server --watch db.json' to start the json server and the json can be viewed using http://localhost:3000/getDetails.
    4. Install Angualar 11 by running 'sudo npm install -g @angular/cli' Run ng serve from myStocks directory and `http://localhost:4200/` to run My stocks application.
        1. Shows grid layout of 4 stocks queried from db.json file. 
        2. Onclick of the stock symbol populates the details.
        3. Tags are used to filter. 
        4. Row can be deleted. 'x' symbol is provided on row hover for delete Action 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

