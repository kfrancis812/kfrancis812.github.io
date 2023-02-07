import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from '@next/font/google'
import { Oswald } from '@next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const oswald = Oswald({ subsets: ['latin'], weight: ['400']  })

export default function Home() {
  return (
    <>
      <Head>
        <title>Traditional Watercolor Painting</title>
        <meta name="description" content="Traditional Watercolor Painting" />
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
          Traditional Watercolor Painting
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center">
          Along with graphic design and user experience, I enjoy watercolor painting in my spare time.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple rounded-lg ">
              <Image className="w-full"
                src="/watercolor_mockup_hero.png"
                alt="Watercolor"
                width={5000}
                height={3500}

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
                 During the beginning of the pandemic, I purchased a subscription to Let&apos;s Make Art Watercolor and fell in love with it.      </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
                <div className="font-display text-lg">
                  Current Situation
                </div>
                <div className="font-light text-base pt-2 leading-5">
                  From there I kept painting and learning more through youtube videos and classes at a local art store. I recently set up an etsy store to sell prints.                  </div>

              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col flex-1 pb-20 pt-20 md:pl-20 pl-10 pr-10 md:pr-20 bg-[#FAF7F4]">
          <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-2xl font-normal pl-2">
              The Process
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="flex flex-col pt-5 pr-5">
              
              <div className="font-light text-base pt-2 leading-5">
                I enjoy creating realistic watercolor paintings so I usually start from a photo. I use a lightbox to trace the photo onto watercolor paper. I&apos;ve tried a lot of different paints and paper but my go tos are Arches 140lb and Winsor & Newton Professional Watcolor paints. 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 pb-10 ">
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/garden of gods_small.png"
                alt="Watercolor Painting Garden of Gods"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/moose_small.png"
                alt="Watercolor Painting Moose"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/cat_small.png"
                alt="Watercolor Painting Cat"
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
                I create high resolution scans of the paintings. Once scanned I use Affinity Photo to make slight adjustments. </div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg">
                What I did/didn&apos;t do
              </div>
              <div className="font-light text-base pt-2 leading-5">
               Most time I use royalty-free images or photos I&apos;ve taken myself. I ultize a third party vendor to create prints of my paintings. </div>

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
        <Link href="/projects/landingpage"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/landingpage_small.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600">
                Landing Page Creation & Optimization
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5">
              Created landing pages and optimized pages by a/b testing images, headlines, and layout to optimize leads and conversions.
          
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>
          <Link href="/projects/portfolio"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div >
              <Image className="w-full"
                src="/portfolio_mockup_sm_final.png"
                alt="Portfolio"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg">
              <div className="font-display text-lg text-neutral-600">
                My Brand: Portfolio
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 ">
                Designed my portfolio from start to finish. Starting with lo-fi protoypes to coding the final website.
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>


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
            Copyright ©2023 All rights reserved
          </div>
        </div>



      </main>

    </>
  )
}
