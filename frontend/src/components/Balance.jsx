const Balance = ({value}) => {
    return (
        <div className="flex m-3 p-3 text-base font-bold">
            <div className="m-2 p-2 ">
                Your balance : 
            </div>
            <div className="p-2 m-2">
                {value}
            </div>
        </div>
    )
}

export default Balance;