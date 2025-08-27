import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Footer} from "../components/Footer";

import {MobileMenuButton} from "../components/Navigation";


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
        <MobileMenuButton/>

          <div className="flex flex-row flex-wrap-reverse justify-between text-sm">
            <div className="flex flex-col md:w-6/12">
              <div className="pt-20 md:pl-20 pl-10 font-display text-4xl font-normal text-gray-800">
                Hey there, <span className="text-[#795A95]"> Kristin here</span> 👋

              </div>
              <div className="pt-3 md:pl-20 pl-10 pr-10 text-xl font-light leading-7 text-gray-600">
                I’m a marketing professional with over ten years of experience who loves working with tech, design, and process optimizations.

              </div>
              <div className="md:pl-20 pl-10 pt-5 flex flex-row">
              <Link href="/projects"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">VIEW PROJECTS</button></Link>
              <Link href="/contact"><button className="ml-5 pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral tracking-wide">CONTACT ME</button></Link>
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

          <div className="flex flex-row text-sm w-full lg:-mt-44 pb-10 md:-mt-18 pt-20">
            <div className="flex flex-col flex-1">
              <div className="md:pl-20 pl-10 mb-4 font-display text-2xl font-normal text-gray-800">
                My <span className="text-darkpurple">Specialities</span>
              </div>
              <div className="md:pl-20 pl-10  pr-10 md:pr-20 grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5">
                  <div className="font-display text-neutral-600 text-lg">
                    Marketing & Marketing Operations
                  </div>
                  <div className=" text-sm pt-2 leading-5 text-neutral-800">
                    Need help setting up an email or a landing page? A new tool? Not sure how your campaigns are performing? Want your campaigns to perform better? I can help.
                  </div>
                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-gray-800">
                  <div className="font-display text-neutral-600 text-lg">
                    User Experience & Design
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-800">
                    From graphic design to creating a great user experience, I will help create the best design that will help drive traffic, conversions, and revenue.
                  </div>

                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-gray-800">
                  <div className="font-display text-neutral-600 text-lg">
                    Organization & Process Creation
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-800">
                    Struggling with a project? Let me help optimize or create a new process. I’ll take a look at what you’re currently doing and review feedback from the team to optimize the process.
                  </div>

                </div>
              </div>
            </div>

          </div>
          <Link target="_blank" href="https://www.linkedin.com/in/kristin-francis/"><div className="flex flex-row  pb-20 justify-center">
          <button className="pr-1 font-display text-coral text-[18px]  self-end tracking-wide">VIEW FULL RESUME ON LINKEDIN</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
              </div>
        </div></Link>
        


        </div>
        <div className="flex flex-row justify-center font-display text-4xl font-normal pt-20 text-gray-800">
        <span className="text-[#795A95] ">Work</span> &nbsp;&&nbsp; <span className="text-[#795A95]">Projects</span>
        </div>
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
        <Link href="/projects/landingpage"><div className="flex flex-col w-full bg-tan rounded-lg sm:mb-16">
            <div  >
              <Image className="w-full"
                src="/landingpage_small.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600 ">
                Landing Page Creation & Optimization
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
              Created landing pages and optimized pages by a/b testing images, headlines, and layout to optimize leads and conversions.
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px] ">
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
          <Link href="/projects/digital_print"><div className="flex flex-col w-full bg-tan rounded-lg sm:mt-16">
            <div >
              <Image className="w-full"
                src="/deck_small.png"
                alt="Digital & Print Design"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg">
              <div className="font-display text-xl text-neutral-600 ">
                                Digital Marketing Overhaul

              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
              Developed cohesive marketing materials for a premium deck construction business, crafting landing pages, detailed project showcase collateral, and strategic ad campaigns that highlighted custom design capabilities and attracted qualified leads.
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

          <Link href="/projects/digital_design"><div className="flex flex-col w-full bg-tan rounded-lg sm:mb-16 sm:-mt-16">
            <div>
              <Image className="w-full"
                src="/db-portfolio.png"
                alt="Digital Design"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600">
                Cross-Platform Marketing Materials
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
              Designed integrated marketing assets for a popular arcade-restaurant chain, crafting everything from eye-catching social posts and targeted ads to promotional emails and event flyers that captured the brand's energetic, family-friendly atmosphere.
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
          <Link href="/projects/flyer"><div className="flex flex-col w-full bg-tan rounded-lg mt-16 -mt-0">
            <div>
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Bridal Show Flyer"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600">
                Event Marketing Flyer Design
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
                Created a compelling event flyer that effectively explained the service process and included strategic calls-to-action to convert event attendees into qualified website visitors and potential clients.

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
        <div className="flex flex-row p-10 pb-20 justify-center">
        <Link href="/projects"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">VIEW MORE PROJECTS</button></Link>
        </div>

        <Footer/>


        
      </main>

    </>
  )
}
