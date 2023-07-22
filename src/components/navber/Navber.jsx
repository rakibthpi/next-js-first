"use client"
import Link from 'next/link';
import React from 'react';
import style from './page.module.css';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 4,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 5,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 6,
        title: "Deshboard",
        url: "/deshboard",
    },
];


const Navber = () => {
    return (
        <div className={style.header_main}>
            <Link href={'/'}>Portfolio</Link>
            <div className='menu'>
                {
                    links.map((link) => (
                        <Link key={link.id} href={link.url}
                        >
                            {link.title}

                        </Link>
                    ))
                }
                <button onClick={() => { console.log("log out") }}>logOut</button>
            </div>
        </div >
    );
};

export default Navber;