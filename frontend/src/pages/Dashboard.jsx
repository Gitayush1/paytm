import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
    return (
        <div>
            <AppBar/>
            <Balance value = "Rs 10,000"/>
            <Users/>
        </div>
    )
}

export default Dashboard;