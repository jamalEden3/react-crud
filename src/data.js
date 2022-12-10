import { AiOutlineShop } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FcStatistics } from "react-icons/fc";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineIdcard } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";




export  const links = [
    {
        title: 'Main menu',
        links: [
           {
            link: 'dashboard',
            icon: <AiOutlineShop />
           },
           {
            link: 'calender',
            icon: <SlCalender />
           },
           {
            link: 'statistic',
            icon: <FcStatistics />
           },
           {
            link: 'messages',
            icon: <FiMessageSquare />,
            new: true,
           },
           {
            link: 'card',
            icon: <AiOutlineIdcard />
           },


        ]
    },
    {
        title: 'Account',
        links: [
           {
            link: 'help',
            icon: <BiHelpCircle />
           },
           {
            link: 'settings',
            icon: <CiSettings />,
            new: true,
           }
        ]
    },

]