// import Image from 'next/image';
// import blogs from '@/constants/Blogs';
// import Link from 'next/link';

// const Articles = () => {
//   return (
//     <div
//       // data-direction="right"
//       // data-animated
//       className="scroller__inner gap-10 w-full  p-2 text-white"
//     >
//       {/* <div className=""> */}
//       <div className="flex  flex-col relative hover:italic">
//         <Image
//           src={`/article/article_${1}.jpeg`}
//           alt={blogs[0].title}
//           width={500}
//           height={500}
//           className="hover:rounded-xl "
//         />
//         <div className="absolute">
//           <Link href={blogs[0].url}>
//             <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
//               {blogs[0].title}
//             </div>
//             <div className="px-2 pb-2 italic font-normal">
//               {blogs[0].author}
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="flex  flex-col relative hover:italic">
//         <Image
//           src={`/article/article_${2}.jpeg`}
//           alt={blogs[1].title}
//           width={500}
//           height={500}
//           className="hover:rounded-xl "
//         />
//         <div className="absolute">
//           <Link href={blogs[1].url}>
//             <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
//               {blogs[1].title}
//             </div>
//             <div className="px-2 pb-2 italic font-normal">
//               {blogs[1].author}
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="flex  flex-col relative hover:italic">
//         <Image
//           src={`/article/article_${3}.jpeg`}
//           alt={blogs[2].title}
//           width={500}
//           height={500}
//           className="hover:rounded-xl "
//         />
//         <div className="absolute">
//           <Link href={blogs[2].url}>
//             <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
//               {blogs[2].title}
//             </div>
//             <div className="px-2 pb-2 italic font-normal">
//               {blogs[2].author}
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="flex flex-col relative hover:italic">
//         <Image
//           src={`/article/article_${4}.jpeg`}
//           alt={blogs[3].title}
//           width={500}
//           height={500}
//           className="hover:rounded-xl "
//         />
//         <div className="absolute">
//           <Link href={blogs[3].url}>
//             <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
//               {blogs[3].title}
//             </div>
//             <div className="px-2 pb-2 italic font-normal">
//               {blogs[3].author}
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col relative hover:italic">
//         <Image
//           src={`/article/article_${5}.jpeg`}
//           alt={blogs[4].title}
//           width={500}
//           height={500}
//           className="hover:rounded-xl "
//         />
//         <div className="absolute">
//           <Link href={blogs[4].url}>
//             <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
//               {blogs[4].title}
//             </div>
//             <div className="px-2 pb-2 italic font-normal">
//               {blogs[4].author}
//             </div>
//           </Link>
//         </div>
//       </div>
//       {/* </div> */}

//       {/* {blogs.map((blog, index) => {
//         return (
//           <div className="flex flex-col relative hover:italic" key={index}>
//             <Image
//               src={`/article/article_${index + 1}.jpeg`}
//               alt={blog.title}
//               width={350}
//               height={350}
//               layout="responsive"
//               className="hover:rounded-xl "
//             />
//             <div className="absolute">
//               <Link href={blog.url}>
//                 <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
//                   {blog.title}
//                 </div>
//                 <div className="px-2 pb-2 italic font-normal">
//                   {blog.author}
//                 </div>
//               </Link>
//             </div>
//           </div>
//         );
//       })} */}
//     </div>
//   );
// };

// export default Articles;

import Image from 'next/image';
import blogs from '@/constants/Blogs';
import Link from 'next/link';

const Articles = () => {
  return (
    <div className="scroller__inner flex p-2 items-center justify-center  text-white">
      {blogs.map((blog, index) => {
        return (
          <div
            className="flex flex-col items-start p-5 justify-between relative hover:italic"
            key={index}
          >
            <Image
              src={`/article/article_${blog.index}.jpeg`}
              alt={blog.title}
              width={450}
              height={450}
              className="hover:rounded-xl "
            />
            <div className="">
              <Link href={blog.url}>
                <div className="md:text-lg text-sm font-extrabold  px-2 pt-2">
                  {blog.title}
                </div>
                <div className="px-2 pb-2 italic font-normal">
                  {blog.author}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
