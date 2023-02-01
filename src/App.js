import Footer from "./component/footer";
import Header from "./component/header";
import "./App.css";
import HomePage from "./pages/HomePage";
import DummyPage from "./pages/DummyPage";
import Usage from "./pages/Usage";
import { useState } from "react";

const App = () => {
    const [selected, setSelected] = useState("home");
    const handleMenuSelect = (value) => {
        setSelected(value);
    };
    const getPage = () => {
        console.log('one');
        switch (selected) {
            case "home":
                return <HomePage />;
            case "usage":
                return <Usage />;
            case "settings":
                return <DummyPage name="Settings" />;
            case "logout":
                return <DummyPage name="Logout" />;
            default:
                break;
        }
    };
    return (
        <div className="main-container">
            <Header onMenuSelect={handleMenuSelect} />
            <div className="body-container">{getPage()}</div>

            <Footer />
        </div>
    );
};

export default App;
