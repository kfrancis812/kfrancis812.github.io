import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from '@next/font/google'
import { Oswald } from '@next/font/google'
import {Footer} from "../components/Footer";
import {MobileMenuButton} from "../components/Navigation";

const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const oswald = Oswald({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Kristin Francis</title>
        <meta name="description" content="Kristin Francis Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
            About <span className="text-[#795A95]">Me </span>
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-gray-600 text-center">
          I’m a marketing professional with over ten years of experience who loves working with tech, design, and optimizing. My aim is to always focus on the data without sacrificing the aesthetics.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple rounded-lg ">  <Image className="w-full"
                src="/about_me_4.png"
                alt="Flyer"
                width={5000}
                height={3000}

              />
            </div>

          </div>

        </div>
        <div className="flex flex-row justify-between text-sm pb-16 pt-10 md:pl-20 pl-10 pr-10 md:pr-20">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-col pt-5 pr-5">
              <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-2xl font-normal pl-2 text-gray-800 ">
            My <span className="text-darkpurple">Background</span>
            </div>
          </div>
                <div className="font-light text-base pt-5 leading-6 text-gray-600">
                Over the past ten years I&apos;ve worked with B2B and B2C companies, managing marketing tech stacks, analyzing data, optimizing campaigns and much more. I have a passion to dive into a problem, review feedback and determine the best path forward whether it&apos;s a process or a campaign optimization. I&apos;ve worked for mostly smaller teams which has given me the opportunity to work in many different areas of marketing, starting off in design to event management then to email marketing and demand generation to marketing operations.  </div>
              </div>
              <div className="font-light text-base pt-5 leading-6 text-gray-600">
              In 2022, I was part of the tech layoffs so was able to take some time to evaluate what I enjoyed most about my roles. The two things that stood out the most were problem-solving and design. So my goal in 2023 is to find a full time position that&apos;s focused on user experience. In the meantime, I&apos;m available for contract work!   </div>
              <div className="font-light text-base pt-5 leading-6 text-gray-600">
              I live in Louisville, Kentucky with my husband and our three fur-babies. I love to travel and enjoy exploring the outdoors. In my down time, I enjoy reading, puzzles, playing ultimate frisbee, and video games.   </div>

            
            </div>
            <div className="flex flex-row  pt-10 pb-10 ">
          <Link target="_blank" href="https://www.linkedin.com/in/kristin-francis/"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">VIEW FULL RESUME ON LINKEDIN</button></Link>
        </div>
          </div>

        </div>
        <div className="flex flex-col flex-1 pb-20  md:pl-20 pl-10 pr-10 md:pr-20">
          <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-2xl font-normal pl-2 text-gray-800">
            My <span className="text-darkpurple">Specialities</span>
            </div>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5">
                  <div className="font-display text-neutral-600 text-lg">
                    Marketing & Marketing Operations
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral--800">
                    Need help setting up an email or a landing page? A new tool? Not sure how your campaigns are performing? Want your campaigns to perform better? I can help.
                  </div>
                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-darkpgray">
                  <div className="font-display text-neutral-600 text-lg">
                    User Experience & Design
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-800">
                    From graphic design to creating a great user experience, I will help create the best design that will help drive traffic, conversions, and revenue.
                  </div>

                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-darkpgray">
                  <div className="font-display text-neutral-600 text-lg">
                    Organization & Process Creation
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-800">
                    Struggling with a project? Let me help optimize or create a new process. I’ll take a look at what you’re currently doing and review feedback from the team to optimize the process.
                  </div>

                </div>
              </div>
        

        </div>
        <div>
        <div className="flex flex-col flex-1 pb-20 pt-5  md:pl-20 pl-10 pr-10 md:pr-20 bg-[#F0E8EB]">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
          Interest <span className="text-[#795A95]">peaked?</span> 🤩 
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-700">
          Let’s make something special. 
          </div>
          <div className="self-center">
          <Link href="/contact"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">CONTACT ME</button></Link>
          </div>
        </div>
          
        </div>
        <Footer/>


      </main>

    </>
  )
}
