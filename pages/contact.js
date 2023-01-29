import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from '@next/font/google'
import { Oswald } from '@next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const oswald = Oswald({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kristin Francis</title>
        <meta name="description" content="Kristin Francis Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col w-full">
        <div className="flex flex-row justify-between text-sm  bg-vlightpurple">

          <div className="p-10 shrink-0">
          <Link href="/"> <Image
              src="/logo.svg"
              alt="Kristin Francis"
              width={100}
              height={24}
              priority
            /></Link>
          </div>

          <div>
            <nav className="hidden md:flex space-x-4 p-10 font-light" >
              {[
                  ['HOME', '/'],
                  ['WORK', '/projects'],
                  ['ABOUT', '/about_me'],
                  ['CONTACT', '/contact'],
              ].map(([title, url]) => (
                <Link href={url} key={url} className="font-display text-xl font-normal rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-[#F0E8EB]  hover:text-slate-900">{title}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col pt-20 pb-20">
          <div className="font-display text-4xl font-normal text-center">
          Interest peaked? 🤩 
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center">
          Let’s make something special. 
          </div>
          

        </div>
        
        
        <div className="flex flex-row flex-wrap justify-between bg-darkpurple ">
          <div>
              <nav className=" space-x-4 p-10 font-light" >
                {[
                  ['HOME', '/'],
                  ['WORK', '/projects'],
                  ['ABOUT', '/about_me'],
                  ['CONTACT', '/contact'],
                ].map(([title, url]) => (
                  <Link href={url} key={url} className="font-display text-white text-xl font-normal rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-[#F0E8EB] hover:text-slate-900">{title}</Link>
                ))}
              </nav>
            </div>
            <div className="text-white md:p-10 pl-10 pb-10" >
            Copyright ©2022 All rights reserved
              </div>          
            </div>
        


      </main>

    </>
  )
}
