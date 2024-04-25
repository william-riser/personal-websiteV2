import Navbar from "../components/navbar.tsx";

function Projects() {
  const XFinance = {
    name: "X Finance",
    description:
      "This was made for the X Developer Challenge. X Finance is a tool that uses X API v2 and the X.ai API to analyze real-time tweet data and generate a summary of a stock's performance and public consensus. The front end is built using React and Tailwind, and the back end uses Python Flask. When a user searches for a stock, a request is sent to the Flask server, which uses the X API to query ~5000 relevant tweets. These tweets along with price data for the stock are sent to the X.ai API, which generates a brief trend summary for the user",
    tech: ["React", "Tailwind", "Python", "Flask"],
    github: "https://github.com/william-riser/XDevChallenge",
  }
  const LinguaLink = {
    name: "Lingua Link",
    description:
      "LinguaLink is a language learning platform the allows users to connect from all over the world and converse with each other via text and video call. It also gives users the option to sharpen their skills via AI chat.",
    tech: ["React", "Tailwind", "WebRTC", "Firebase"],
    github: "https://github.com/william-riser/LinguaLink",
  }
    const PersonalWebsite = {
        name: "williamriser.com",
        description:
        "This is my personal website to display my projects and resume. It is built using React and Tailwind CSS.",
        tech: ["React", "Tailwind"],
        github: "https://github.com/william-riser/personal-websiteV2",
    }
    const projects = [XFinance, LinguaLink, PersonalWebsite];

  return (
    <div className={"h-full flex flex-col items-center bg-purple-300 "}>
      <Navbar />
      <div className={"flex flex-col w-full items-center"}>
        {projects.map((project) => (
          <div className={"flex flex-col items-center w-3/5 mt-5 rounded-lg shadow shadow-black bg-green-100"}>
            <h2 className={"text-2xl"}>{project.name}</h2>
            <p className={"w-4/5 text-center mt-3 text-xl"}>{project.description}</p>
            <div className={"flex flex-row mt-3"}>
              <h2 className={"text-lg mr-3"}>Tech Stack:</h2>
              {project.tech.map((tech) => (
                <p className={"text-lg mr-3 bg-amber-400 rounded-md p-1"}>{tech}</p>
              ))}
            </div>
            <div>
                <a href={project.github} className={"text-lg"}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
