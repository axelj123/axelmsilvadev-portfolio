import Image from "next/image"
import ScrollReveal from "../common/ScrollReveal"

function AboutMe() {
  return (

    <ScrollReveal className="mt-12 sm:mt-24 lg:mt-28">
   
        <div className="flex flex-col lg:flex-row justify-between p-4 text-white items-center">
            <div className="w-full lg:w-1/2 p-4 text-start">
                <h2 className="text-3xl font-bold text-black dark:text-white">About me</h2>
                <p className="text-sm md:text-base text-black dark:text-[#8c8c8c] mt-4">
                    I am Axel Muñoz, passionate about technology since my father brought a computer home.
                </p>
                <p className="text-sm md:text-base text-black dark:text-[#8c8c8c]  mt-4">
                    I am currently studying at César Vallejo University and, self-taught, I have specialized in  <span className=" text-green-500 font-extrabold">full stack development</span> with React and Spring Boot. I also have experience in mobile development with React Native, Flutter and Electron for desktop. I love learning, programming and creating technological solutions to real problems.

                </p>
                <p className="text-sm md:text-base text-black dark:text-[#8c8c8c]  mt-4">In my free time, I enjoy playing video games and always looking for new ways to improve my skills.</p>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex justify-center items-center mt-4 lg:mt-0">
                <Image
                    src="/assets/foto.jpeg"
                    alt="foto"
                    width={500}  // Especifica el tamaño de la imagen para optimización
                    height={300} // Especifica el tamaño de la imagen para optimización
                    quality={75} // Ajusta la calidad de la imagen, valor entre 1 y 100
                    priority  
                    className="w-6/12 rounded-full h-auto shadow-lg"
                />
            </div>
        </div>
</ScrollReveal>
  )
}

export default AboutMe