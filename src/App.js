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
          edu_from: "2015",
          edu_to: "2020",
        },
        exp: {
          company: "Intellects",
          pos: "Junior Data Scientist",
          exp_from: "2012",
          exp_to: "2030",
          task: "All the React components can have a state associated with them. The state of a component can change either due to a response to an action performed by the user or an event triggered by the system. Whenever the state changes, React re-renders the component to the browser. Before updating the value of the state, we need to build an initial state setup. Once we are done with it, we use the setState() method to change the state object. It ensures that the component has been updated and calls for re-rendering of the component.setState is asynchronous call means if synchronous call get called it may not get updated at right time like to know current value of object after update using setState it may not get give current updated value on console. To get some behavior of synchronous need to pass function instead of object to setState.",
        },
      },
      editOn: true,
    };
    this.click = this.click.bind(this);
  }
  click(e) {
    e.preventDefault();
    if (this.state.editOn) {
      let name = document.querySelector('input[name="name"]').value;
      let profession = document.querySelector('input[name="profession"]').value;
      let phone = document.querySelector('input[name="phone"]').value;
      let email = document.querySelector('input[name="email"]').value;
      let linkedin = document.querySelector('input[name="linkedin"]').value;
      const personal = { name, profession, phone, email, linkedin };
      let college = document.querySelector('input[name="collegeName"]').value;
      let degree = document.querySelector('input[name="degree"]').value;
      let edu_from = new Date(
        document.querySelector('input[name="edu_from"]').value
      ).getFullYear();
      let edu_to = new Date(
        document.querySelector('input[name="edu_to"]').value
      ).getFullYear();

      const edu = { college, degree, edu_from, edu_to };

      let task = document.querySelector('textarea[name="task"]').value;
      let company = document.querySelector('input[name="companyName"]').value;
      let pos = document.querySelector("input[name='pos']").value;
      let exp_from = new Date(
        document.querySelector("input[name='exp_from']").value
      ).getFullYear();
      let exp_to = new Date(
        document.querySelector("input[name='exp_to']").value
      ).getFullYear();

      const exp = { task, company, pos, exp_from, exp_to };

      this.setState({
        data: {
          ...this.state.data,
          personal: personal,
          edu: edu,
          exp: exp,
        },
      });
    }

    this.setState({
      editOn: !this.state.editOn,
    });
  }
  render() {
    return (
      <>
        <Header />
        <Main
          data={this.state.data}
          click={this.click}
          editOn={this.state.editOn}
        />
        <Footer />
      </>
    );
  }
}
