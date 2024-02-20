import Image from 'next/image';
import blogs from '@/constants/Blogs';
import Link from 'next/link';

const Articles = () => {
  return (
    <div className="scroller__inner flex p-2 flex-col md:flex-row items-center  text-white">
      {blogs.map((blog, index) => {
        return (
          <div className="flex flex-col relative hover:italic" key={index}>
            <Image
              src={`/article/article_${index + 1}.jpeg`}
              alt={blog.title}
              width={350}
              height={350}
              layout="responsive"
              className="hover:rounded-xl "
            />
            <div className="absolute">
              <Link href={blog.url}>
                <div className="md:text-lg text-sm font-extrabold px-2 pt-2">
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
