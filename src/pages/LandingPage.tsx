import Afribeat1 from "../assets/Afribeat1.png"
import logo from "../assets/logo.svg"
import people from "../assets/people.jpg"

const LandingPage = () => {
  return (
   <section className='flex justify-center items-center bg-[#0f1426]  text-white '>
  <div className='w-[70%] bg-[#0f142 '>
<div className='md:grid-cols-2 grid gap-8 md:items-center md:text-left'>
      <div className=' '>
 <h1 className='font-medium text-4xl '>EMPOWERING TECH <br/> TALENTS THROUGH <br/> VIRTUAL INTERNSHIP <br/> PROGRAM</h1>
 <h3 className='mt-5'>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences  </h3>
<div className='flex  gap-4 mt-5'>
<div className='rounded-3xl px-7 py-3 bg-blue-500 sm:px-5 sm:py-2'>Join Next Cohort </div>
 <div className='rounded-3xl px-7 py-3 bg-blue-500 sm:px-5 sm:py-3'>Join Next Cohort </div>
</div>
 </div>
    <div>
        <img className='w-full rounded lg' src={Afribeat1} alt='Afirbeat'></img>
    </div>
</div>
<br/>
<br/>
<br/>
<br/>

    <div className=' md:grid-cols-2 grid gap-8 md:items-center md:text-left'>
<div className=' '>
    <img className='w-[200px] h-[100px] object-contain'  src={logo}  alt=''></img>
<h1 className='font-medium text-4xl mb-5'>UNLOCK YOUR TECH POTENTIAL</h1>
<h3>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences </h3>
</div>
<div className=''>
<h2 className='font-medium text-2xl mb-5'>Our Application Process </h2>
<h3>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences </h3>
<h3 className='text-[#09a19d] mt-5'>Have a closer look at our works </h3>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

<div className='md:grid-cols-3 grid gap-8  md:text-center text-left'>
<div className='w-[50%] h-[40%] bg-[#2b2a4e]  rounded-2xl flex justify-center items-center'>
<div className='w-[100vw] h-[100vh] flex justify-between flex-col text-left'>
<div className='w-[100px] h-[100px] rounded-full bg-blue-300 '></div>
  <div className=' text-2xl'>Recommendation</div>
  <div className='text-slate-400'>We believe in  creating meaningful tech opportunities <br/> for students to bridge the gap between theory and practical <br/> experiences </div>
</div>
</div>
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