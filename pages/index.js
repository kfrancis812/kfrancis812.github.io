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
      <main className="flex flex-col">
        <div className="bg-gradient-to-tl from-vlightpurple via-[#F9F8FC] to-white">
          <div className="flex flex-row justify-between text-sm w-full ">

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
                  <Link href={url} key={url} className="font-display text-xl font-normal rounded-lg px-3 py-2 text-darkpgray font-medium hover:bg-[#F0E8EB] hover:text-slate-900">{title}</Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-row flex-wrap-reverse justify-between text-sm">
            <div className="flex flex-col md:w-6/12">
              <div className="pt-20 md:pl-20 pl-10 font-display text-4xl font-normal text-darkpgray">
                Hey there, <span className="text-darkpurple"> Kristin here</span> 👋

              </div>
              <div className="pt-3 md:pl-20 pl-10 pr-10 text-xl font-light leading-7 text-darkpgray">
                I’m a marketing professional with over ten years of experience who loves working with tech, design, and process optimizations.

              </div>
              <div className="md:pl-20 pl-10 pt-5 flex flex-row">
                <button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">VIEW PROJECTS</button>
                <button className="ml-5 pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral tracking-wide">CONTACT ME</button>
              </div>
            </div>
            <div className="pr-10 md:w-6/12 pl-10">

              <Image
                src="/kristin-headshot.png"
                alt="Kristin Francis"
                width={600}
                height={640}

              />


            </div>
          </div>

          <div className="flex flex-row text-sm w-full md:-mt-48 pb-20 pt-20">
            <div className="flex flex-col flex-1">
              <div className="md:pl-20 pl-10 mb-4 font-display text-xl font-normal text-darkpgray">
                My Specialities
              </div>
              <div className="md:pl-20 pl-10  pr-10 md:pr-20 grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5">
                  <div className="font-display text-neutral-600 text-base">
                    Marketing & Marketing Operations
                  </div>
                  <div className=" text-sm pt-2 leading-5 text-neutral-400">
                    Need help setting up an email or a landing page? A new tool? Not sure how your campaigns are performing? Want your campaigns to perform better? I can help.
                  </div>
                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-darkpgray">
                  <div className="font-display text-neutral-600 text-base">
                    User Experience & Design
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-400">
                    From graphic design to creating a great user experience, I will help create the best design that will help drive traffic, conversions, and revenue.
                  </div>

                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-darkpgray">
                  <div className="font-display text-neutral-600 text-base">
                    Organization & Process Creation
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-400">
                    Struggling with a project? Let me help optimize or create a new process. I’ll take a look at what you’re currently doing and review feedback from the team to optimize the process.
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col items-center font-display text-4xl font-normal pt-20 text-darkpgray">
          Work & Projects
        </div>
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
          <div className="flex flex-col w-full bg-tan rounded-lg sm:mb-16">
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
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 ">
                Created landing pages with focused messaging based on prior page path. This improved ad conversion rate by 125%.
              </div>
              <div className="self-end">
              <Link href="/projects/landingpage"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-tan rounded-lg sm:mt-16">
            <div >
              <Image className="w-full"
                src="/myportfolio.png"
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

          <div className="flex flex-col w-full bg-tan rounded-lg sm:mb-16 sm:-mt-16">
            <div>
              <Image className="w-full"
                src="/cat-watercolor-2.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600">
                Traditional Watercolor Painting
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 ">
                Along with graphic design and user experience, I enjoy watercolor painting in my spare time.
              </div>
              <div className="self-end">
              <Link href="/projects/watercolor"><button className="pt-2 pb-2 pr-6 pl-6 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral  text-[12px] self-end tracking-wide">LEARN MORE</button></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-tan rounded-lg mt-16 -mt-0">
            <div>
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600">
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
        <div className="flex flex-row p-10 pb-20 justify-center">
        <Link href="/projects"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">VIEW MORE PROJECTS</button></Link>
        </div>



        <div className="flex flex-row flex-wrap justify-between bg-darkpurple mt-20">
          <div>
            <nav className=" space-x-4 p-10 font-light" >
              {[
                ['HOME', '/index'],
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
