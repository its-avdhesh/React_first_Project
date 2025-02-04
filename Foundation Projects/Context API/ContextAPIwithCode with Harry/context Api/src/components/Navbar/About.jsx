import { useContext } from "react";
import NoteContext from "../../context/NoteContext";
const Home = () => {
  const { name, class: className } = useContext(NoteContext);  // Consume context here

  return (
    <div>
      
      <div className="bg-gray-700 text-white text-2xl m-3 p-2" >
      <h1>Welcome, {name}</h1>
        Your class is {className}</div>
    </div>
  );
};

export default Home;