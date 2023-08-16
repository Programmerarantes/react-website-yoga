import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Aulas',
        path: '/classes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'yoga casal',
        path: '/About',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'yoga gestantes',
        path: '/',
        icon: <FaIcons.FaAddressBook />,
        cName: 'nav-text'
    },
    {
        title: 'ebook',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'contato',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
]