const AppBar = () => {
    return (
        <div className="flex justify-between shadow-md h-18">
            <div className="flex justify-center m-5  text-lg font-bold">
                PayTm App
            </div>
            <div className="flex p-1">
                <div className="m-2 p-2 pt-2 font-bold text-lg">
                    Hello
                </div>
                <div className="rounded-full  h-12 w-12 bg-slate-200 flex justify-center mt-2 mr-4">
                    <div className="flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBar;