import AddButton from "./AddButton"
export default function SideBar() {
    return (

        <>
            <div className="absolute right-3 w-64 border flex flex-col justify-center">
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-center p-2 border rounded-md"><a href="#">المهام</a></div>
                    <div className="flex justify-center p-2 border rounded-md"><a href="#">التقويم</a></div>

                </div>

                <div className="flex justify-center ">
                    <AddButton />
                </div>
            </div>
        </>
    );
}