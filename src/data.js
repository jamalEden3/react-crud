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

import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsBoxSeam  } from "react-icons/bs";
import { FiBarChart  } from "react-icons/fi";
import { HiOutlineRefresh   } from "react-icons/hi";







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




export const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
  ];