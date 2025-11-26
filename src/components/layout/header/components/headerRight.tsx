import Image from "next/image"
const MainHeaderRight = () =>{
    return (
        <div className="flex flex-row sm:justify-end pr-5">
            <Image alt="B4U" src="/logo.svg" width={200} height={30} className="px-2 w-40 h-32 sm:w-48 sm:h-24 sm:mr-2"/>
        </div>
    )
}

export default MainHeaderRight