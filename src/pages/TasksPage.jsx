import NavigationBar from "../components/NavigationBar"
export default function TasksPage() {
    return (
        <>

            <div className="grid grid-rows-4 relative">
                {/* first row */}
                <div>
                    <NavigationBar />
                </div>
                {/* second row */}
                <div className="grid grid-cols-2">
                    <div className="flex justify-center p-5 ">main</div>
                    <div className="flex justify-center p-5 ">side</div>
                </div>

                {/* third row */}



                {/* fourth row */}

            </div>


            <footer className="flex justify-center absolute inset-x-0 bottom-0 p-4 ">
                <p className="text-slate-500">جميع الحقوق محفوظة @2024</p>
            </footer>
        </>
    )
}