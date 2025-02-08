import { useSearchParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import axios from "axios";
import { useState } from "react";

const SendMoney = () => {

  const [searchParams] = useSearchParams();
  const [amount , setAmount] = useState(0);

  const id = searchParams.get("id")
  const name = searchParams.get("name")

  return (
    <div>
      <AppBar />
      <div className="w-4/12 m-auto shadow-xl mt-28 h-80 rounded-lg">
        <div className="text-2xl p-2 m-2 flex justify-center font-bold">
          Send Money
        </div>
        <div className="p-2 m-2 flex items-center px-10 mt-12">
          <div className="rounded-full  h-12 w-12 bg-green-300 flex justify-center mt-2 mr-4">
            <div className="flex flex-col justify-center h-full text-xl">{name[0]}</div>
          </div>
          <div className="text-lg font-bold">{name}</div>
        </div>
        <div className="font-bold p-1 m-1 px-10">Amount in (Rs)</div>
        <div className="px-11">
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded p-1"
            type="text"
            placeholder="Enter Amount"
          ></input>
        </div>
        <button onClick={() => {
          axios.post("http://localhost:3000/api/v1/account/transfer" , {
            to : id,
            amount
          } , {
            headers : {
              Authorization : "Bearer " + localStorage.getItem("token")
            }
          })
        }} className=" mx-44 p-2 m-4 ocus:outline-none cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
