interface IGradiantBackground {
    direction: 'left' | 'right',
    height: number
}

export default function GradiantBackground({ direction, height }: IGradiantBackground) {

    return (
        <div className="relative">
            {
                direction == 'right' ?
                    <div className={`h-[${height}px] bg-gradient-to-r from-white to-transparent absolute inset-0 z-[2]`}></div>
                    :
                    <div className={`h-[${height}px] bg-gradient-to-l from-white to-transparent absolute inset-0 z-[2]`}></div>
            }

            <div className={`h-[${height}px] bg-gradient-to-tr from-[rgba(109,40,217,0.08)] via-transparent to-transparent absolute inset-0 z-[3]`}></div>
            <div className={`h-[${height}px] bg-gradient-to-bl from-[rgba(109,40,217,0.08)] via-transparent to-transparent absolute inset-0 z-[4]`}></div>
            <div className={`h-[${height}px] z-[1] opacity-20`} style={{ backgroundImage: "url('/assets/bg_image.png')" }}></div>
        </div>
    )
}