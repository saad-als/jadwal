import NavigationBar from "../components/NavigationBar"
export default function TasksPage() {
    return (
        <>

            <div className="grid grid-rows-4">
                <div>
                    <NavigationBar />
                </div>

                <div className="grid grid-cols-2">
                    <div>main</div>
                    <div className="flex justify-items-end">side</div>
                </div>

            </div>

        </>
    )
}