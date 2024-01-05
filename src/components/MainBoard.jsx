import TaskCard from "./TaskCard";
export default function MainBoard() {

    return (
        <>
            <div className="w-80 h-80 p-5 border overflow-auto overscroll-contain ">

                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </>
    );
}