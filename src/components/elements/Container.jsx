export default function Container({ children, className, structure }) {
    switch (structure) {
        case 'div':
            return <div className="max-w-7xl h-full m-auto">{children}</div>
        case 'section':
            return (
                <section className={`${className} max-w-7xl h-full m-auto`}>
                    {children}
                </section>
            )
    }
}
