import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  return (
    <>
      <NavBar />

      <h1>Movie Generator</h1>

      <p>Some info</p>

      <Card />

      <Table />

      <Button />
      <Button />
      <Button />
      <Button />

      <Footer />
    </>
  );
}

export default App;
