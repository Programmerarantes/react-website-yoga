import React from "react";
/*import * as FaIcons from "react-icons/fa"*/
import * as PiIcons from "react-icons/pi"
import * as GiIcons from "react-icons/gi"
import * as MdIcons from "react-icons/md"



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <PiIcons.PiButterflyDuotone />,
        cName: 'nav-text'
    },
    {
        title: 'Yoga Casal',
        path: '/YogaCasal',
        icon: <GiIcons.GiLovers />,
        cName: 'nav-text'
    },
    {
        title: 'Doula',
        path: '/Doula',
        icon: <MdIcons.MdPregnantWoman />,
        cName: 'nav-text'
    },
]