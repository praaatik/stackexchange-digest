//libraries
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

//components
import CardHolder from "./components/CardHolder";
import { sites } from "./sites";
import SpecificCard from "./components/SpecificCard";
import Themer from "./components/Themer";
import Navbar from "./components/Navbar";
import Tag from "./components/Tag";
import Footer from "./components/Footer";

//stylesheets
import "./stylesheets/App.scss";

//styled-components and theme related imports
import { GlobalStyles } from "./styled-components/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-components/theme";

function App() {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [loading, setLoading] = useState(true);

  const siteURLs = [];

  const fetchData = () => {
    sites.map((s) => {
      siteURLs.push(
        `https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=${s}&filter=!L_(IB3Vfl8G6UL78mkS_Nm`
      );
    });

    axios.all(siteURLs.map((s) => axios.get(s))).then(
      axios.spread((...allData) => {
        allData.map((a) => {
          setQuestions((questions) => questions.concat(a.data.items[0].link));
          setTitle((title) => title.concat(a.data.items[0].title));
        });
        setLoading(false);
      })
    );
  };

  function themeToggle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <GlobalStyles />
          <Navbar />
          <Themer clicked={themeToggle} currentTheme={theme} />
          {loading ? (
            <CircularProgress
              color="black"
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                top: "50%",
              }}
            />
          ) : (
            <Switch>
              <Route path="/" exact>
                <CardHolder sites={sites} questions={questions} title={title} />
              </Route>

              {/* <Route path="/specific/:id" component={SpecificCard} exact></Route> */}

              {/* notice the ...props which have been passed, it is needed to pass in the default props as well */}
              {/* Also notice the usage of render instead of component to avoid re-mounting */}
              {/* Refer = https://stackoverflow.com/a/43299633/6438526 */}
              <Route
                path="/specific/:id"
                render={(props) => <SpecificCard theme={theme} {...props} />}
                exact
              ></Route>
              <Route
                path="/specific/tag/:id"
                render={(props) => <Tag {...props} />}
                exact
              ></Route>
            </Switch>
          )}

          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

/*******************************
 * https://stackexchange.com/hot-questions-for-mobile for the hot questions
 * https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=${}&filter=!L_(IB3Vfl8G6UL78mkS_Nm
 *
 * (title, link), tags, owner - (name, link), creation date, isanswered
 *
 *
 ******************************/
