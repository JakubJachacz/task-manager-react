import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (<form className="form" action="" onSubmit={onFormSubmit}>
        <input
            ref={inputRef}
            value={newTaskContent}
            className="form__input"
            name="newTaskContent"
            type="text"
            placeholder="Co jest do zrobienia?"
            onChange={(event) => setNewTaskContent(event.target.value)}
        />
        <button className="form__button" type="submit">Dodaj zadanie</button>
    </form>
    );
};

export default Form;