/* eslint-disable react/prop-types */
export default function Button({ children, className }) {
    return (
        <div>
            <button
                className={`${className} px-5 py-3 uppercase shadow-xl text-white tracking-widest font-medium animate`}
            >
                {children}
            </button>
        </div>
    )
}
