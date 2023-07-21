export default function ContainerFull({ children, className }) {
    return (
        <section className={`${className} max-w-8xl h-full m-auto`}>
            {children}
        </section>
    )
}
