import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

const SignIn = () => {
    return (
        <div className="w-5/12 mt-20 pt-20 h-160 m-auto bg-slate-400 ">
            <div className="w-7/12 mt-4 h-10/12 m-auto bg-white rounded-lg">
                <Heading label = {"SignIn"}/>
                <SubHeading label={"Enter your Information to create an account"}/>
                <InputBox label="Email" placeholder="ayush@gmail.com"/>
                <InputBox label="Password" placeholder="123456"/>
                <Button label="Sign in"/>
                <BottomWarning label="Don't have an account?" buttonText="Sign up" to={"/signup"}/>
            </div>
        </div>
    )
}

export default SignIn;