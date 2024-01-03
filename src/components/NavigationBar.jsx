export default function NavigationBar(){
    return (
        <>
            <nav className="w-full p-5 border-4 border-b-black">
                <div className="grid grid-cols-2 gap-x-2 ">
                    <div className="flex justify-start">
                        <button className="border p-2">القائمة</button>
                    </div>
                    <div className="flex justify-end p-2"> <h1>جدول</h1></div>
                </div>
            </nav>
        </>
    );
}