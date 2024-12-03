import { useEffect, useState } from "react";
import { FaGithub, FaUserTie, FaRegMoon, FaSuitcase, FaRocket, FaGears, FaRegCalendarCheck, FaLink, FaPaperPlane, FaCircleCheck } from "react-icons/fa6";
import { ButtonHead } from '../src/components/ButtonHead'
import cv from "../public/cv-omar2.pdf"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import useEmblaCarousel from "embla-carousel-react";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [data, setdata] = useState({ email: '', message: '' })
  const [emblaRef] = useEmblaCarousel({ loop: true });

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

  const svgs = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 12a12.083 12.083 0 01-6.16 1.578L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l-9-5v10l9 5 9-5V9l-9 5z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.518a2 2 0 01-2.856 2.856m-2.577-1.023a7.5 7.5 0 11.684-9.644m-3.797 8.6a4.992 4.992 0 014.59-2.015M6.5 6.5a7.5 7.5 0 109.356 11.878M12 3v3m6 6h3M9 12H6m15 0a7.5 7.5 0 11-3.944-6.5" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-1.016 1.722-1.016 2.022 0l1.714 5.8c.3 1.017 1.33 1.674 2.372 1.674h6.054c1.055 0 1.498 1.33.647 2.024l-4.91 3.8c-.84.653-1.223 1.842-.847 2.894l1.704 5.732c.384 1.294-.998 2.294-2.002 1.612L12 20.137l-5.803 3.636c-1.004.682-2.386-.318-2.002-1.612l1.704-5.732c.377-1.052-.006-2.241-.847-2.894l-4.91-3.8c-.85-.694-.408-2.024.647-2.024h6.054c1.043 0 2.073-.657 2.372-1.674l1.714-5.8z" /></svg>,
  ];

  return (
    <>
      <header className="max-w-3xl py-6 m-auto  dark:text-white relative w-full ">

        <button className="text-3xl  fixed top-0 right-0 px-6 mt-4 hover:scale-125 ease-in" onClick={toggleDarkMode}><FaRegMoon /></button>

      </header>
      <div className="main w-full px-5 xl:px-40 container m-auto  pb-20 xl:gap-32 relative ">




        <main className=" sm:px-0 pt-25  m-auto  max-w-[700px]">

          <div className="flex items-center flex-col sm:flex-row gap-10 pt-6 pb-4 sm:py-10 ">
            <img className="w-40 h-40 animate-pulse object-cover rounded-full border-4 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="https://avatars.githubusercontent.com/u/66282767?v=4" alt="" />
            <div>
              <h2 className="mb-2 text-3xl text-purple-500 font-semibold text-xl text-center sm:text-start">Omar Méndez Torres</h2>
              <p className="text-black/80 text-lg dark:text-white max-w-lg text-center sm:text-start text-balance sm:max-w-sm">A passionate Web Developer from Dominican republic  <img className="w-5 inline mb-1 ms-1" src="/dr.png" alt="" /></p>

              <div className=" sm:pt-5 flex items-center gap-6 justify-center sm:justify-start">
                <a target="_blank" href="https://github.com/omarmt29"><ButtonHead size='text-1xl' color={'bg-purple-400 text-white'} icon={<FaGithub />} text='Github' /></a>
                <a target="_blank" href={cv}><ButtonHead size='text-1xl' color={'bg-orange-400 text-white'} icon={<FaUserTie />} text='Cv' /></a>
              </div>
            </div>
          </div>

          <p className="text-black bg-black/5 dark:text-white text-center dark:bg-white/5 p-5 rounded">Desarrollador de software con más de 3 años de experiencia en proyectos web, especializado en frontend y con conocimientos en backend. He trabajado en proyectos personales y de terceros, enfrentando desafíos que han fortalecido mis habilidades técnicas y profesionales.</p>




        </main>

        <div className="flex w-full justify-between border-t border-purple-30/40 pt-8 mt-10 dark:border-t-white/10">
          <svg className="w-[90px] " viewBox="-18.458 -22.75 191.151 191.151" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M-18.458 6.58h191.151v132.49H-18.458V6.58z" fill="none"></path><path d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z" fill="#ffffff"></path><path d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534" fill="#f8981d"></path><path d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86" fill="#ffffff"></path><path d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z" fill="#f8981d"></path></g></svg>
          <svg className="w-[60px] " fill="#44a8b3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>
          <svg className="w-[60px] " viewBox="-4 0 264 264" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z" fill="#FF2D20"> </path> </g> </g></svg>
          <svg className="w-[60px] " viewBox="0 -14 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF"> </path> </g> </g></svg>
          <svg className="w-[60px] " viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="#8892BF"></circle> <path d="M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z" fill="white"></path> </g></svg>
          <svg className="w-[60px] " viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"></path> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"></path> </g></svg>
          <svg className="w-[60px] " viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="#028CB0"></circle> <path d="M6.45538 16C6.45538 19.7823 8.65538 23.04 11.8369 24.5885L7.28462 12.1162C6.73798 13.338 6.45541 14.6615 6.45538 16ZM16 25.5446C17.1085 25.5446 18.1746 25.35 19.1731 25.0031L19.1054 24.8762L16.1692 16.8377L13.3092 25.1554C14.1554 25.4092 15.0608 25.5446 16 25.5446ZM17.3115 11.5238L20.7638 21.7877L21.72 18.6062C22.1262 17.2862 22.4392 16.3385 22.4392 15.5177C22.4392 14.3331 22.0162 13.5208 21.6608 12.8946C21.17 12.0992 20.7215 11.4308 20.7215 10.6523C20.7215 9.77231 21.3815 8.96 22.3292 8.96H22.4477C20.689 7.34546 18.3874 6.45141 16 6.45538C14.4192 6.45509 12.8632 6.84777 11.4718 7.59809C10.0805 8.34842 8.89746 9.43285 8.02923 10.7538L8.63846 10.7708C9.63692 10.7708 11.1769 10.6438 11.1769 10.6438C11.7015 10.6185 11.7608 11.3715 11.2446 11.4308C11.2446 11.4308 10.7285 11.4985 10.1446 11.5238L13.6308 21.8638L15.7208 15.6023L14.2315 11.5238C13.898 11.5054 13.565 11.4772 13.2331 11.4392C12.7169 11.4054 12.7762 10.6185 13.2923 10.6438C13.2923 10.6438 14.8662 10.7708 15.8054 10.7708C16.8038 10.7708 18.3438 10.6438 18.3438 10.6438C18.86 10.6185 18.9277 11.3715 18.4115 11.4308C18.4115 11.4308 17.8954 11.49 17.3115 11.5238ZM20.7977 24.25C22.2416 23.4104 23.4399 22.2066 24.2729 20.7589C25.1059 19.3112 25.5444 17.6703 25.5446 16C25.5446 14.3415 25.1215 12.7846 24.3769 11.4223C24.5281 12.9211 24.3012 14.4339 23.7169 15.8223L20.7977 24.25ZM16 27C13.0826 27 10.2847 25.8411 8.22183 23.7782C6.15893 21.7153 5 18.9174 5 16C5 13.0826 6.15893 10.2847 8.22183 8.22183C10.2847 6.15893 13.0826 5 16 5C18.9174 5 21.7153 6.15893 23.7782 8.22183C25.8411 10.2847 27 13.0826 27 16C27 18.9174 25.8411 21.7153 23.7782 23.7782C21.7153 25.8411 18.9174 27 16 27Z" fill="white"></path> </g></svg>
        </div>

        <div className="border-t border-purple-30/40 mt-8 dark:border-t-white/10">
          {/* <div className="flex items-center gap-2 mt-10">
            <FaRocket className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl text-purple-500 font-semibold text-xl">Projects</h2>

          </div> */}





        </div>

        <div className="sm:mt-7 gap-16 grid grid-cols-2  ">
          <div className="col-span-2 md:col-span-1">
            <div className="mt-8 gap-16 grid grid-cols-3 ">

              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/salvamentosrd.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <a href="https://salvamentosrd.com/" target="_blank"> <h3 className="dark:text-white font-semibold text-xl mb-2">SalvamentosRD</h3> </a>
                  <p className="dark:text-white/60 text-[0.9rem]">Salvamento RD es líder en la venta de vehículos, salvamentos y piezas de repuesto.</p>
                  <a href="https://salvamentosrd.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/canino.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">Il Canino Pet Spa</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Il Canino se compromete a ofrecer servicios personalizados de peluquería y veterinaria.</p>
                  <a href="https://ilcaninopetspa.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/training.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">Training With Stella</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Entrena a tu perro hoy para disfrutar de una vida juntos llena de felicidad</p>
                  <a href="https://trainingwithstella.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/noval.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">Noval Properties</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">It's a corporate website for a real estate developer</p>
                  <div className="flex gap-2 mb-2 mt-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" className="w-10 h-10 object-contain" alt="" />
                    <img src="https://laravel.com/img/logotype.min.svg" className="w-10 h-10 object-contain" alt="" />
                    {/* <img src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript.jpg" className="w-7 h-7 object-contain" alt="" /> */}
                    <img src="https://jquery.com/wp-content/themes/jquery/images/logo-jquery.png" className="w-10 h-10 object-contain bg-gray-700" alt="" />
                    <img src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo-600x311.png" className="w-10 h-10 pb-2 object-contain" alt="" />
                  </div>
                  <a href="https://novalproperties.com/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/academy.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">Noval Academy</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Landing page for an event with a variety of functions from parallax scrolling, animations, etc.</p>
                  <div className="flex gap-2 mb-2 mt-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" className="w-10 h-10 object-contain" alt="" />
                    <img src="https://laravel.com/img/logotype.min.svg" className="w-10 h-10 object-contain" alt="" />
                    {/* <img src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript.jpg" className="w-7 h-7 object-contain" alt="" /> */}
                    <img src="https://jquery.com/wp-content/themes/jquery/images/logo-jquery.png" className="w-10 h-10 object-contain bg-gray-700" alt="" />
                    <img src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo-600x311.png" className="w-10 h-10 pb-2 object-contain" alt="" />
                    <img src="/magic.png" className="w-12 h-12 pb-2 object-contain" alt="" />
                  </div>
                  <a href="https://novalproperties.com/es/noval-academy" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              {/* <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full  border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/turistapp3.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">TuristApp</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">It's a web application for managing tourist activities, clients, and schedules</p>
                  <div className="flex items-end gap-2 mb-4 mt-5">
                    <img src="/reactjs.png" className="w-18 h-8 object-contain" alt="" />
                    <img src="/vitejs.png" className="w-18 h-8 object-contain" alt="" />
                    <img src="/supabase.png" className="w-18 h-8 object-contain" alt="" />
                  </div>
                  <a href="https://turistapp.netlify.app/auth/signin"><ButtonHead color='float-right sm:float-none bg-purple-400 text-white' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>

                </div>
              </div> */}





            </div>

          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mt-8 gap-16 grid grid-cols-3 ">


              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/events.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">Mercado Events</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Organizamos una gran variedad de rankings, premios y summits alrededor del año</p>
                  <a href="https://revistamercado.do/events/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/tbodr.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">The best of dr</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Te ofrecemos una selección especial con los tesoros más destacados de todo el país.</p>
                  <a href="https://thebestofdr.do/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/winners.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">Winners 2024</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Cada año disfrutamos de una selección de los personajes y proyectos que nos hacen sentir orgullosos de ser dominicanos.</p>
                  <a href="https://thebestofdr.do/winner-2024/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-3 flex-col sm:flex-row flex">
                <div className="w-full h-full sm:h-40">
                  <img className=" rounded-md object-cover w-full h-full   border-2 border-yellow-500 shadow-purple-500 shadow-md  p-1" src="/elitehub.png" alt="" />
                </div>
                <div className="sm:pl-4 w-full mt-4 sm:mt-0">
                  <h3 className="dark:text-white font-semibold text-xl mb-2 ">EliteHub</h3>
                  <p className="dark:text-white/60 text-[0.9rem]">Somos la plataforma que conecta a tu marca con una audiencia comprometida.</p>
                  <a href="https://revistamercado.do/elitehub/" target="_blank"> <ButtonHead color='float-right sm:float-none bg-purple-400 text-white px-3 mt-4 py-1' size='sm:text-[0.9rem]' text='Live' icon={<FaLink />} /></a>
                </div>
              </div>





            </div>
          </div>
        </div>





      </div>

    </>
  )
}

export default App
