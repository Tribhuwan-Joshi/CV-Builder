import React, { Component } from "react";

class EducationData extends Component {
  render() {
    const edu = this.props.edu;
    return (
      <>
        {edu.degree ? (
          <div className="edu--degree font-semibold">{edu.degree}</div>
        ) : (
          <div className="edu--degree font-semibold">Your degree</div>
        )}
        {edu.college ? (
          <div className="edu--college text-sm">{edu.college}</div>
        ) : (
          <div className="edu--college text-sm">College Name</div>
        )}
        {edu.edu_from && edu.edu_to ? (
          <div className="edu--date text-sm">
            {edu.edu_from} - {edu.edu_to}
          </div>
        ) : (
          <div className="edu--date text-sm">
            from - to
          </div>
        )}
        
      </>
    );
  }
}
class ExperienceData extends Component {
  render() {
    const exp = this.props.exp;
    return (
      <>
        {exp.pos ? (
          <div className="exp--pos font-semibold">{exp.pos}</div>
        ) : (
          <div className="exp--pos font-semibold">Your Position</div>
        )}
        {exp.company ? (
          <div className="exp--company">{exp.company}</div>
        ) : (
          <div className="exp--company">Company Name</div>
        )}
        {exp.exp_from && exp.exp_to ? (
          <div className="exp--date text-sm">
            {exp.exp_from} - {exp.exp_to}
          </div>
        ) : (
          <div className="exp--date text-sm">From - To</div>
        )}

        <div className="mt-1 font-semibold underline">Task</div>
        {exp.task ? (
          <div className="exp--work h-[100px] w-[80%] overflow-y-auto text-sm word-wrap">
            {exp.task}
          </div>
        ) : (
          <div className="exp--work h-[100px] w-[80%] overflow-y-auto text-sm word-wrap">
            
          </div>
        )}
      </>
    );
  }
}
class ContactData extends Component {
  render() {
    const personal = this.props.personal;
    return (
      <>
        {personal.linkedin && (
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
        )}

        <div className="email">
          <span className="font-semibold mr-4">Email</span>{" "}
          {personal.email ? (
            <span className="text-sm ">{personal.email}</span>
          ) : (
            <span className="text-sm ">Your Email</span>
          )}
        </div>
        <div className="Phone">
          <span className="text-sm font-semibold mr-4">Phone</span>{" "}
          {personal.phone ? (
            <span className="text-sm ">{personal.phone}</span>
          ) : (
            <span className="text-sm ">Phone</span>
          )}
        </div>
      </>
    );
  }
}
class RightSection extends Component {
  render() {
    const { personal, edu, exp } = this.props.data;
    console.log(personal, edu, exp);
    return (
      <section className="bg-[#D8D9CF] flex justify-center items-center">
        <div className="h-[90%] shadow-md overflow-y-auto  w-[60%] bg-white ">
          <header className="h-[12%] bg-[#947EC3] text-white flex p-2 items-center">
            <div className="right--nameInfo">
              {personal.name ? (
                <div className="name text-3xl">{personal.name}</div>
              ) : (
                <div className="name text-3xl">Your Name</div>
              )}
              {
                personal.profession ? (
                <div className="profession">{personal.profession}</div>
              ) : (
                <div className="profession">Your Profession</div>
                )
              }
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
    const editOn = this.props.editOn;
    return (
      <fieldset className="border-[1px] p-4 border-black">
        <legend className="text-center font-semibold">
          Personal information
        </legend>
        <div className=" grid grid-cols-2 grid-rows-3 gap-2 overflow-x-auto">
          <div className="flex gap-3">
            <label htmlFor="name">Name</label>
            {editOn ? (
              <input id="name" name="name" required />
            ) : (
              <input id="name" name="name" readOnly required />
            )}
          </div>
          <div className="flex gap-3">
            <label htmlFor="profession">Profession</label>
            {editOn ? (
              <input id="profession" name="profession" required />
            ) : (
              <input id="profession" readOnly name="profession" required />
            )}
          </div>
          <div className="flex gap-3">
            <label htmlFor="phone">Phone</label>
            {editOn ? (
              <input type="tel" name="phone" required id="phone" />
            ) : (
              <input type="tel" name="phone" readOnly required id="phone" />
            )}
          </div>
          <div className="flex gap-3">
            <label htmlFor="email">Email</label>
            {editOn ? (
              <input id="email" name="email" required type="email" />
            ) : (
              <input id="email" name="email" readOnly required type="email" />
            )}
          </div>
          <div className="col-start-1 col-end-3  flex gap-2 items-center  ">
            <label htmlFor="linkedin">Linkedin Profile</label>
            {editOn ? (
              <input
                type="url"
                name="linkedin"
                id="linkedin"
                className="w-[60%]"
              />
            ) : (
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                readOnly
                className="w-[60%]"
              />
            )}
          </div>
        </div>
      </fieldset>
    );
  }
}
class EducationForm extends Component {
  render() {
    const editOn = this.props.editOn;
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
              {editOn ? (
                <input type="text" id="collegeName" name="collegeName" required />
              ) : (
                <input type="text" readOnly name="collegeName" id="collegeName" required />
              )}
            </div>
            <div>
              <label htmlFor="degree" className="mr-2">
                Degree
              </label>
              {editOn ? (
                <input type="text" id="degree" name="degree" required />
              ) : (
                <input type="text" name="degree" readOnly id="degree" required />
              )}
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div>
              <label className="mr-4" htmlFor="edu_from">
                From
              </label>
              {editOn ? (
                <input type="date" id="edu_from" name="edu_from" required />
              ) : (
                <input type="date" readOnly id="edu_from" name="edu_from" required />
              )}
            </div>
            <div>
              <label className="mr-4" htmlFor="edu_to">
                To
              </label>
              {editOn ? (
                <input type="date" id="edu_to" name="edu_to" required />
              ) : (
                <input type="date" id="edu_to" readOnly required />
              )}
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
class ExperienceForm extends Component {
  render() {
    const editOn = this.props.editOn;
    return (
      <fieldset className="border-[1px] p-4  border-black">
        <legend className="text-center font-semibold">Experience</legend>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div>
              <label className="mr-2" htmlFor="companyName">
                Company
              </label>
              {editOn ? (
                <input id="companyName" name="companyName" required />
              ) : (
                <input id="companyName" name="companyName" readOnly required />
              )}
            </div>
            <div>
              <label htmlFor="pos" className="mr-2">
                Position
              </label>
              {editOn ? (
                <input required id="pos" name="pos" />
              ) : (
                <input readOnly name="pos" required id="company-pos" />
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label className="mr-2" htmlFor="exp_from">
                {" "}
                Work From
              </label>
              {editOn ? (
                <input type="date" required name="exp_from" id="exp_from" />
              ) : (
                <input type="date" readOnly name="exp_from" required id="exp_from" />
              )}
            </div>
            <div className="mr-4">
              <label className="mr-2" htmlFor="exp_to">
                {" "}
                To
              </label>
              {editOn ? (
                <input type="date" id="exp_to" name="exp_to" required />
              ) : (
                <input type="date" readOnly name="exp_to" id="exp_to" required />
              )}
            </div>
          </div>
          <div className="w-[100%] h-[50px]">
            {editOn ? (
              <textarea
                className="border-gray-700 w-full h-[full] p-1 text-sm outline-none border"
                placeholder=" Describe your task briefly" name="task"
              ></textarea>
            ) : (
              <textarea
                  className="border-gray-700 w-full h-[full] p-1 text-sm outline-none border"
                  name="task"
                placeholder=" Describe your task briefly"
                readOnly
              ></textarea>
            )}
          </div>
        </div>
      </fieldset>
    );
  }
}

class LeftSection extends Component {
  render() {
    const { click, editOn } = this.props;

    return (
      <section className="bg-slate-400 flex justify-center items-center">
        <div className="h-[90%] overflow-y-auto  shadow-md p-2 w-[80%] bg-slate-100">
          <div className="italic underline underline-offset-1 mb-4">
            Please provide the information to build your cv{" "}
          </div>
          <form className="space-y-8">
            <PersonalForm editOn={editOn} />
            <EducationForm editOn={editOn} />
            <ExperienceForm editOn={editOn} />
            <div className="w-full flex justify-center">
              <button
                className="bg-gray-300 px-2 py-1 w-[110px] font-mono border-black border-[1px]  active:bg-gray-600 hover:bg-gray-500 hover:text-white"
                onClick={click}
              >
                {editOn ? "Create CV" : "Edit CV"}
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
    const { click, data, editOn } = this.props;

    return (
      <main className="flex-1 grid grid-cols-[repeat(2,minmax(700px,1fr))]">
        <LeftSection data={data} editOn={editOn} click={click} />
        <RightSection data={data} />
      </main>
    );
  }
}
