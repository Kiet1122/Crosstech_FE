import { Cennter } from "../component/button/btnncenter";
import logo from "../assets/logo.svg";
import { Leffta } from "../component/button/btnnleft"
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export const Navbar = () => {
    const [activecenterButton, setactivecenterButton] = useState<"Tapos" | "Wallet" | "Leaderboard" | "Shop" | "More">("More");
    const [activeButton, setActiveButton] = useState<"Mainnet" | "Testnet">("Mainnet");
    return (
        <div style={{ padding: 0, margin: 0, fontSize: "15px", display: "flex", alignItems: "center", width: "100%" }}>
            <div style={{ marginRight: "auto" }}>
                <img src={logo} alt="Logo" style={{ height: "15px" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", flex: 1,  }}>
                <Cennter
                    name="Tapos"
                    isActive={activecenterButton === "Tapos"}
                    onClick={() => setactivecenterButton("Tapos")}
                />
                <Cennter
                    name="Wallet"
                    isActive={activecenterButton === "Wallet"}
                    onClick={() => setactivecenterButton("Wallet")}
                />
                <Cennter
                    name="Leaderboard"
                    isActive={activecenterButton === "Leaderboard"}
                    onClick={() => setactivecenterButton("Leaderboard")}
                />
                <Cennter
                    name="Shop"
                    isActive={activecenterButton === "Shop"}
                    onClick={() => setactivecenterButton("Shop")}
                />
                <Cennter
                    name="More"
                    isActive={activecenterButton === "More"}
                    onClick={() => setactivecenterButton("More")}
                />
                <div style={{display:"flex", padding: 0, marginTop:5, marginLeft: 0, fontSize: "15px", color:"red"}}><SlArrowDown /></div>
                
            </div>

            <div
                style={{
                    display: "flex",
                    border: "1px solid black",
                    borderRadius: "20px",
                    overflow: "hidden",
                }}
            >
                <Leffta
                    name="Mainnet"
                    isActive={activeButton === "Mainnet"}
                    onClick={() => setActiveButton("Mainnet")}
                />
                <Leffta
                    name="Testnet"
                    isActive={activeButton === "Testnet"}
                    onClick={() => setActiveButton("Testnet")}
                />
            </div>
        </div>
    );
};

