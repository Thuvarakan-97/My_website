// import { useRouter } from "next/router";
// import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
// export default function MyName(props: { finishedLoading: boolean }) {
//   const router = useRouter();
//   return (
//     <div
//       className="h-full flex flex-col justify-center
//       px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
//     >
//       <motion.span
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
//           y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
//         }}
//         className="text-AAsecondary font-mono"
//       >
//         Hi, My Name is
//       </motion.span>
//       <motion.h1
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
//           y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
//         }}
//         className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
//       >
//         Thuvarakan Ponraj.
//       </motion.h1>
//       <motion.h2
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
//           y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
//         }}
//         className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
//       >
//         A Passionate Full-Stack Developer
//       </motion.h2>

//       <motion.h3
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
//           y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
//         }}
//         className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
//       >
//         I&apos;m a <span className="text-AAsecondary">software engineer</span>, With a Capability of <span className="text-AAsecondary">Full Stack Developer</span> a coding virtuoso seamlessly dancing between front-end finesse and back-end wizardry. Armed with JavaScript, Python, and Java, crafting digital experiences that marry functionality with aesthetics. Lifelong learner, gaming enthusiast, and code poet, weaving narratives through the language of technology.
//         {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
//         front-end components to enable seamless user interactions. */}
//       </motion.h3>
//       <motion.div
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
//           y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
//         }}
//         className="mt-12"
//       >
//         <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
//           <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
//             Check out my resume!
//           </button>
//         </a>
//       </motion.div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52">
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, My Name is
      </motion.span>

      <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
      scale: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.5 },
    }}
    className="absolute right-0 top-6 mt-20 p-12"
  >
    <Image
      src="/img/portpoli.svg" // Path to your image inside the public directory
      alt="Portfolio"
      width={250} // Adjust the width as needed
      height={250} // Adjust the height as needed
    />
  </motion.div>



      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Thuvarakan Ponraj.
      </motion.h1>




<motion.h2
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
    y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
  }}
  className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4 relative"
>
  A Passionate Full-Stack Developer

</motion.h2>



      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider text-justify"
      >
        I'm a <span className="text-AAsecondary">software engineer</span>, With a Capability of{" "}
        <span className="text-AAsecondary">Full Stack Developer</span> a coding virtuoso seamlessly dancing between front-end
        finesse and back-end wizardry. Armed with JavaScript, Python, and Java, crafting digital experiences that marry
        functionality with aesthetics. Lifelong learner, gaming enthusiast, and code poet, weaving narratives through the
        language of technology.
      </motion.h3>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
