import { Routes, Route } from "react-router";
import "./App.scss";
import { Skeleton } from "./components/Skeleton";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Skeleton />}></Route>
    </Routes>
  );
}

export default App;
