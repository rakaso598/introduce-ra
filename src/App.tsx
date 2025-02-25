import "./App.css";
import { Choice } from "./Choice.tsx";

function App() {
  return (
    <div className="container">
      <span className="title">Which is your favorite color?</span>
      <Choice />
      <a className="bio" href="https://github.com/rakaso598/color-button">
        Visit My Git Repo
      </a>
    </div>
  );
}

export default App;
