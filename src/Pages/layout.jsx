function PageWrapper({ children }) {
return (
<><div className='space-y-16'>{children}</div></>);}

function HeroLayout(bgImage, titleHead, title, para) {
return (
    <section 
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative pt-32 bg-center bg-no-repeat bg-cover shadow-edge">
    <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/90 sm:to-black/25 sm:bg-gradient-to-r"></div>
    <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:pt-64 sm:px-8 lg:flex h-content">
        <div className="max-w-2xl text-center sm:text-left">
            <div className="text-base font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl">{titleHead}</div>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl">{title}</h1>
            <p className="max-w-xl mt-4 text-white sm:text-xl/relaxed">{para}</p>
        </div>
    </div>
</section>);}

function SectionOneLayout(head, title, para) {
return (
<><section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
    <div className="max-w-5xl px-8 mx-auto">
        <header className="text-center">
            <div className="text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl">{head}</div>
            <h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">{title}</h2>
        </header>
        <p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">{para}</p>
    </div>
</section>
</>);}

function BulletsLayout(para, bullets, para2) {
    return (
<><section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
    <div className="max-w-5xl px-8 mx-auto">
        <p className="pb-2 text-base font-bold leading-relaxed text-left text-white md:text-lg lg:text-xl">{para}</p>
            <div className="flex flex-wrap">{bullets}</div>
        <p className="pt-8 text-base leading-relaxed text-left text-l1 md:text-lg lg:text-xl">{para2}</p>
    </div>
</section>
</>);}

function SectionTwoLayout(head, title, para, para2, bullets, para3, para4, buttonText, to) {
return (
<><section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
    <div className="max-w-5xl px-8 mx-auto">
        <header className="text-center">
            <div className="text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl">{head}</div>
            <h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">{title}</h2>
        </header>
            <p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">{para}</p>
            <p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">{para2}</p>
        <div className="flex flex-wrap pt-4 pb-8">{bullets}</div>
            <p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">{para3}</p>
            <p className="mb-2 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">{para4}</p>
        <Link to={to} smooth={true} duration={500}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.225, ease: "easeIn" }} className="px-4 py-2 text-base font-black leading-relaxed text-center uppercase rounded-lg cursor-pointer xl:mt-6 md:text-lg lg:text-xl text-l1 shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-1 focus:ring-rd2 active:bg-rl">{buttonText}
            </motion.button>
        </Link>
    </div>
</section>
</>); }

function EmergencyLayout() {
return ( 
<><section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
    <div className="max-w-5xl px-8 mx-auto">
        <header className="text-center">
            <div className="text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl">
                24/7 Emergency Flat Roof Repair Services</div>
            <h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">
                Emergency Repairs</h2></header>
            <p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
                At Grell, we always strive to serve our customers as quickly and efficiently as possible. We understand, though, that some issues can not wait even a day. That is why we offer a 24/7 emergency flat roof repair services for situations that are serious safety hazards. If you need immediate assistance, call today. </p>
        <section className="flex flex-col">
            <span className="grid grid-cols-2 gap-8 place-items-center">
                <Tooltip className="p-2 md:text-white" placement="bottom" content="Call (800)-208-9693"
                animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 },}}>
                    <a href="tel:+18002089693" className={` relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-rA px-4 py-2 font-semibold text-r transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}>
                    <FiPhone className="mr-2 text-xl lg:text-2xl" />
                    <span className="text-xl lg:text-2xl">Call Now</span>
                    </a>
                </Tooltip>
                <Tooltip className="p-2 text-l3" placement="bottom" content="Text (515) 227-6367"
                animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 },}}>
                    <a href="sms:+15152276367" className={` relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-rA px-4 py-2 font-semibold text-r transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}>
                    <FiMessageCircle className="mr-2 text-xl lg:text-2xl" />
                    <span className="text-xl lg:text-2xl">Text Instead</span>
                    </a>
                </Tooltip>
            </span>
        </section>
    </div>
</section></>);}

function FAQLayout(faqTabName) {
return (
<>
    <section className="relative max-w-3xl px-8 py-16 mx-auto sm:px-16 lg:items-center lg:justify-around lg:pt-24">
        <h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">FAQ</h2>
        <FAQTab tabName={faqTabName} />
    </section>
</>);}

export { PageWrapper, HeroLayout, SectionOneLayout, BulletsLayout, SectionTwoLayout, EmergencyLayout, FAQLayout };