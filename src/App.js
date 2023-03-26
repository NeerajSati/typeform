import Pagecover from "./components/Pagecover";

function App() {
  return (
    <div className="w-screen h-full min-h-screen bg-black">
      <div className="w-full bg-[#0077ff4b] h-[4px] flex flex-row">
        <div className="w-[25%] bg-[#0077ff] h-[4px] flex flex-row" />
      </div>
      <Pagecover/>
    </div>
  );
}

export default App;
