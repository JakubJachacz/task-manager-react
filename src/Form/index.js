import "./style.css";

const Form = () => (
    <form className="form" action="">
              <input className="form__input" name="newTaskContent" type="text" placeholder="Co jest do zrobienia?" />
              <button className="form__button" type="submit" onclick="setFocus()">Dodaj zadanie</button>
          </form>
);

export default Form;