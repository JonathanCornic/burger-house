/* eslint-disable react/prop-types */
export default function HeadingTitle(props) {
    const { children, variant } = props

    const classDefault =
        'px-7 py-3 uppercase bg-primary text-secondary font-black tracking-tighter inline-block'

    switch (variant) {
        case 'h3':
            return (
                <div className="flex items-center justify-center my-5">
                    <h3 className={`text-sm ${classDefault}`}>{children}</h3>
                </div>
            )
        default:
            return (
                <div className="flex items-center justify-center my-10">
                    <h2 className={`${classDefault}`}>{children}</h2>
                </div>
            )
    }
}
