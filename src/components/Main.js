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

class EducationData extends Component {
  render() {
    return (
      <>
        <div className="edu--degree font-semibold">
          Bachelor of Computer Application
        </div>
        <div className="edu--college text-sm">
          National Institute of Intellects
        </div>
        <div className="edu--date text-sm">2018 - 2022</div>
      </>
    );
  }
}
class ExperienceData extends Component {
  render() {
    return (
      <>
        <div className="exp--pos font-semibold">Junior Data Scientist</div>
        <div className="exp--company">Intellects</div>
        <div className="exp--date text-sm">2023 - 2028</div>
        <div className="mt-1 font-semibold underline">Task</div>
        <div className="exp--work h-[50%] w-[90%] overflow-y-auto text-sm word-wrap">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue.
        </div>
      </>
    );
  }
}
class ContactData extends Component {
  render() {
    return (
      <>
        <div className="linkedin">
          <span className="text-sm font-semibold mr-4">Linkedin</span>{" "}
          <a
            href="www.youtube"
            className="font-italic text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://linkedin.com/cool
          </a>
        </div>
        <div className="email">
          <span className="font-semibold mr-4">Email</span>{" "}
          <span className="text-sm ">dripfullemail@outlook.com</span>
        </div>
        <div className="Phone">
          <span className="text-sm font-semibold mr-4">Phone</span>{" "}
          <span className="text-sm ">+23 2332312343</span>
        </div>
      </>
    );
  }
}
class RightSection extends Component {
  render() {
    return (
      <section className="bg-yellow-400 flex justify-center items-center">
        <div className="h-[90%] shadow-md overflow-y-auto  w-[60%] bg-slate-100 ">
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
          <main className="p-1 space-y-2 px-4">
            <div className="education ">
              <div className="text-2xl font-sans  font-semibold underline-offset-2 underline mt-2 mb-1">
                Education
              </div>
              <EducationData />
            </div>
            <hr className="bg-black h-[2px] border-b-0" />
            <div className="experience h-full w-full">
              <div className="text-2xl font-sans  font-semibold underline-offset-2 underline mt-2 mb-1">
                Experience
              </div>
              <ExperienceData />
            </div>
            <hr className="bg-black h-[2px] border-b-0" />
            <div className="contact -mt-10">
              <div className="text-2xl font-sans  font-semibold underline-offset-2 mb-2 underline">
                Contact
              </div>
              <ContactData />
            </div>
          </main>
        </div>
      </section>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <main className="flex-1 grid grid-cols-[repeat(2,minmax(500px,1fr))]">
        <LeftSection />
        <RightSection />
      </main>
    );
  }
}
