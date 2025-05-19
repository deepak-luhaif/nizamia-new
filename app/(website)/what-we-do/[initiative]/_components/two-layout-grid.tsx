import Image from "next/image";
import styles from "./TwoLayoutGrid.module.css"; // Create this CSS file

const TwoLayoutGrid = ({
  title,
  description,
  buttonText1,
  buttonText2,
  imageSrc,
  index = 0,
  bulletPoints,
}: any) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`flex flex-col md:flex-row gap-4  items-center justify-between  ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left Side: Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className={`relative w-full h-full ${styles["image-container"]}`}>
          <Image
            src={imageSrc}
            alt="Girls"
            objectFit="cover"
            className="rounded-lg shadow-md"
            height={500}
            width={500}
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className={`${styles.highlight} text-3xl  font-bold mb-4`}>
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        <ul className=" text-darkGray text-sm list-disc list-inside mb-4 text-left">
          {bulletPoints?.map((point, index) => (
            <li key={index} className="mb-2">
              <strong className="text-black font-semibold ">
                {point.text}
              </strong>
              : {point.description}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://rzp.io/rzp/MRrhoyaM">
            <button className="bg-greenColor hover:bg-[#5cbdb0] text-white font-bold py-2 px-4 rounded">
              {buttonText2}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwoLayoutGrid;

// import Image from "next/image";

// const TwoLayoutGrid = ({
//   index,
//   title,
//   description,
//   buttonText1,
//   buttonText2,
//   imageSrc,
// }: {
//   index: number;
//   title: string;
//   description: string;
//   buttonText1?: string;
//   buttonText2: string;
//   imageSrc: string;
// }) => {
//   // Reverse the order when the index is even
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       className={`flex flex-col md:flex-row gap-4 items-center justify-between ${
//         isEven ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       {/* Image Section */}
//       <div className="md:w-1/2">
//         <div className="relative w-full h-full">
//           <Image
//             src={imageSrc}
//             alt={title}
//             objectFit="cover"
//             className="rounded-lg shadow-md"
//             height={500}
//             width={500}
//           />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="md:w-1/2 text-center md:text-left">
//         <h2 className="text-3xl font-bold mb-4">{title}</h2>
//         <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//           {buttonText1 && (
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//               {buttonText1}
//             </button>
//           )}
//           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
//             {buttonText2}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoLayoutGrid;
