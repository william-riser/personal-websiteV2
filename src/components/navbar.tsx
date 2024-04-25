import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="min-w-full flex flex-col bg-blue-100 py-2">
      <ul className="flex justify-between items-center px-4">
        <li className="text-2xl font-bold">William Riser</li>
        <div className="flex justify-end flex-1">
          <li
            className="mx-1 bg-amber-400 text-xl hover:text-2xl hover:bg-amber-500 rounded-md p-2 text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
              className="mx-1 bg-amber-400 text-xl hover:text-2xl hover:bg-amber-500 rounded-md p-2 text-white cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            Projects
          </li>
          <li
              className="mx-1 bg-amber-400 text-xl hover:text-2xl hover:bg-amber-500 rounded-md p-2 text-white cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
