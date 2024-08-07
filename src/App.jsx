import { useEffect, useState } from "react";
import { FaGithub, FaUserTie, FaRegMoon, FaSuitcase, FaRocket, FaGears, FaRegCalendarCheck, FaLink, FaPaperPlane, FaCircleCheck } from "react-icons/fa6";
import { ButtonHead } from '../src/components/ButtonHead'
import cv from "../public/cv-omar2.pdf"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(true);
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [data, setdata] = useState({ email: '', message: '' })


  const sendEmail = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
    console.log(data.email.length)
    if (data.email.length == 0 || data.message.length == 0) {
      alert('Por favor, completa los campos')
    } else {
      emailjs.sendForm('service_6asee9h', 'template_n2xeigm', form.current,
        'PRMD9SU60NX1m1aPz')
        .then((result) => {
          setIsChecked(true);

          // Restablecer isChecked después de un tiempo para permitir múltiples clics
          setTimeout(() => {
            setIsChecked(false);
            setdata({ email: '', message: '' });
          }, 1500);
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };


  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <header className="max-w-3xl py-6 m-auto  dark:text-white relative w-full ">

        <button className="text-3xl  fixed top-0 right-0 px-6 mt-4 hover:scale-125 ease-in" onClick={toggleDarkMode}><FaRegMoon /></button>

      </header>
      <div className="main w-full px-5 xl:px-40 container m-auto   xl:gap-32 relative ">

        <main className=" sm:px-0 pt-25 pb-20 m-auto  max-w-[600px]">

          <div className="flex items-center flex-col sm:flex-row gap-10 pt-6 pb-4 sm:py-10 ">
            <img className="w-40 h-40 animate-pulse object-cover rounded-full border-4 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="https://avatars.githubusercontent.com/u/66282767?v=4" alt="" />
            <div>
              <h2 className="mb-2 text-3xl text-purple-500 font-semibold text-center sm:text-start">Omar Méndez Torres</h2>
              <p className="text-black/80 text-lg dark:text-white max-w-lg text-center sm:text-start text-balance sm:max-w-sm">A passionate frontend developer from Dominican republic ✨</p>
              <div className="pt-5 sm:pt-10 flex items-center gap-6 justify-center sm:justify-start">
                <a target="_blank" href="https://github.com/omarmt29"><ButtonHead size='text-1xl' color={'bg-purple-400 text-white'} icon={<FaGithub />} text='Github' /></a>
                <a target="_blank" href={cv}><ButtonHead size='text-1xl' color={'bg-orange-400 text-white'} icon={<FaUserTie />} text='Cv' /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-300 mt-8 mb-10 dark:border-t-white/20">
            <div className="flex items-center gap-2 mt-10">
              <FaSuitcase className="text-yellow-500 text-2xl" />
              <h2 className="text-2xl text-purple-500 font-semibold">Experience</h2>

            </div>
            <div className="mt-7">
              <h3 className="dark:text-white">Web Developer ● Noval Properties</h3>
              <div className="flex mt-1 items-center dark:text-purple-300 text-xs gap-1 mb-5">
                <FaRegCalendarCheck />
                <p className="">7/1/2022 - Current</p>
              </div>
              <ul className="flex list-disc flex-col pl-8 mt-3 gap-3">
                <li className="dark:text-white/80">
                  <p className="text-sm">
                    Professional expertise in developing robust web applications tailored to meet diverse needs and functionalities.
                  </p>
                </li>

                <li className="dark:text-white/80">
                  <p className="text-sm">
                    Crafting seamless and intuitive UI/UX designs while optimizing landing pages for enhanced user engagement and conversion rates.
                  </p>
                </li>

                <li className="dark:text-white/80">
                  <p className="text-sm">
                    Enhancing website performance significantly by implementing JavaScript optimization techniques, resulting in faster load times and smoother user experiences.
                  </p>
                </li>

                <li className="dark:text-white/80">
                  <p className="text-sm">
                    Implementation of SEO strategies and conducting comprehensive web audits to boost visibility, traffic, and overall search engine rankings.
                  </p>
                </li>

                <li className="dark:text-white/80">
                  <p className="text-sm">
                    Conducting thorough optimizations and audits aimed at improving the overall quality and performance of the website.
                  </p>
                </li>


              </ul>
            </div>


          </div>

          <div className="border-t border-purple-300 mt-8 mb-10 dark:border-t-white/20">
            <div className="flex items-center gap-2 mt-10">
              <FaGears className="text-yellow-500 text-2xl" />
              <h2 className="text-2xl text-purple-500 font-semibold">Skills</h2>

            </div>
            <div className="mt-7">
              <ul className="flex list-disc flex-col pl-8 mt-3 gap-3">
                <li className="dark:text-white/80">
                  <p className="text-sm">
                  I am an expert in WordPress with extensive experience in creating <span className="dark:text-yellow-400 text-yellow-600 font-semibold">custom plugins</span>, <span className="dark:text-yellow-400 text-yellow-600 font-semibold">custom templates</span>, and advanced theme customization. I proficiently use PHP and JavaScript to develop bespoke functionalities and utilize tools like <span className="dark:text-yellow-400 text-yellow-600 font-semibold">ACF (Advanced Custom Fields)</span> and WooCommerce to extend WordPress capabilities. Additionally, I am well-versed in performance optimization and security, ensuring that websites are scalable and secure.
                  </p>
                </li>
                <li className="dark:text-white/80">
                  <p className="text-sm">
                    Web Application Development: Proficiency in various programming languages <span className="dark:text-yellow-400 text-yellow-600 font-semibold">(Php and JavaScript)</span>, frameworks and librarys <span className="dark:text-yellow-400 text-yellow-600 font-semibold">(React, Laravel, tailwind, boostrap, etc..)</span>, and databases / API Cloud Services <span className="dark:text-yellow-400 text-yellow-600 font-semibold">(Mysql and Supabase)</span> for creating scalable and functional web applications.
                  </p>
                </li>

                <li className="dark:text-white/80">
                  <p className="text-sm">
                    UI/UX Design and Landing Page Optimization: Skills in graphic design tools <span className="dark:text-yellow-400 text-yellow-600 font-semibold">(Adobe XD, Figma, etc.)</span>, understanding of user-centric design principles, expertise in HTML/CSS for web layout, and knowledge of A/B testing for optimizing landing pages.
                  </p>
                </li>

                <li className="dark:text-white/80">
                  <p className="text-sm">
                    SEO Implementation and Auditing: Proficiency in diverse SEO tools <span className="dark:text-yellow-400 text-yellow-600 font-semibold">(Google Speed Insight, SEMrush, Ahref, etc..)</span>, adept at on-page/off-page SEO strategies, conducts technical website audits, and excels in keyword research and content optimization.
                  </p>
                </li>



              </ul>
            </div>


          </div>

          <div className="border-t border-purple-300 mt-8 dark:border-t-white/20">
            <div className="flex items-center gap-2 mt-10">
              <FaRocket className="text-yellow-500 text-2xl" />
              <h2 className="text-2xl text-purple-500 font-semibold">Projects</h2>

            </div>

        


            <div className="mt-8 gap-16 grid grid-cols-3 ">


              <div className="col-span-3 sm:col-span-2 flex-col sm:flex-row flex">
                <div className="w-full h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/canino.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold">Il Canino Pet Spa</h3>
                  <p className="dark:text-white/60 text-xs">Il Canino se compromete a ofrecer servicios personalizados de peluquería y veterinaria, promoviendo la salud y el bienestar de nuestros amigos de cuatro patas.</p>
                  <a href="https://ilcaninopetspa.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-xs' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2 flex-col sm:flex-row flex">
                <div className="w-full h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/training.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold">Training With Stella</h3>
                  <p className="dark:text-white/60 text-xs">Entrena a tu perro hoy para disfrutar de una vida juntos llena de felicidad</p>
                  <a href="https://trainingwithstella.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-xs' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2 flex-col sm:flex-row flex">
                <div className="w-full h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/noval.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold">Noval Properties</h3>
                  <p className="dark:text-white/60 text-xs">It's a corporate website for a real estate developer</p>
                  <div className="flex gap-2 mb-2 mt-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" className="w-10 h-10 object-contain" alt="" />
                    <img src="https://laravel.com/img/logotype.min.svg" className="w-10 h-10 object-contain" alt="" />
                    {/* <img src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript.jpg" className="w-7 h-7 object-contain" alt="" /> */}
                    <img src="https://jquery.com/wp-content/themes/jquery/images/logo-jquery.png" className="w-10 h-10 object-contain bg-gray-700" alt="" />
                    <img src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo-600x311.png" className="w-10 h-10 pb-2 object-contain" alt="" />
                  </div>
                  <a href="https://novalproperties.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 py-1' size='sm:text-xs' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2 flex-col sm:flex-row flex">
                <div className="w-full h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/academy.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold">Noval Academy</h3>
                  <p className="dark:text-white/60 text-xs">Landing page for an event with a variety of functions from parallax scrolling, animations, etc.</p>
                  <div className="flex gap-2 mb-2 mt-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" className="w-10 h-10 object-contain" alt="" />
                    <img src="https://laravel.com/img/logotype.min.svg" className="w-10 h-10 object-contain" alt="" />
                    {/* <img src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript.jpg" className="w-7 h-7 object-contain" alt="" /> */}
                    <img src="https://jquery.com/wp-content/themes/jquery/images/logo-jquery.png" className="w-10 h-10 object-contain bg-gray-700" alt="" />
                    <img src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo-600x311.png" className="w-10 h-10 pb-2 object-contain" alt="" />
                    <img src="/magic.png" className="w-12 h-12 pb-2 object-contain" alt="" />
                  </div>
                  <a href="https://novalproperties.com/es/noval-academy" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white' size='sm:text-xs' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2 flex-col sm:flex-row flex">
                <div className="w-full h-40">
                  <img className=" rounded-md object-cover w-full h-full  border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/turistapp3.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold">TuristApp</h3>
                  <p className="dark:text-white/60 text-xs">It's a web application for managing tourist activities, clients, and schedules</p>
                  <div className="flex items-end gap-2 mb-4 mt-5">
                    <img src="/reactjs.png" className="w-18 h-8 object-contain" alt="" />
                    <img src="/vitejs.png" className="w-18 h-8 object-contain" alt="" />
                    <img src="/supabase.png" className="w-18 h-8 object-contain" alt="" />
                    {/* <img src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript.jpg" className="w-8 h-8  object-contain" alt="" /> */}
                  </div>
                  <a href="https://turistapp.netlify.app/auth/signin"><ButtonHead color='float-right sm:float-none bg-purple-400 text-white' size='sm:text-xs' text='Live' icon={<FaLink />} /></a>

                </div>
              </div>





            </div>


          </div>



        </main>

        {/* <div className="border-t border-purple-300 sm:border-none xl:sticky top-0 h-24 dark:border-t-white/20  xl:col-span-2">
          <div className="flex items-center gap-2 mt-10">
            <FaPaperPlane className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl text-purple-500 font-semibold">Contact me</h2>
          </div>
          <div className="form">
            <div class="relative py-3 sm:max-w-xl mt-12 sm:mx-auto">
              <div
                class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
              </div>
              <div class="relative px-4 py-10 bg-white/40 shadow-lg sm:rounded-3xl sm:p-8">
                <div class="max-w-md mx-auto">
                  <div class="divide-y divide-gray-200">
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <form ref={form} onSubmit={sendEmail} >
                        {isChecked && <div className="check-animation"><FaCircleCheck className="text-green-300 text-[150px]" /></div>}
                        <div class="relative mb-8">
                          <input value={data.email} autocomplete="off" onChange={e => setdata({ ...data, email: e.target.value })} id="email" name="email" type="text" class="focus:bg-purple-800 focus:text-white peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 bg-white/90 rounded-lg pl-3" placeholder="Email address" />
                          <label for="email" class="absolute left-3 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:pl-0 peer-focus:text-gray-600  peer-focus:text-sm">Email Address</label>
                        </div>
                        <div class="relative">
                          <textarea value={data.message} onChange={e => setdata({ ...data, message: e.target.value })} autocomplete="off" id="message" name="message" class=" py-2 focus:bg-purple-800 focus:text-white peer placeholder-transparent h-28  w-full border-b-2 border-gray-300 text-gray-900 bg-white/90 rounded-lg focus:outline-none focus:borer-rose-600 pl-3" placeholder="Password" />
                          <label for="message" class="absolute left-3 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:pl-0  peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
                        </div>
                        <div class="relative flex justify-center mt-8 sm:mt-4">
                          <button class="bg-white text-black hover:scale-110 transition-all ease-in rounded-md px-4 text-xl font-semibold py-1">Send</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


      </div>

    </>
  )
}

export default App
