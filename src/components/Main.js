import React, { Component } from "react";

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
            className="font-italic underline text-blue-600 text-sm"
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
              <div className="profession">Senior Research Scientist</div>
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

class PersonalForm extends Component {
  render() {
    return (
      <fieldset className="border-[1px] p-4 border-black">
        <legend className="text-center font-semibold">
          Personal information
        </legend>
        <div className=" grid grid-cols-2 grid-rows-3 gap-5 overflow-x-auto">
          <div className="flex gap-3">
            <label htmlFor="name">Name</label>
            <input id="name" required />
          </div>
          <div className="flex gap-3">
            <label htmlFor="profession">Profession</label>
            <input id="profession" required />
          </div>
          <div className="flex gap-3">
            <label htmlFor="phone">Phone</label>
            <input type="tel" required id="phone" />
          </div>
          <div className="flex gap-3">
            <label htmlFor="email">Email</label>
            <input id="email" required type="email" />
          </div>
          <div className="col-start-1 col-end-3  flex gap-2 items-center  ">
            <label htmlFor="linkedin">Linkedin Profile</label>
            <input type="url" id="linkedin" className="w-[60%]" />
          </div>
        </div>
      </fieldset>
    );
  }
}
class EducationForm extends Component {
  render() {
    return (
      <fieldset className="border-[1px] p-4  border-black">
        {" "}
        <legend className="text-center font-semibold">
          Education Background
        </legend>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div>
              <label htmlFor="collegeName" className="mr-2">
                College Name
              </label>
              <input type="text" id="collegeName" required />
            </div>
            <div>
              <label htmlFor="profession" className="mr-2">
                Degree
              </label>
              <input type="text" id="profession" required />
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div>
              <label className="mr-4" htmlFor="from-edu">
                From
              </label>
              <input type="date" id="from-edu" required />
            </div>
            <div>
              <label className="mr-4" htmlFor="to-edu">
                To
              </label>
              <input type="date" id="to-edu" required />
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
class ExperienceForm extends Component {
  render() {
    return (
      <fieldset className="border-[1px] p-4  border-black">
        <legend className="text-center font-semibold">Experience</legend>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div>
              <label className="mr-2" htmlFor="company-name">
                Company
              </label>
              <input id="company-name" required />
            </div>
            <div>
              <label htmlFor="company-pos" className="mr-2">
                Position
              </label>
              <input required id="company-pos" />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label className="mr-2" htmlFor="work-form">
                {" "}
                Work From
              </label>
              <input type="date" required id="work-form" />
            </div>
            <div className="mr-4">
              <label className="mr-2" htmlFor="work-to">
                {" "}
                To
              </label>
              <input type="date" id="work-to" required />
            </div>
          </div>
          <div className="w-[100%] h-[50px] bg-red-500">
            <textarea
              className="border-gray-700 w-full h-full text-sm outline-none border"
              placeholder=" Describe your task briefly"
            ></textarea>
          </div>
        </div>
      </fieldset>
    );
  }
}

class LeftSection extends Component {
  render() {
    const { click } = this.props;
    return (
      <section className="bg-slate-400 flex justify-center items-center">
        <div className="h-[90%] overflow-y-auto  shadow-md p-2 w-[80%] bg-slate-100">
          <div className="italic underline underline-offset-1 mb-4">
            Please provide the information to build your cv{" "}
          </div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <PersonalForm />
            <EducationForm />
            <ExperienceForm />
            <div className="w-full flex justify-center">
              <button
                className="bg-gray-300 px-2 py-1 font-mono border-black border-[1px]  active:bg-gray-600 hover:bg-gray-500 hover:text-white"
                onClick={click}
              >
                Create CV
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default class Main extends Component {
  render() {
    const { click } = this.props;
    return (
      <main className="flex-1 grid grid-cols-[repeat(2,minmax(700px,1fr))]">
        <LeftSection click={click} />
        <RightSection />
      </main>
    );
  }
}
