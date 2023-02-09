import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import classNames from "classnames";

export function MobileNavigation(props: { opened: boolean, close: any }) {

    const displayMobileNavLinks = classNames('transition-all  duration-200 fixed top-0 left-0 right-0 w-screen  flex flex-col justify-start items-center', {
        'h-screen bg-vlightpurple overflow-auto text-slate-700 ': props.opened,
        'h-[0%] overflow-hidden text-transparent ': !props.opened
    });


    return (<div className={displayMobileNavLinks}>
            <div className="flex flex-row justify-end w-full p-10 ">
                <button className="flex flex-col justify-center items-center h-8 w-8 pt-1 md:hidden pt-1 " onClick={props.close}>
                    <div className="w-8 h-1 bg-darkpurple rounded-lg absolute rotate-45  " />
                    <div className="w-8 h-1 bg-darkpurple rounded-lg  absolute -rotate-45" />
                </button>
            </div>


            <nav className=" flex flex-col flex-1 space-y-6 items-center p-10 font-light justify-center" >
                {[
                    ['HOME', '/'],
                    ['WORK', '/projects'],
                    ['ABOUT', '/about_me'],
                    ['CONTACT', '/contact'],
                ].map(([title, url]) => (
                    <Link href={url} key={url} className="font-display text-2xl font-normal rounded-lg px-3 py-2 font-medium hover:bg-[#F0E8EB]  hover:text-slate-900">{title}</Link>
                ))}
            </nav>
            <div className={"h-[40px]"}></div>

    </div>)

}

export function MobileMenuButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-row justify-between text-sm w-full p-10 ">

            <div className=" shrink-0">
                <Link href="/"><Image
                    src="/logo.svg"
                    alt="Kristin Francis"
                    width={100}
                    height={24}
                    priority
                /></Link>
            </div>

            <div >
                <button className="flex flex-col justify-around h-8 w-8 pt-1 md:hidden" onClick={() => setOpen(true)}>
                    <div className="w-8 h-1 bg-darkpurple rounded-lg   " />
                    <div className="w-8 h-1 bg-darkpurple rounded-lg  " />
                    <div className="w-8 h-1 bg-darkpurple rounded-lg  " />
                </button>
                <MobileNavigation opened={open} close={() => setOpen(false)} />
                <nav className="hidden md:flex space-x-4  " >
                    {[
                        ['HOME', '/'],
                        ['WORK', '/projects'],
                        ['ABOUT', '/about_me'],
                        ['CONTACT', '/contact'],
                    ].map(([title, url]) => (
                        <Link href={url} key={url} className="font-display not-italic text-xl rounded-lg px-3 py-2 text-darkpgray font-medium hover:bg-[#F0E8EB] hover:text-slate-900">{title}</Link>
                    ))}
                </nav>
            </div>
        </div>



    )
}