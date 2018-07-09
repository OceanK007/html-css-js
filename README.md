We are creating 3 responsive full website using bootstrap.

1. index.html
2. band.html
3. startup.html

-----------------------------------------------------------

* To install sass:

1. Go to https://sass-lang.com/install
2. Click git link : https://github.com/sass/dart-sass/releases/tag/1.9.0
3. Download required file
4. Extract file to a particular destination.
5. Add "D:\Ocean\dart-sass" in environment variable.

-----------------------------------------------------------

* To check if sass installed or not:

Open command prompt and type "sass --version"

-----------------------------------------------------------

* Sass commands:

// To check version
sass --version	

// To convert one file.scss to file.css
sass --watch input.scss output.css	

// To convert whole scss folder to css folder
sass --watch sourceFolder/sassFolder:targetFolder/cssFolder	

// To convert particular path file.scss to specific path with specific name newFileName.css
sass --watch sourceFolder/sourceFilename.scss:targetFolder/targetFilename.css	

-----------------------------------------------------------

* Commands used to convert .scss to .css

1. sass --watch scss/style.scss:css/style.css
2. sass --watch scss/startup.scss:css/startup.css
3. sass --watch scss/band.scss:css/band.css

