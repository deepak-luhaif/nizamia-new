import BlogCard from '@/components/shared/BlogCard';
import Footer from '@/components/shared/Footer';
import { BLOGS } from './blog-data';
// import { BLOGS } from "@/models/blog";

export default async function Blogs() {
  return (
    <div className=" ">
      <div className="container lg:px-20 px-10 w-full ">
        <div>
          <h1 className="text-4xl text-center mt-5 text-purple-500">
            Our Latest Blogs
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {BLOGS &&
            BLOGS.map((blog) => {
              return (
                <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  content={blog.description}
                  link={blog.link}
                  date={blog.date}
                />
              );
            })}
        </div>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
