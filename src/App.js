import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-[#EBF0F4] flex justify-center items-center  pt-4">
      <div className="w-[1027px] h-[2130px] overflow-hidden App-Section mx-4 lg:mx-0">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
