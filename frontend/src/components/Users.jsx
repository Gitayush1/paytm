import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/user/bulk?filter=" + filter
    );
    setUsers(response.data.user);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <div className="m-3 p-3">
      <div className="text-lg font-bold m-2 p-2">Users</div>
      <div className="pl-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          className="border w-full m-2 p-1 pl-2 rounded-lg"
          type="text"
          placeholder="Search Users"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {

  const navigate = useNavigate();

  return (
    <div className="flex m-2 p-2 justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-2 mr-2 ml-4">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="pt-2.5 m-2 ml-0.5">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <button onClick={(e) => {
        navigate("/send?id=" + user._id + "&name=" + user.firstName)
      }} className="mt-1 text-white cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Send Money
      </button>
    </div>
  );
};

export default Users;
