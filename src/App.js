import React from 'react';
import './App.css';
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CircularProgress from "./components/CircularProgress";
import ErrorBoundary from "./components/ErrorBoundary";
const Counter = lazy(() => import("./features/counter/Counter"));
const Test = lazy(() => import("./features/test/Test"));

function App() {
  return (
    <ErrorBoundary>
            <Suspense fallback={<CircularProgress />}>
              <>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Counter />
                        </Route>
                        <Route exact path="/test">
                            <Test />
                        </Route>
                    </Switch>
                </Router>
				        <div className="App">
                  <header>
                    <p>
                      Add your pages to <code>src/features</code> and add routed to the <code>src/App.js</code>.
                    </p>
                    <span>
                      <span>Learn </span>
                      <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React
                      </a>
                      <span>, </span>
                      <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Redux
                      </a>
                      <span>, </span>
                      <a
                        className="App-link"
                        href="https://material-ui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Material UI
                      </a>
                      <span>, </span>
                      <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Redux Toolkit
                      </a>
                      ,<span> and </span>
                      <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React Redux
                      </a>
                    </span>
                  </header>
                </div>
                </>
            </Suspense>
        </ErrorBoundary>
  );
}

export default App;
