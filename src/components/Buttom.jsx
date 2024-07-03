export function Buttom({ title, icon, color }) {

    

    return (
        <button className={`w-full flex items-center justify-center p-3 gap-2 bg-${color}-600 text-white rounded `}>
            {icon && <img className="w-4 h-4 sm:w-6 sm:h-6" src={icon} alt="" />}
            <p className="text-base sm:text-lg font-semibold">{title}</p>
        </button>
    )
}