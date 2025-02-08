const InputBox = ({label , placeholder, onChange}) => {
    return (
        <div className="p-4">
            <div className="text-left font-medium ">
                {label}
            </div>
            <input onChange={onChange} placeholder={placeholder} className="border px-2 py-1 border-gray-400 rounded-lg w-full"></input>
        </div>
    )
}

export default InputBox;