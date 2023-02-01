import React, { useEffect, useState } from "react";
import Tools from "../component/Tools";
import SimpleList from "../list/SimpleList";
import "./HomePage.css";

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [active, setActive] = useState("all");

    useEffect(() => {
        fetch("/data.json")
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setItems(data);
            });
    }, []);

    const onListChange = (event) => {
        const value = event.target.value;
        setActive(value);
    };

    const handleDelete = (arg) => {
        console.log("delete", arg);
        const newList = items.filter((element) => element.id !== arg.id);
        setItems(newList);
    };
    const handleLabelClick = (param) => {
        setActive(param);
    };
    const listItems = items.filter((item) => {
        if (active === "all") {
            return true;
        }
        if (active === "active") {
            return item.isActive === true;
        }
        if (active === "non-active") {
            return item.isActive === false;
        }
        return false;
    });

    return (
        <Tools labelValue={active} onAction={onListChange} count={items.length}>
            <SimpleList onLabelClick={handleLabelClick} data={listItems} onAction={handleDelete} />
        </Tools>
    );
};

export default HomePage;
