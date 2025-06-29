const Button = ({children,onClick,className = '',...props})=>{
    return(
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 ${className}`}
            {...props}
        >
        {children}
        </button>
    )
}
export default Button;