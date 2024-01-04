import NewTasksStack from "./NewTasksStack"
import InProgressTasksStack from "./InProgressTasksStack"
import DoneTasksStack from "./DoneTasksStack"
export default function MainBoard() {
    return (
        <>
            <div className="grid grid-cols-3 gap-1 w-full">

                <DoneTasksStack />
                <InProgressTasksStack />
                <NewTasksStack />



            </div>
        </>
    );
}