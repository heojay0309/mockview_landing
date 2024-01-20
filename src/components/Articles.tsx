import Image from 'next/image';
import blogs from '@/constants/Blogs';
import Link from 'next/link';

const Articles = () => {
  return (
    <div className="w-full flex flex-wrap px-12 items-center justify-between text-white">
      {blogs.map((blog, index) => {
        if (index === 0) {
          return (
            <div
              className="w-full flex flex-col relative h-full m-3 hover:italic border-y-4 border-black py-4"
              key={index}
            >
              <Image
                src={`/article/article_${index + 1}.jpeg`}
                alt={blog.title}
                width={2250}
                height={1390}
                layout="responsive"
                className="hover:rounded-xl"
              />
              <div className="absolute bottom-10">
                <Link href={blog.url}>
                  <div className="text-[36px] font-extrabold px-6 pt-2 max-w-lg">
                    {blog.title}
                  </div>
                  <div className="px-6 pb-2 italic font-normal">
                    {blog.author}
                  </div>
                </Link>
              </div>
            </div>
          );
        }
        return (
          <div
            className="w-full sm:w-[47%] flex flex-col relative hover:italic h-full gap-3 m-3"
            key={index}
          >
            <Image
              src={`/article/article_${index + 1}.jpeg`}
              alt={blog.title}
              width={2250}
              height={1390}
              layout="responsive"
              className="hover:rounded-xl"
            />
            <div className="absolute">
              <Link href={blog.url}>
                <div className="text-lg font-extrabold px-2 pt-2">
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
      {/* <div className="w-1/2">
        <Image
          src={
            'https://miro.medium.com/v2/resize:fit:1200/format:webp/1*3tmpf3SvEzW4JV-1Lp70bg.jpeg'
          }
          alt={'image'}
          width={2250}
          height={1390}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={'/bgtest.png'}
          alt={'image'}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={'/bgtest.png'}
          alt={'image'}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={'/bgtest.png'}
          alt={'image'}
          width={500}
          height={500}
          layout="responsive"
        />
      </div> */}
    </div>
  );
};

export default Articles;
