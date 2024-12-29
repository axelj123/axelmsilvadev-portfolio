import ScrollReveal from "../common/ScrollReveal"

function Contact() {
  return (
    <ScrollReveal direction="bottom" duration={1000}>
    <section className="mt-40 p-4">
        <h1 className="text-6xl font-bold"> Keep In Touch.</h1>
        <div className="mt-5">
            <p className="text-gray-400 text-2xl "> Im currently specializing in<span className="text-green-500 font-bold"> Full-Stack Development.</span></p>
            <p className="text-gray-400 text-2xl "> You cant contact me <span>Front-end Development.</span></p>

        </div>
        <div className="flex space-x-2 mt-6 justify-center text-xs sm:text-xl md:text-1xl">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/+51910241651" // Número de WhatsApp o enlace directo
                className="bg-[#141414] rounded-lg p-2 flex items-center text-white hover:bg-[#303030] hover:text-green-400 transition-all duration-300"
            >
                <svg className="h-5 w-5 text-green-500 font-bold" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.004 2c-5.514 0-10 4.488-10 10.002a9.953 9.953 0 001.407 5.117l-1.484 5.418a.75.75 0 00.922.922l5.418-1.484A9.953 9.953 0 0012.004 22c5.514 0 10.002-4.486 10.002-10S17.518 2 12.004 2zm0 18.247a8.221 8.221 0 01-4.157-1.107.755.755 0 00-.546-.065l-3.239.887.887-3.239a.753.753 0 00-.066-.546 8.242 8.242 0 01-1.107-4.158c0-4.555 3.708-8.261 8.262-8.261 4.556 0 8.263 3.706 8.263 8.261 0 4.554-3.707 8.263-8.263 8.263zm3.372-6.82c-.435-.218-1.442-.71-1.666-.792-.224-.084-.387-.127-.55.127-.164.254-.63.792-.774.956-.144.165-.287.19-.523.071-1.435-.717-2.38-1.282-3.346-2.655-.253-.352.253-.328.725-1.093a.44.44 0 00-.021-.427c-.064-.126-.55-1.33-.755-1.818-.2-.481-.403-.416-.55-.424-.146-.009-.315-.011-.485-.011a.934.934 0 00-.68.31c-.234.255-.896.86-.896 2.095s.918 2.443 1.048 2.611c.13.166 1.81 2.76 4.39 3.87 1.558.672 2.173.722 2.947.615.474-.065 1.442-.587 1.644-1.157.202-.572.202-1.062.143-1.157-.058-.095-.2-.165-.435-.283z" />
                </svg>
                <span className="ml-2 font-medium">WhatsApp</span>
            </a>

            {/* LinkedIn Button */}
            <a
                href="https://www.linkedin.com/in/axeldevmspe/"
                className="bg-[#141414] rounded-lg p-2 flex items-center text-white hover:bg-[#303030] hover:text-green-400 transition-all duration-300"
            >
                <svg className="h-5 w-5 text-green-500 font-bold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="ml-2  font-medium">LinkedIn</span>
            </a>

            {/* CV Button */}
            <a
                href="https://docs.google.com/document/d/1asV65QEhtAww2o2hcJAVjr4jBMkUZUm1/edit?usp=sharing&ouid=115378357126748632400&rtpof=true&sd=true" // Reemplaza con el enlace de tu CV
                className="bg-[#141414] rounded-lg p-2 flex items-center text-white hover:bg-[#303030] hover:text-green-400 transition-all duration-300"
                target="_blank" // Abre el documento en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica para enlaces externos
            >
                <svg className="h-5 w-5 text-green-500 font-bold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8.41421C19 8.149 18.8946 7.89464 18.7071 7.70711L13.2929 2.29289C13.1054 2.10536 12.851 2 12.5858 2H6ZM7 4H12V8H16V20H7V4ZM14 4.41421L15.5858 6H14V4.41421ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12ZM9 15C9 14.4477 9.44772 14 10 14H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16H10C9.44772 16 9 15.5523 9 15Z" />
                </svg>
                <span className="ml-2 font-medium">Curriculum</span>
            </a>
        </div>

    </section>
</ScrollReveal>
  )
}

export default Contact