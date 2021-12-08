import Head from "next/head";
import Project from "../components/Project.js";
import Technologies from "../components/Technologies.js";
import projects from "../data.json";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
        <div className="container p-1 md:p-10 mt-36 md:mt-28">
          <h2 className="font-bold text-3xl  md:text-4xl md:leading-[45px]  lg:text-5xl lg:leading-[55px]">
            Welcome To <br />
            My Personal Portfolio
          </h2>
          <p className="md:w-[600px] my-5 md:my-8 text-gray-400 text-base sm:text-lg  md:text-xl md:tracking-wider leading-6 md:leading-8">
            The purpose of Javascript Mastery is to aspiring and established
            developers to take their development skills to the next level and
            building awesome apps.
          </p>
          <button
            className="btn px-5 text-base font-medium py-2"
            onClick={() => (window.location = "https://google.com")}
          >
            Learn More
          </button>
        </div>
      </div>
      {/* projects */}
      <div className="container mt-12" id="projects">
        <h2 className="headingStyle ">Projects:</h2>
        <div className="grid grid-cols-6 grid-flow gap-10 mt-5 md:mt-8 ">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
     <Technologies/>
      {/* in future Acomplishments && about section */}
     
    </div>
  );
}



