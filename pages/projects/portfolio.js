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
        <title>Portfolio</title>
        <meta name="description" content="My Brand: Portfolio" />
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
            My Brand: Portfolio
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center">
            Designed my portfolio from start to finish. Starting with lo-fi protoypes to coding the final website.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple rounded-lg ">
              <Image className="w-full"
                src="/portfolio_lg.png"
                alt="Landing Page"
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
                  As I wanted to get back into design, I decided to create a portfolio to be able to share examples of my work. </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
                <div className="font-display text-lg">
                  The Problem & Current Situation
                </div>
                <div className="font-light text-base pt-2 leading-5">
                  Since I&apos;ve been mainly focused in marketing, unfortunately, I don&apos;t have a lot of samples of my work that I can share so I decided to use my portfolio as a chance to create something from scratch and show my process. </div>

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
                I started by creating low fidelity wireframes and protoyping the flow within Figma. From there, I created a moodboard to help nail down colors and style choices for my high fidelity wireframes. Once I finalized my high fidelity wireframes, I researched how to bring my site to life. I decided to use NextJS & Tailwind CSS to create my site.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 pb-10">
            <div className="pt-5  bg-[#F0E8EB] rounded-lg p-5 col-span-2 w-full">
              <Image className="w-full"
                src="/moodboard.png"
                alt="Moodboard"
                width={721}
                height={618}
                priority
              />
            </div>

            <div className="pt-5 bg-[#F0E8EB] rounded-lg p-5 w-full ">
              <Image className="w-full  "
                src="/color-scheme-final.png"
                alt="Color Scheme"
                width={400}
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
                I now have a fully coded website that I designed and coded. </div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg">
                What I did/didn’t do
              </div>
              <div className="font-light text-base pt-2 leading-5">
                I used Tailwind CSS and NextJs to make my life easier but other than that I created everything myself.</div>

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
              <div className="font-display text-lg text-neutral-600">
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
          <div className="flex flex-col w-full bg-tan rounded-lg mt-16 -mt-0">
            <div>
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Bridal Show"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600">
                Bridal Show Flyer
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5">
                Designed a flyer for a bridal show to show how the service worked and drive traffic to the website post event.
              </div>
              <div className="self-end">
                <Link href="/projects/flyer"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral  text-[12px] tracking-wide">LEARN MORE</button></Link>
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
