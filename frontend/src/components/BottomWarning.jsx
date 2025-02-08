import { Link } from "react-router-dom";

const BottomWarning = ({label, buttonText , to}) => {
    return (
        <div className="flex justify-center">
            <div className="mr-1">
                {label}
            </div>
            <Link className="underline" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}

export default BottomWarning;