import { useState } from "react";
import Header from "./Header";
import logo from "../assets/Warhammerlogo.png";
import Form from "./Form";
import Footer from "./Footer";
import "../styles/Layout.css";

function App() {
  const [form, updateForm] = useState([]);
  return (
    <div>
      <Header>
        <img src={logo} alt="Warhammer Game Tracker" className="logo" />
        <h1 className="title">Warhammer Game Tracker</h1>
      </Header>
      <div className="layout-inner">
        <Form form={form} updateForm={updateForm} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
