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
          emial: "yourCoolemail@gmail.com",
          linekdin: "https://linkedin.com/cool",
        },
        edu: {
          college: "Your college",
          degree: "Your degree",
          from: "12-08-12",
          to: "12/08/2005",
        },
        exp: {
          company: "Intellects",
          pos: "Junior Data Scientist",
          from: "12/02/2008",
          tasks:"Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
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
