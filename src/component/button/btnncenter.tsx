interface Cennterchild {
    name: string;
    isActive: boolean;
    onClick: any;
}

export const Cennter = ({ name, isActive, onClick } : Cennterchild) => {
    return (
        <button
            onClick={onClick}
            className={`${
                isActive ? "text-emerald-600" : "text-black"
            }`
        }
            style={{
                padding:"2px 9px"
            }}
        >
            {name}
        </button>
    );
};