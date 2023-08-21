import React from "react";
/*import * as FaIcons from "react-icons/fa"*/
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Yoga Casal',
        path: '/YogaCasal',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Doula',
        path: '/Doula',
        icon: <MdIcons.MdPregnantWoman />,
        cName: 'nav-text'
    },
]