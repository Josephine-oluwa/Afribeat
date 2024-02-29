import Afribeat1 from "../assets/Afribeat1.png"
import logo from "../assets/logo.svg"
import people from "../assets/people.jpg"

const LandingPage = () => {
  return (
   <section className='flex justify-center items-center bg-[#0f1426]  text-white'>
  <div className='w-[90%]'>
<div className='md:grid-cols-2 grid ml-36  md:items-center md:text-left'>
      <div className=' '>
 <h1 className='font-medium text-[40px]  md-[50px] lg:text-[61px]   normal-case leading-11'>Empowering Tech<br/> Talents Through <br/> Virtual Internships <br/> Program</h1>
 <h3 className='mt-10 leading-relaxed text-slate-300'>We believe in  creating meaningful tech opportunities for tech training <br/> for students to bridge the gap between theory and practical <br/> experiences  </h3>
<div className='flex  gap-4 mt-10'>
<button className='rounded-full w-[250px] h-[60px]  text-[15px] flex justify-center items-center 
bg-gradient-to-r from-[#0de5e1] via-#0b35e7 to-[#0b35e7]
'>Join Next Cohort </button>
<button className='rounded-full w-[250px] h-[60px]  text-[15px] flex justify-center items-center 
border border-white hover:bg-[#0b35e7] hover:border-transparent
'>How it works</button>

</div>
 </div>

        <img className='rounded object-fill  p-10 '  src={Afribeat1} alt=""></img>
  
</div>
<br/>
<br/>
<br/>
<br/>


<br/>
<br/>
<br/>
<br/>
<br/>

<div className='md:grid-cols-3 grid gap-8  md:text-center text-left'>
{/* <div className='w-[50%] h-[40%] bg-[#2b2a4e]  rounded-2xl flex justify-center items-center'>
<div className='w-[100vw] h-[100vh] flex justify-between flex-col text-left'>
<div className='w-[100px] h-[100px] rounded-full bg-blue-300 '></div>
  <div className=' text-2xl'>Recommendation</div>
  <div className='text-slate-400'>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences </div>
</div>
</div> */}
<div className='w-[400px] h-[400px] bg-[#2b2a4e]  rounded-2xl flex justify-center items-center'>
<div className='w-[70%] h-[70%] flex justify-between flex-col text-left'>
<div className='w-[100px] h-[100px] rounded-full bg-blue-300 '></div>
  <div className=' text-2xl'>General Assessment</div>
  <div className='text-slate-400'>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences </div>
</div>
</div>
<div className='w-[400px] h-[400px] bg-[#2b2a4e]  rounded-2xl flex justify-center items-center'>
<div className='w-[70%] h-[70%] flex justify-between flex-col text-left'>
<div className='w-[100px] h-[100px] rounded-full bg-blue-300 '></div>
  <div className=' text-2xl'>Skills Assessment</div>
  <div className='text-slate-400'>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences </div>
</div>
</div>

</div>





<br/>
<br/>
<br/>
<br/>
<div className='md:grid-cols-2 grid gap-8 md:items-center md:text-left'>
<img className='' src={people} alt=''>
</img>
<div>
<div className='font-medium text-4xl mb-5'> JOIN OUR NEXT <br/>COHORT STARTING  <br/> JULY 2024</div>
<h3>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical  experiences 
We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical  experiences </h3>
</div>

</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className=''>
  <center>/  BE INFORMED     /</center>
  <center className='font-medium text-4xl mb-5'> OUR NEXT COHORT IS HAPPENING SOON!</center>
  <center> We believe in  creating meaningful tech opportunities for students to bridge the gap between theory and practical  experiences 
We believe in  creating meaningful tech opportunities  for students to bridge the gap between theory and practical  experiences 
We believe in  creating meaningful tech opportunities  for students to bridge the gap between theory and practical  experiences
</center>

</div>
  </div>
 
   </section>
  )




}

export default LandingPage