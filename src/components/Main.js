import React, { Component } from "react";

class LeftSection extends Component {
  render() {
    return (
      <section className="bg-slate-400 flex justify-center items-center">
        <div className="h-[90%] shadow-md  w-[80%] bg-slate-100"></div>
      </section>
    );
  }
}
class RightSection extends Component {
  render() {
    return (
      <section className="bg-yellow-400 flex justify-center items-center">
        <div className="h-[90%] shadow-md  w-[60%] bg-slate-100">
          <header className="h-[12%] bg-blue-600 text-white flex p-2 items-center">
            <div className="right--nameInfo">
              <div className="name text-3xl">Tribhuwan Joshi</div>
              <div className="pos">Senior Research Scientist</div>
            </div>
            {/* <div className="right--contact text-sm">
              <div className="right--mobileNo ">+91 12212345</div>
              <div className="right--emailId">mycoolemail@gmail.com</div>
            </div> */}
          </header>
        </div>
      </section>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <main className="flex-1 grid grid-cols-[repeat(2,minmax(300px,1fr))]">
        <LeftSection />
        <RightSection />
      </main>
    );
  }
}
