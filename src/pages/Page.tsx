import People from "../assets/people.jpg"
import Afribeath1 from "../assets/Afribeat1.png"
import { BsUniversalAccessCircle } from "react-icons/bs";

const Page2 = () => {
  return (
    <div className='w-[100%] flex justify-center items-center  text-white bg-[#0f1426] '>
      <div className='w-[80%]  md:w-[70%]'>

        {/* Hero Page */}

<div className="lg:grid-cols-2 grid mt-20 md:items-center md:text-left">
    {/* Text Content Section */}
    <div className="text-wrap">
        <h1 className="font-medium text-[40px] md-[50px] lg:text-[61px] normal-case leading-11">
            Empowering Tech<br/> Talents Through <br/> Virtual Internships <br/> Program
        </h1>
        <h3 className="mt-10 leading-relaxed text-gray-300">
            We believe in creating meaningful tech opportunities for tech training <br/> for students to bridge the gap between theory and practical <br/> experiences
        </h3>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
            <button className="rounded-full w-[250px] h-[60px] text-[15px] flex justify-center items-center bg-gradient-to-r from-[#0de5e1] via-[#0b35e7] to-[#0b35e7]">
                Join Next Cohort
            </button>
            <button className="rounded-full w-[250px] h-[60px] text-[15px] flex justify-center items-center border border-white hover:bg-[#0b35e7] hover:border-transparent">
                How it works
            </button>
        </div>
    </div>

    {/* Image Section */}
    <img className="rounded object-fill mt-10 w-[100%] h-full" src={Afribeath1} alt="" />
</div>




        {/* page2 */}

    


     <div className="mt-52 grid gap-8 md:grid-cols-2 w-[100%] md:items-center">
    {/* Left Section */}
    <div className="space-y-4 max-w-[80%] md:max-w-[80%]">
        <div>/AFRIBEATH/</div>
        <div className="text-[40px] md:text-[50px]">Unlock Your Tech Potential</div>
        <div className="text-gray-300 text-[18px] leading-8">
            Elevate your skills with Our Virtual Internship Program! Dive into Real-World Projects,
            connect with Industry Experts, and shape your future in Technology Today.
        </div>
    </div>

    {/* Right Section */}
    <div className="max-w-[70%] space-y-10">
        <div className="text-[30px]">Our Application Process</div>
        <div className="text-gray-300 text-[18px] leading-8">
            Elevate your skills with Our Virtual Internship Program! Dive into Real-World Projects,
            connect with Industry Experts, and shape your future in Technology Today.
        </div>
        <div className="text-[#07e1d6] text-[20px]">Below is a closer look at how our programs work:</div>
    </div>
</div>


     {/* Recommendations */}
<div className=' grid gap-8 md:grid-cols-2 lg:grid-cols-3  mt-52'>
    <div className='w-[400px] h-[400px] p-10 bg-[#2b2a4e]  space-y-5 rounded-2xl flex justify-center flex-col '>
    <div className='w-[100px] h-[100px] rounded-full bg-blue-300 flex justify-center items-center text-[40px]'><BsUniversalAccessCircle /></div>
    <div className='text-2xl'>Recommendation</div>
    <div className='leading-7'>Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool
    </div>
    </div>



    <div className='w-[400px] h-[400px] p-10  space-y-5 rounded-2xl flex justify-center flex-col '>
    <div className='w-[100px] h-[100px] rounded-full bg-blue-300 flex justify-center items-center text-[40px]'><BsUniversalAccessCircle /></div>
    <div className='text-2xl'>General Assessment</div>
    <div className='leading-7'>Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool
    </div>
    </div>


     
    <div className='w-[400px] h-[400px] p-10  space-y-5 rounded-2xl flex justify-center flex-col '>
    <div className='w-[100px] h-[100px] rounded-full bg-blue-300 flex justify-center items-center text-[40px]'><BsUniversalAccessCircle /></div>
    <div className='text-2xl'>Skills Assessment</div>
    <div className='leading-7'>Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool
    </div>
    </div>


</div>


    {/* Getting Ready for you */}
   <div className="mt-52 grid md:grid-cols-2 gap-12  ">
   <div className="w-[100%] md:w-[80%]">
        <img src={People} alt="People" />
    </div>
    <div className="space-y-8 md:w-[90%] ">
        <div>/GETTING READY FOR YOU/</div>
        <div className="text-[40px]">Join Our Next Cohort Starting July 2024!</div>
        <div className='leading-7'>Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool 
        ensuring a curated and quality pool 
        ensuring a curated and quality pool 
        Intern joins upon Recommendation from a school, company or organization, 
        <br/>
        <br/>
        ensuring a curated and quality pool 
        ensuring a curated and quality pool 
        ensuring a curated and quality pool 
        ensuring a curated and quality pool 
        ensuring a curated and quality pool 
    </div>
    </div>
   </div>




   {/* Be Informed */}
    <div className="w-full flex justify-center items-center text-center flex-col mt-52
     gap-8 mb-10">
        <div>/BE INFORMED/</div>
        <div className="text-[40px] md:[50px]">Next Cohort is happening soon!</div>
         <div className='leading-7 text-gray-300 w-[60%]'>Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool from a school, company or organization, 
        ensuring a curated and quality pool and quality pool from a school, company or organization, 
        ensuring a curated and quality pool
    </div>
   <div className="md:flex space-x-10  ">
   <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent
           focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>



    <button className='rounded-full w-[350px] h-[60px]  text-[15px] flex justify-center items-center 
bg-gradient-to-r from-[#0de5e1] via-#0b35e7 to-[#0b35e7]
'>Keep me informed </button>
   </div>
    </div>



    {/* FAQ */}

    <div className=" grid md:grid-cols-2  mt-52">
    <div className="space-y-8 w-[75%]">
      <div>/FAQ/</div>
      <div className="text-[40px]">Frequently Asked Questions from the Afribeath Virtual internship community </div>
      <div className="text-gray-300"> In our commitment to simplicity, we employ the latest technology to propel you towards your goal</div>
      <button className='rounded-full w-[250px] h-[60px]  text-[15px] flex justify-center items-center 
bg-gradient-to-r from-[#0de5e1] via-#0b35e7 to-[#0b35e7]
'>Have Questions?</button>
    </div>

    <div className="space-y-8 mt-10 w-[90%]">
      <div className=" text-[20px] text-[#07e1d6] ">How does Afribeath virtual internship program work</div>
      <div className="text-gray-300">Afribeath's internship is strict but fair. First, you need someone to recommend you. there are two tests
        - one general and one about your skills. you have to pass both getting at least 70%. This makes sure we pick really 
        good interns. During your internship. Afribeath  ath helps you a lot. They give you support and tools. they also check   how  well you're doing.
        If you finish the internshi, they say you did  a great job and might even offer you more opportunities. you can also oin 
          projects for more learning. Afribeath cares about making your internship awesome.  `
      </div>
    <div className="space-y-8">
    <div className=" w-full h-0.5  my-2 bg-gray-100   "></div>
      <div className="text-[20px]">Who can recommend Interns on Afribeath <span className="ml-10 font-light text-[40px]">+</span></div>
      <div className=" w-full h-0.5  my-2 bg-gray-100  "></div>
      <div className="text-[20px]">what is the eligibility criteria for interns? <span className="ml-10 font-light text-[40px]">+</span></div>
      <div className=" w-full h-0.5  my-2 bg-gray-100   "></div>
      <div className="text-[20px]">what happens after the virtual internship is completed? <span className="ml-10 font-light text-[40px]">+</span></div>
      <div className=" w-full h-0.5  my-2 bg-gray-100   "></div>
      <div className="text-[20px]">Is there a fee associated with enrolling interns on Afribeat? <span className="ml-10 font-light text-[40px]">+</span></div>
      <div className=" w-full h-0.5  my-2 bg-gray-100   "></div>
      <div className="text-[20px]">What support is  for interns during their virtual internships? <span className="ml-10 font-light text-[40px]">+</span></div>
    </div>
    </div>
    </div>



    {/* Blue Box */}

    <div className="w-full justify-center flex items-center mt-52">
   
    <center className="w-[70%] border-collapse rounded-[20px] h-[60vh] bg-gradient-to-r from-[#0de5e1] via-#0b35e7 to-[#0b35e7]
    flex justify-center items-center flex-col 
    ">
    <div className="p-[100px] space-y-5">
    <div>Join Us now</div>
    <div className="text-[30px]">Join Us Today at Afribeath</div>
    <div className='leading-5 text-white'>Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool Intern joins upon Recommendation from a school, company or organization, 
        ensuring a curated and quality pool
    </div>
    <button className='rounded-full w-[150px] mt-5 text-black h-[40px]  text-[15px] flex justify-center items-center 
bg-white
'>Join Us </button>
    </div>
    </center>
    </div>


    {/* Footer */}

    <div>
    <footer className="text-white body-font mt-52">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent
           focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <div className="lg:block hidden">waistcoat green juice </div>
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto  flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Josephine —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@Afribeath</a>
      </p>

    </div>
  </div>
</footer>
    </div>
      </div>
    </div> 
  )
}

export default Page2