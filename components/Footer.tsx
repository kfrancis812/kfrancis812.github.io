
import Link from 'next/link'

export function Footer(){
    return (
        <div className="flex flex-row flex-wrap justify-center md:justify-between bg-darkpurple">
          <div>
            <nav className=" space-x-2 md:space-x-4 p-10 font-light" >
              {[
                ['HOME', '/'],
                ['WORK', '/projects'],
                ['ABOUT', '/about_me'],
                ['CONTACT', '/contact'],
              ].map(([title, url]) => (
                <Link href={url} key={url} className="font-display text-white text-xl font-normal rounded-lg px-3 py-2  font-medium hover:bg-[#F0E8EB] hover:text-slate-900">{title}</Link>
              ))}
            </nav>
          </div>
          <div className="flex text-white sm:p-10 pb-10 text-sm" >
            Copyright ©2023 All rights reserved
          </div>
        </div>
    )
}