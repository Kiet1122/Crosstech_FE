import { BtnApp } from "../button/btnApp";

interface SqureChild {
    logo: React.ReactNode;
    name1: string;
    name2: string;
}

export const Squre = ({ logo, name1, name2 }: SqureChild) => {
    return (
        <div className="border border-black rounded-lg flex flex-col p-2 h-auto w-1/2 justify-start items-start text-left mx-0.5">
            <div className="text-2xl mb-0">{logo}</div>
            <div className="mb-0">
                <div className="text-sm">{name1}</div>
                <div className="text-xs">{name2}</div>
            </div>
            <div className="flex">
                <div className="grid justify-items-center bg-red-200 rounded-lg p-1 w-20">
                    +20
                </div>
                <div className="rounded-lg pl-3 w-auto">
                    <BtnApp name="follow" />
                </div>
            </div>
        </div>
    );
}