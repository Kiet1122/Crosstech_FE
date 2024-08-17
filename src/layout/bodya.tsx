import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Squre } from "../component/square/square";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { WalletTable } from "../component/table/TableComponent";

export const Bodyab = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [color, setColor] = useState<string>("red");

    const handleClick = () => {
        setIsActive(!isActive);
        setColor(isActive ? "blue" : "red ");
    };
    return (
        <div>
            <div>
                <div className="pt-15 mt-10">
                    <h1 className="text-center text-2xl">Social Tasks</h1>
                    <h3 className="text-center text-xs p-4">
                        Complete the Social Tasks to earn extra $Heart token
                    </h3>
                </div>
                <div className="mt-5 border border-black rounded-lg flex flex-col pl-5 h-24 justify-center items-start w-full">
                    <h2>Connect Your X account</h2>
                    <h3 className="text-[8px]">You need to connect your X account to join Social Task</h3>
                    <a href="#" className="flex text-[7px] text-red-500">
                        Learn more <SlArrowRight className="pt-0.5 flex"></SlArrowRight>
                    </a>
                    <button className=" rounded-full max-w-[235px] pt-[2px] pr-[32px] pb-[2px] pl-[32px]"
                        style={{ background: color }}
                        onClick={handleClick}>
                        Connect your X account
                    </button>
                </div>
            </div>

            <div className="mt-10 max-w-[1216px]">
                <div className=" flex pl-5 mb-2 pt-1 justify-end items-start w-full">
                    <SlArrowLeftCircle /> <SlArrowRightCircle />
                </div>
                <div className="flex items-center justify-center space-x-10 max-w-[1216px]">
                    <Squre
                        logo=<FaTiktok />
                        name1="Follow Tapos X"
                        name2="Follow Tapos X to earn Points"
                    />
                    <Squre
                        logo=<FaTiktok />
                        name1="Follow Kiet"
                        name2="Follow Tapos X to earn Points"
                    />
                    <Squre
                        logo=<FaTiktok />
                        name1="Follow Nguyen Tat"
                        name2="Follow Tapos X to earn Points"
                    />

                </div>
            </div>
            <div className="max-w-[1216px]">
                <div className="mt-8">
                    <h1 className="text-[40px]">Referral Campaign</h1>
                    <h3 className="text-[14px]">Share your referral link to earn extra points</h3>
                </div>
                <div className="border p-[24px] rounded-[16px] ">
                    <div className="text-left">
                        <h2 className="font-medium roboto text-[24px] mb-4">Enter Referral Code</h2>
                        <h3 className="font-normal roboto text-[14px]">Please enter referral code to earn extra points</h3>
                        <h3 className="font-normal roboto text-[14px] text-[#0D88D8]">Learn more </h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex border rounded-[100px] w-[400px] h-[48px] items-center">
                            <div className="flex items-center w-[292px] h-[48px] p-2 px-3 gap-2   opacity-100">
                                <input type="text" className="w-full h-full border-none outline-none" />
                            </div>
                            <div className="ml-2 border border-gray-300 rounded-full w-[100px] h-[40px] mr-1 bg-red-500 flex items-center justify-center">
                                <button className="text-[25px] border-none">
                                    Go
                                </button>
                            </div>

                        </div>
                        <div className="justify-items-end">
                            <div className="flex justify-center items-center border bg-red-500 text-center rounded-[100px] w-[199px] h-[48px] ">
                                <button className="text-[20px] ">
                                    Invite Your Friends
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6  max-w-[1216px]">
                <div className="justify-start text-left font-bold">
                    <h1>Invited friends</h1>
                </div>
                <div className="border rounded-3xl  font-sans">
                    <WalletTable />
                </div>
            </div>

        </div>
    );
};
