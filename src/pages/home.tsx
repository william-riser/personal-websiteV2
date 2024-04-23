import Navbar from "../components/navbar.tsx";

function Home() {
  return (
    <div className={"h-screen flex flex-col items-center bg-purple-300"}>
      <Navbar />
      <div className={"flex w-screen h-full justify-center items-center"}>
        <div className={"w-2/5 flex flex-col items-center justify-center"}>
          <img
            src={"/me.JPG"}
            alt={"Profile"}
            className={"rounded-xl h-auto w-96"}
          />
        </div>
        <div className={"w-3/5 flex flex-col items-center"}>
          <h1 className={"text-3xl"}>About Me</h1>
          <p className={"w-4/5 text-center mt-3 text-xl"}>
            Welcome! I'm William Riser, a computer science student at
            Northeastern University. I have a passion for programming and
            problem-solving, and I am constantly seeking opportunities to expand
            my knowledge and skills in the field of computer science.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
