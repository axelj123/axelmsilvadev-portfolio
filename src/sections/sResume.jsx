import ScrollReveal from "../common/ScrollReveal"

function Resumen() {
    return (
        <ScrollReveal  >
            <section className="mt-24" >
                <div className=" mx-auto items-start p-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4x2 text-green-500  font-mono">Hey there!, Im-</h1>


                        <h1 className=" text-6xl sm:text-6xl md:text-9xl lg:text-10xl xl:text-10xl font-extrabold my-4 text-start">
                            Axel J. Muñoz
                        </h1>

                        <p className="dark:text-[#8F9094]  text-gray-800 text-xl sm:text-4xl md:text-4xl lg:text-8x1 xl:text-8x1 font-semibold text-start mt-8">
                            <span className="text-green-500  font-extrabold">Full Stack Developer.</span> A self-taught developer passionate about Computer Science and continuous learning!
                        </p>

                        <div className="dark:text-[#8F9094]  text-gray-800 text-sm sm:text-4xl md:text-2xl lg:text-2x1 xl:text-4x1 font-sans text-start mt-8">
                            <p>🚀Currently specializing in Frontend (React) and Backend (Spring boot)</p>
                            <p>⚡Future Systems Engineer at UCV</p>

                        </div>

                        <div className="flex space-x-4 mt-12  text-[12px] sm:text-xl md:text-xl">
                            {/* GitHub Button */}
                            <a
                                href="https://github.com/axelj123"
                                className="bg-[#141414] rounded-lg p-2 flex items-center text-white hover:bg-[#303030] hover:text-green-400 transition-all duration-300"
                            >
                                <svg className="h-5 w-5 text-green-500 " fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.688-.103-.252-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.378.203 2.398.1 2.65.64.704 1.028 1.597 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.307.678.917.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 11.971C22 6.463 17.522 2 12 2" clipRule="evenodd" />
                                </svg>
                                <span className="ml-2  font-medium">GitHub</span>
                            </a>

                            {/* LinkedIn Button */}
                            <a
                                href="https://www.linkedin.com/in/axeldevmspe/"
                                className="bg-[#141414] rounded-lg p-2 flex items-center text-white hover:bg-[#303030] hover:text-green-400 transition-all duration-300"
                            >
                                <svg className="h-5 w-5 text-green-500 " fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span className="ml-2  font-medium">LinkedIn</span>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/+51910241651" // Replace with your WhatsApp number
                                className="bg-[#141414] rounded-lg p-2 flex items-center text-white hover:bg-[#303030] hover:text-green-400 transition-all duration-300"
                            >
                                <svg className="h-5 w-5 text-green-500 " fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 5.091-18.779-.036 5.513-5.05zm9.208-1.514l-5.811-5.276 5.811-4.726v10.002z" />
                                </svg>
                                <span className="ml-2  font-medium">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </ScrollReveal>

    )
}

export default Resumen