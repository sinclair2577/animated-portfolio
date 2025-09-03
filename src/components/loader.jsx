import { motion } from "motion/react"

const Loader = () => {
    const triangleVariants1 = {
        animate: {
            rotate: [0, 180, 180, 360],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.25, 0.5, 1]
            }
        }
    }

    const triangleVariants2 = {
        animate: {
            rotate: [0, 0, 180, 180, 360],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.5, 0.75, 0.75, 1]
            }
        }
    }

    return (
        <div className="absolute left-0 top-0 w-screen h-screen bg-[#2c3e50] m-0 overflow-hidden flex justify-center items-center">
            <div className="w-[100px] h-[100px] relative">
                <motion.div
                    variants={triangleVariants1}
                    animate='animate'
                    className="absolute w-0 h-0 border-[50px] border-transparent border-t-white"
                />
                <motion.div
                    variants={triangleVariants2}
                    animate='animate'
                    className="absolute w-0 h-0 border-[50px] border-transparent border-l-white"
                />
            </div>
        </div >
    )
}

export default Loader