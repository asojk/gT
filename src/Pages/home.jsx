import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

import {Ri24HoursLine,} from "react-icons/ri";
import { SiEsbuild } from "react-icons/si";
import { TbReplaceFilled } from "react-icons/tb";

import Hero from "../Components/main/Hero.jsx";
import Testis from "../Components/main/testis.jsx";
import Contact from "../Components/main/Contact.jsx";
import Clients from "../Components/main/Clients.jsx";
import Expertise from "../Components/main/expertise.js";


function Home() {
  useEffect(() => {
    if (!localStorage.getItem("toastShown")) {
      setTimeout(async function () {
        const Toast = Swal.mixin({toast: true, willOpen: true, width: "50rem", position: "bottom-left", iconColor: "white", customClass: {popup: "colored-toast", }, showCloseButton: true, showConfirmButton: false, });
        await Toast.fire({icon: "info", title: "The New Look of Grell",
        html: "We have made it easier to navigate and find the information you are looking for. We have also added a new feature that allows you to request a quote online. We look forward to hearing from you!", });
        localStorage.setItem("toastShown", "true"); }, 2500); } }, []);

  useEffect(() => {AOS.init(); AOS.refresh(); }, []);

  return (
<>
			<Helmet
				title='GRELL'
				meta={[
					{ name: 'description', content: 'Business and contact information.' },
					{
						name: 'keywords',
						content:
							'Arena Roofing, Business Roofing, Church Roofing, Fast Food Roofing, Hospital Roofing, Industrial Roofing, Mall Roofing, Office Building Roofing, Restaurant Roofing, School Roofing, Shopping Center Roofing, Warehouse Roofing, Vinyl Roofing, Commercial Roofing, Prefabricated Roofing, PVC Roofing, Reflective Roofing, Single-Ply Roofing, White Commercial Roofing, Commercial Roof, Commercial Roof Installation, Commercial Roofing Companies, Commercial Roofing Materials, Custom-Fabricated Accessories, Custom-Fabricated Membrane, Custom-Fabricated Roofing System, Flat Roof Materials, Flat Roofing System, Low Slope Roofing System, Prefabricated Roofs, PVC Roofs, PVC Roof Systems, PVC Roofing Material, PVC Roofing Membrane, Single-Ply Membrane, Single-Ply Membrane Roof, Thermoplastic Roof, White Roof Membrane, White Vinyl Roof, Vinyl Roof, Vinyl Roofing Membrane, Vinyl Roofing System, Vinyl Single-Ply Roofing, Vinyl Single-Ply Roofing Membrane, Vinyl Single-Ply Roofing System',
					},
				]}
			/>
<span className="fixed -top-[125px] left-[50%] z-10 h-[25vh] w-[calc(100vw+1600px)] -translate-x-[50%]  bg-gradient-to-b from-d9 to-d7/50 blur-3xl" />
<div className="min-h-screen hero shadow-edge" style={{backgroundImage: "url(https://grell.s3.us-east-2.amazonaws.com/opt/helipad.avif)"}}>
  <div className="bg-opacity-60 hero-overlay"></div>


  <div className="px-6 m-auto xl:container md:px-12 xl:px-6">
    <h1 className="mb-4 text-4xl font-black leading-10 tracking-tight text-white pt-36 md:text-7xl lg:text-5xl">
      Your roof is our top priority.</h1>
    <h1 className="flex items-center mb-8 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl lg:text-5xl">
      We<span className="relative ml-3 h-[1em] w-full overflow-hidden">
        <span className="absolute w-full h-full leading-none -translate-y-full text-yw animate-slide">
          Build</span>
        <span className="absolute text-yw h-full w-full -translate-y-full animate-slide leading-none [animation-delay:1s]">
          Repair</span>
        <span className="absolute text-yw h-full w-full -translate-y-full animate-slide leading-none [animation-delay:2s]">
          Replace</span></span></h1>
    <p className="max-w-[36rem] pb-16 text-xl tracking-tight font-bold leading-relaxed text-left rounded-lg md:mb-24 md:text-xl xl:text-2xl text-white">We're a female-led business that's secured 12+ million ft<sup>2</sup> of commercial property, in 20+ states, since 1985.</p>

    <div className="grid grid-cols-2 gap-4 pb-12 max-w-screen-2xl md:place-items-center lg:gap-8 md:grid-cols-3">
      <Card
        title="Build" subtitle="We work with builders & contractors" to="/new-roof"
        Icon={SiEsbuild} />
      <Card
        title="Repair" subtitle="For leaks, cracks, emergency repairs & more" to="/repair"
        Icon={Ri24HoursLine} />
      <Card
        title="Replace" subtitle="We'll help you find the right solution" to="/replacement"
        Icon={TbReplaceFilled} />
    </div>
  </div>
</div>

<div data-aos="fade-up" data-aos-offset="50" data-aos-duration="5000" data-aos-distance="100px">
    <Hero />
  </div>
    <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="5000" data-aos-distance="100px">
    <Expertise />
  </div>
    <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="6000" data-aos-distance="100px">
    <Testis />
    <Clients />
  </div>



  <div id="contact" className="flex justify-center pt-8 pb-8 text-l1">
    <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="6000" data-aos-distance="100px">
      <Contact />
    </div>

</div></>);}

export default Home;

const Card = ({ to, title, subtitle, Icon }) => {
  return (
    
    <a className="w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-d7">
      <Link to={to}>
      <div className="absolute inset-0 bg-gradient-to-b from-red9 to-red7 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 transition-transform duration-300 -top-1 -right-1 text-7xl md:text-9xl text-d6 group-hover:stroke-[.25px] group-hover:stroke-black/20 group-hover:text-r group-hover:-translate-y-6 group-hover:rotate-12" />
      <h3 className="relative z-10 pt-2 text-lg font-black text-white duration-300 md:text-3xl">{title}</h3>
      <p className="relative z-10 pt-2 font-thin leading-tight tracking-tight duration-300 text-md md:text-lg text-l3 group-hover:text-white">{subtitle}</p></Link>
    </a>);};
