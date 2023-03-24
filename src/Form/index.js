import React, { useState, useRef } from "react";
import { StyledForm, StyledButton} from "./styled";

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

    return (<StyledForm
    action="" onSubmit={onFormSubmit}>
        <input
            ref={inputRef}
            value={newTaskContent}
            name="newTaskContent"
            type="text"
            placeholder="Co jest do zrobienia?"
            onChange={(event) => setNewTaskContent(event.target.value)}
        />
        <StyledButton type="submit">Dodaj zadanie</StyledButton>
    </StyledForm>
    );
};

export default Form;