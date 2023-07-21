export default function Button({ children, className, color, theme }) {
    let background
    switch (color) {
        case 'tertiary':
            background = 'bg-tertiary hover:bg-tertiary-hover'
            break
        case 'secondary':
            background = 'bg-secondary hover:bg-secondary-hover'
            break
        default:
            background = 'bg-primary hover:bg-primary-hover'
    }

    switch (theme) {
        case 'small':
            return (
                <button
                    className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}
                >
                    {children}
                </button>
            )
        case 'big':
            return (
                <button
                    className={`${className} ${background} px-14 py-4 uppercase shadow-xl text-white text-base font-medium animate`}
                >
                    {children}
                </button>
            )
        default:
            return (
                <button
                    className={`${className} ${background} px-5 py-3 uppercase shadow-xl text-white text-base font-medium animate`}
                >
                    {children}
                </button>
            )
    }
}
