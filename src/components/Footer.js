import React, { Component } from "react";
import gitsvg from "../assets/github.jpg";
export default class Footer extends Component {
  render() {
    return (
      <footer className="h-8 w-full bg-gray-700 text-white flex justify-center items-center font-mono  tracking-wide">
        The classic CV builder{" "}
        <a
          className="ml-2"
          href="https://github.com/Tribhuwan-Joshi"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <img src={gitsvg} className="h-[32px] w-[32px]" alt="github" />
        </a>
      </footer>
    );
  }
}
