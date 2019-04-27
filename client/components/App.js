import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./Home";
import { ApolloConsumer } from "react-apollo";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import ItemDetail from "./ItemDetail";
import requireAuth from "./requireAuth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloConsumer>
          {client => (
            <React.Fragment>
              <Header />
              <main className="main-content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/signup" component={SignupForm} />
                  <Route path="/dashboard" component={requireAuth(Dashboard)} />
                  <Route
                    exact
                    path="/detail/:selectedItem"
                    component={ItemDetail}
                    // render={props => <ItemDetail {...props} />}
                  />
                </Switch>
              </main>
              <Container>
                <Footer />
              </Container>
            </React.Fragment>
          )}
        </ApolloConsumer>
      </BrowserRouter>
    );
  }
}

export default App;
