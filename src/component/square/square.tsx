import { BtnApp } from "../button/btnApp";
import Hand from "../../assets/tay.svg";
import Ca from "../../assets/ca.svg";
import Bong from "../../assets/bong.svg";

interface SqureChild {
    logo: React.ReactNode;
    name1: string;
    name2: string;
}

export const Squre = ({ logo, name1, name2 }: SqureChild) => {
    return (
        <div className="w-[320px] h-[276px] border border-yellow-600 rounded-3xl flex flex-col justify-evenly space-x-4">

            <div className="relative right-0 top-0 flex items-center justify-evenly">
                <div className="absolute left-4 max-w-[68px] max-h-[60px] text-5xl">{logo}</div>
                <div className="">
                    <img src={Hand} alt="" className="absolute  max-w-[45px] max-h-[37px] right-0 bottom-3 " />
                    <img src={Bong} alt="" className="absolute max-w-[64px] max-h-[55px] left-19 bottom-2" />
                    <img src={Ca} alt="" className="absolute rounded-3xl max-w-[82px] max-h-[34px] right-0 top-1/4 " />
                </div>
            </div>
            <div className="flex flex-col justify-start items-start">
                <div className="text-[24px] font-bold">{name1}</div>
                <div className="text-[14px] font-bold">{name2}</div>
            </div>
            <div className="flex items-center space-x-[8px] mt-6">
                <div className="w-[100px] h-[30px] bg-[#f1e1e1] text-[#e59a9a] rounded-lg flex items-center justify-center">
                    <span className="text-[14px]">+20</span>
                </div>
                <div className="w-[142px] h-[30px] bg-white text-[#e59a9a] rounded-lg border border-[#e59a9a] flex items-center justify-center">
                    <BtnApp name="Follow" />
                </div>
            </div>
        </div>
    );
}