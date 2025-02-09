import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Error from "./Error";
import Home from "./Home";
import StatsPage from "./StatsPage";
import Login from "./Login";
import Register from "./Register";
import AddPlayers from "./AddPlayers";
import AddWickets from "./AddWickets";
import TeamScore from "./TeamScore";
import Head2Head from "./Head2Head";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addplayers" element={<AddPlayers />} />
        <Route path="/addwickets" element={<AddWickets />} />
        <Route path="/teamscore" element={<TeamScore />} />
        <Route path="/winner" element={<Head2Head />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
