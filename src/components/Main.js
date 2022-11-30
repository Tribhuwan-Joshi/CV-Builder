import React, { Component } from "react";

class EducationData extends Component {
  render() {
    const edu = this.props.edu;
    return (
      <>
        <div className="edu--degree font-semibold">
          {edu.degree}
        </div>
        <div className="edu--college text-sm">
          {edu.college}
        </div>
        <div className="edu--date text-sm">{edu.from} - {edu.to}</div>
      </>
    );
  }
}
class ExperienceData extends Component {
  render() {
    const exp = this.props.exp;
    return (
      <>
        <div className="exp--pos font-semibold">{exp.pos}</div>
        <div className="exp--company">{exp.company}</div>
        <div className="exp--date text-sm">{exp.from} - {exp.to}</div>
        <div className="mt-1 font-semibold underline">Task</div>
        <div className="exp--work h-[100px] w-[80%] overflow-y-auto text-sm word-wrap">
         {exp.task}
        </div>
      </>
    );
  }
}
class ContactData extends Component {
  render() {
    const personal = this.props.personal
    return (
      <>
        <div className="linkedin">
          <span className="text-sm font-semibold mr-4">Linkedin</span>{" "}
          <a
            href={personal.linkedin}
            className="font-italic underline text-blue-600 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {personal.linkedin}
          </a>
        </div>
        <div className="email">
          <span className="font-semibold mr-4">Email</span>{" "}
          <span className="text-sm ">{personal.email}</span>
        </div>
        <div className="Phone">
          <span className="text-sm font-semibold mr-4">Phone</span>{" "}
          <span className="text-sm ">{personal.phone}</span>
        </div>
      </>
    );
  }
}
class RightSection extends Component {
  render() {
    const { personal, edu, exp } = this.props.data;
    return (
      <section className="bg-[#D8D9CF] flex justify-center items-center">
        <div className="h-[90%] shadow-md overflow-y-auto  w-[60%] bg-white ">
          <header className="h-[12%] bg-[#947EC3] text-white flex p-2 items-center">
            <div className="right--nameInfo">
              <div className="name text-3xl">{personal.name}</div>
              <div className="profession">{personal.profession}</div>
            </div>
          </header>
          <main className="p-1 space-y-2 px-4">
            <div className="education ">
              <div className="text-2xl font-sans  font-semibold underline-offset-2 underline mt-2 mb-1">
                Education
              </div>
              <EducationData edu={edu} />
            </div>
            <hr className="bg-black h-[2px] border-b-0" />
            <div className="experience h-full w-full">
              <div className="text-2xl font-sans  font-semibold underline-offset-2 underline mt-2 mb-1">
                Experience
              </div>
              <ExperienceData exp={exp} />
            </div>
            <hr className="bg-black h-[2px] border-b-0" />
            <div className="contact -mt-10">
              <div className="text-2xl font-sans  font-semibold underline-offset-2 mb-2 underline">
                Contact
              </div>
              <ContactData personal={personal} />
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
        <div className=" grid grid-cols-2 grid-rows-3 gap-2 overflow-x-auto">
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
          <div className="w-[100%] h-[50px]">
            <textarea
              className="border-gray-700 w-full h-[full] text-sm outline-none border"
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
          <form className="space-y-8">
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
    const { click, data } = this.props;

    return (
      <main className="flex-1 grid grid-cols-[repeat(2,minmax(700px,1fr))]">
        <LeftSection data={data} click={click} />
        <RightSection data={data} />
      </main>
    );
  }
}
