import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks } from "../../tasksSlice";
import Button from "../Button";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                ? "Ładowanie..."
                : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};