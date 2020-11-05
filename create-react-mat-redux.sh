#!/usr/bin/env bash
echo ""
echo "Installing React with material and redux"
echo ""
if [[ "$1" = "" ]]; then
  read -p "React project folder name: " folder
else
  folder=$1
  echo "React project folder name: $folder"
fi

# create sample react app
npx create-react-app $folder --template redux && cd $folder


# install dependencies
npm i @material-ui/core @material-ui/icons @material-ui/lab jss jss-rtl react-router-dom prop-types


# downloads

mkdir -p src/components
mkdir -p src/features/test
# add components
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/components/CircularProgress.js > src/components/CircularProgress.js
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/components/ErrorBoundary.js > src/components/ErrorBoundary.js

# add test route page
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/features/test/Test.js > src/features/test/Test.js

# Replace counter
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/features/counter/Counter.js > src/features/counter/Counter.js

# add index.js and App.js
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/AppStyleProvider.js > src/AppStyleProvider.js
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/App.js > src/App.js
curl https://raw.githubusercontent.com/GO-gyan/create-react-mat-redux/master/src/index.js > src/index.js


npm i
npm start