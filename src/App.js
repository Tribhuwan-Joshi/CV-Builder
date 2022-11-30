import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personal: {
          name: "Your Name",
          profession: "Your profession",
          phone: "+98 1234352",
          email: "yourCoolemail@gmail.com",
          linkedin: "https://linkedin.com/cool",
        },
        edu: {
          college: "Your college",
          degree: "Your degree",
          from: "2015",
          to: "2020",
        },
        exp: {
          company: "Intellects",
          pos: "Junior Data Scientist",
          from: "2012",
          to: "2030",
          task:"All the React components can have a state associated with them. The state of a component can change either due to a response to an action performed by the user or an event triggered by the system. Whenever the state changes, React re-renders the component to the browser. Before updating the value of the state, we need to build an initial state setup. Once we are done with it, we use the setState() method to change the state object. It ensures that the component has been updated and calls for re-rendering of the component.setState is asynchronous call means if synchronous call get called it may not get updated at right time like to know current value of object after update using setState it may not get give current updated value on console. To get some behavior of synchronous need to pass function instead of object to setState."
        },
        
      },
    };
    this.click = this.click.bind(this);
  }
  click(e) {
    e.preventDefault();
    console.log(this.state.data);
  }
  render() {
    return (
      <>
        <Header />
        <Main data={this.state.data} click={this.click} />
        <Footer />
      </>
    );
  }
}
