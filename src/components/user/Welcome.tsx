import { SiYourtraveldottv } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHouseLaptop } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";


const Welcome = () => {
  return (
    <>
        <aside className='w-[100%] h-[20%] flex justify-between px-4 pt-2 border-b-2 border-red-100'>
            <h1 className='text-[20px]'>Welcome</h1>
            <a href="#" className='text-[blue] text-[16px]'>View More</a>
        </aside>
        <aside className='w-[100%] h-[80%] text-[16px] flex flex-wrap gap-2 justify-center items-center pl-2'>
            <div className='scale-[0.83] h-[70px] w-[140px] border-2 border-slate-300 flex justify-center items-center text-gray-500 shadow-lg rounded-md hover:scale-[0.9] transition-all duration-200 cursor-pointer'> <GoProjectSymlink className="relative bottom-8 text-[20px]  "/> PROJECTS </div>
            <div className='scale-[0.83] h-[70px] w-[140px] border-2 border-slate-300 flex justify-center items-center text-gray-500 shadow-lg rounded-md hover:scale-[0.9] transition-all duration-200 cursor-pointer'> <GiTakeMyMoney className="relative bottom-8 right-2 text-[24px]"/> SALARY </div>
            <div className='scale-[0.83] h-[70px] w-[140px] border-2 border-slate-300 flex justify-center items-center text-gray-500 shadow-lg rounded-md hover:scale-[0.9] transition-all duration-200 cursor-pointer'> <FaHouseLaptop className="relative bottom-8 right-4 text-[24px]"/> PERKS </div>
            <div className='scale-[0.83] h-[70px] w-[140px] border-2 border-slate-300 flex justify-center items-center text-gray-500 shadow-lg rounded-md hover:scale-[0.9] transition-all duration-200 cursor-pointer'> <SiYourtraveldottv className="relative bottom-8 text-[22px]"/> HOLIDAYS</div>
        </aside>
    </>
  )
}

export default Welcome