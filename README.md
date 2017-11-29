# Pied Finder

### An awesome new Web app which allows you to easily search through episodes of the hit tv show Silicon Valley.

## Set-up

To get the project running locally, first make sure you have node and npm installed.
You can check by typing:

```
node -v
```

```
npm -v
```

Next, clone the repository, navigate into the project directory and run:

```
npm install
```
You will need to have gulp installed globally on your local machine in order to run the app:
```
npm install -g gulp
```

Once that's all installed successfully, simply run:
```
gulp
```
And you're good to go!

## API
The API can be accessed by running the `gulp` command above and then navigating to:
```
http://localhost:3000/episodes
```
You can filter it using search queries in the URL. If you want to return all the episodes for a season for instance, you can type:
```
http://localhost:3000/episodes?season=1
```
for example.

## Tests
To run the tests, you will need to have installed Karma and jasmine globally as well as the Google Chrome browser (please install the last one seperately):
```
npm install -g karma jasmine/core karma-jasmine
```
Then run the tests with:
```
karma start
```

