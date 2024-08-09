interface Lefftachild {
    name: string;
    isActive: boolean;
    onClick: any;
}

export const Leffta = ({ name, isActive, onClick } : Lefftachild) => {
    return (
        <button
            onClick={onClick}
            className={`${
                isActive ? "bg-red-500 text-white" : "bg-white text-red-500"
            }`}
            style={{
                padding: "2px 4px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.1s, color 0.3s",
            }}
        >
            {name}
        </button>
    );
};