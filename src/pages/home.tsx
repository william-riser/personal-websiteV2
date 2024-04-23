import Navbar from "../components/navbar.tsx";


function Home() {
  return (
    <div className={"h-screen flex flex-col items-center bg-purple-300"}>
        <Navbar />
        <div className={"flex w-screen h-full justify-center items-center"}>
            <div className={"w-1/2 flex flex-col items-center justify-center"}>
                <img src={"/me.JPG"} alt={"Profile"} className={"rounded-xl h-auto w-96"} />
            </div>
            <div className={"w-1/2 flex flex-col items-center"}>
                <h1 className={"text-2xl"}>About Me</h1>
            </div>
        </div>
    </div>
  );
}

export default Home;