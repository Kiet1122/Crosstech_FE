import { BtnApp } from "../component/button/btnApp";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Squre } from "../component/square/square";
import { FaTiktok } from "react-icons/fa";


export const Bodyab = () => {

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
                    <BtnApp name="Connect your X account" />
                </div>
            </div>

            <div className="mt-10">
                <div className=" flex pl-5 mb-2 pt-1 justify-end items-start w-full">
                    <SlArrowLeftCircle /> <SlArrowRightCircle />
                </div>
                <div className="flex">
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
        </div>
    );
};
