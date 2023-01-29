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
        <title>Projects</title>
        <meta name="description" content="Projects & Work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-row justify-between text-sm bg-vlightpurple">

          <div className="p-10 shrink-0">
          <Link href="/"><Image
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
                <Link href={url} key={url} className="font-display text-xl font-normal rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-[#F0E8EB] hover:text-slate-900">{title}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center">
          Projects & Work
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center">
                Below are just a select few pieces of work and projects that I&apos;ve created or participated in. 
          </div>


        </div>
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
          <div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/gt-landingpage.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                Landing Page Creation & Optimization
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5">
                Created landing pages with focused messaging based on prior page path. This improved ad conversion rate by 125%.
              </div>
              <div className="self-end">
              <Link href="/projects/landingpage"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-tan rounded-lg ">
            <div >
              <Image className="w-full"
                src="/portfolio_small.png"
                alt="Portfolio"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg">
              <div className="font-display text-lg text-neutral-600 ">
                My Brand: Portfolio
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 ">
                Designed my portfolio from start to finish. Starting with lo-fi protoypes to coding the final website.
              </div>
              <div className="self-end">
              <Link href="/projects/portfolio"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral  text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full bg-tan rounded-lg ">
            <div>
              <Image className="w-full"
                src="/cat-watercolor-2.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                Traditional Watercolor Painting
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5">
                Along with graphic design and user experience, I enjoy watercolor painting in my spare time.
              </div>
              <div className="self-end">
              <Link href="/projects/watercolor"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral  text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-tan rounded-lg">
            <div>
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Bridal Show Flyer"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                Bridal Show Flyer
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 ">
                Designed a flyer for a bridal show to show how the service worked and drive traffic to the website post event.
              </div>
              <div className="self-end">
              <Link href="/projects/flyer"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral  text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
              </div>
            </div>
          </div>
        </div>






        


        <div className="flex flex-row flex-wrap justify-between bg-darkpurple mt-28">
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
