import LeftNav from "./Containers/LeftNav";
import MidContainer from "./Containers/MidContainer";
import RightNav from "./Containers/RightNav";

function App() {
  return (
    <div className="main">
      <LeftNav />
      <MidContainer />
      <RightNav />
    </div>
  );
}

export default App;
