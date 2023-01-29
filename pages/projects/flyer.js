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
        <title>Flyer</title>
        <meta name="description" content="Bridal Show Flyer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-row justify-between text-sm bg-vlightpurple">

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
                <Link href={url} key={url} className="font-display text-xl font-normal rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-[#F0E8EB] hover:text-slate-900">{title}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center">
            Bridal Show Flyer
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center">
            Designed a flyer for a bridal show to explain how the service worked and drive traffic to the website post event.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlight ">  <Image className="w-full"
                src="/bridal_show_large.png"
                alt="Flyer"
                width={5000}
                height={3000}

              />
            </div>

          </div>

        </div>
        <div className="flex flex-row justify-between text-sm pb-20 pt-20 md:pl-20 pl-10 pr-10 md:pr-20">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row items-center">
              <div className="h-0.5 w-5 bg-[#D9D9D9]">
              </div>
              <div className="font-display text-3xl font-normal pl-2">
                Overview
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-col pt-5 md:w-6/12 pr-5">
                <div className="font-display text-lg">
                  Project Description
                </div>
                <div className="font-light text-base pt-2 leading-5">
                  An online platform where customers can rent menswears without visiting a store. This platform allows you to easily rent formalwear by entering a few measurements.                    </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
                <div className="font-display text-lg">
                  The Request
                </div>
                <div className="font-light text-base pt-2 leading-5">
                  The company was attending an event to collect leads. The goal was to create a flyer to help drive conversions and traffic back to the website post event.

                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="flex flex-col flex-1 pb-20 pt-20 md:pl-20 pl-10 pr-10 md:pr-20 bg-[#FAF7F4]">
          <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-3xl font-normal pl-2">
              The Solution
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="flex flex-col pt-5 pr-5">
              <div className="font-display text-lg">
                The Process
              </div>
              <div className="font-light text-base pt-2 leading-5">
                With this project the first task was to go through our collection of photos to find some that would work for this project. After that I started designing the flyer and making the edits needed to the photos. 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 pb-10 ">
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/gt_1.png"
                alt="Landing Page 1"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/gt_2.png"
                alt="Landing Page 2"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/gt_3.png"
                alt="Landing Page 3"
                width={721}
                height={618}
                priority
              />
            </div>



          </div>







          <div className="flex flex-row flex-wrap justify-between">
            <div className="flex flex-col pt-5 md:w-6/12 pr-5">
              <div className="font-display text-lg">
                The Results
              </div>
              <div className="font-light text-base pt-2 leading-5">
                The show was a success and we took this flyer to many other shows! We made tweaks along the way to optimize the design and process.</div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg">
                What I did/didn’t do
              </div>
              <div className="font-light text-base pt-2 leading-5">
               I designed the piece from a blank slate. I didn&apos;t take the photos or write out the copy.</div>

            </div>
          </div>

        </div>
        <div className="flex flex-row items-center pt-20 md:pl-20 pl-10 pr-10 md:pr-20 ">
          <div className="h-0.5 w-5 bg-[#D9D9D9]">
          </div>
          <div className="font-display text-3xl font-normal pl-2">
            Check out another project
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
              <div className="font-display">
                Landing Page Creation & Optimization
              </div>
              <div className="font-light text-xs pt-2 leading-4 pb-5 ">
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
              <div className="font-display">
                My Brand: Portfolio
              </div>
              <div className="font-light text-xs pt-2 leading-4 pb-5 ">
                Designed my portfolio from start to finish. Starting with lo-fi protoypes to coding the final website.
              </div>
              <div className="self-end">
              <Link href="/projects/portfolio"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral  text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
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
