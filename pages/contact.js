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
        <div className="flex flex-row flex-wrap justify-between text-sm">
            <div className="flex flex-col md:w-6/12 pb-10 md:pb-20 ">
              <div className="pt-20 md:pl-20 pl-10 font-display text-4xl font-normal text-darkpgray">
                Interest <span className="text-[#795A95]"> peaked?</span> 🤩

              </div>
              <div className="pt-3 md:pl-20 pl-10 pr-10 text-xl font-light leading-7 text-darkpgray">
              Let’s make something special. Whether it's creating a process or desiging a user experience, I'm ready to dive in and help solve problems and optimize.

              </div>
              <div className="md:pl-20 pl-10 pt-5 flex flex-row">
                <Link href="mailto:kristinfrancisdesign@gmail.com"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">EMAIL ME</button></Link>
                
              </div>
            </div>
            <div className="pr-10 md:w-6/12 pl-10 md:pt-16 md:pb-20 pb-10">

              <Image
                src="/contact_lizard_v3.png"
                alt="Kristin Francis"
                width={600}
                height={640}

              />


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
            Copyright ©2023 All rights reserved
              </div>          
            </div>
        


      </main>

    </>
  )
}
