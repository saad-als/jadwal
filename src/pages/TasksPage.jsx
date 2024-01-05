import NavigationBar from "../components/NavigationBar"
import MainBoard from "../components/MainBoard"
import SideBar from "../components/SideBar"
export default function TasksPage() {
    return (
        <>

            <div>
                <div>
                    <NavigationBar />
                </div>
                <div className="flex m-5 container ">
                    <MainBoard />
                    <SideBar />

                </div>

                <div>

                    <footer className="flex justify-center absolute inset-x-0 bottom-0 p-4 ">
                        <p className="text-slate-500">جميع الحقوق محفوظة @2024</p>
                    </footer>

                </div>
            </div>





        </>
    )
}