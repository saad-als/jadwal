import NavigationBar from "../components/NavigationBar"
import MainBoard from "../components/MainBoard"
import SideBar from "../components/SideBar"
import AddButton from "../components/AddButton"
export default function TasksPage() {
    return (
        <>

            <div className="grid grid-rows-3 relative">
                {/* first row */}
                <div>
                    <NavigationBar />
                </div>

                {/* second row */}
                <div className="grid grid-cols-4">
                    <div className="flex justify-center p-5 w-full col-span-3">
                        <MainBoard />
                    </div>


                    <div className="flex justify-center p-5 grid grid-rows-2">
                        <SideBar />
                        <div className="flex justify-end">
                            <AddButton />
                        </div>
                    </div>

                </div>


                {/* third row */}

                <div>
                    <footer className="flex justify-center absolute inset-x-0 bottom-0 p-4 ">
                        <p className="text-slate-500">جميع الحقوق محفوظة @2024</p>
                    </footer>

                </div>

            </div>



        </>
    )
}