

export default function Button({ style, text }) {
    return (
        <button className={`${style} h-[52px] rounded-[62px] cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-[#0000001A] transition duration-300 ease-in-out`}>
            {text}
        </button>
    )
}
