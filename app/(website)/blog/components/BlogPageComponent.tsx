import BlogCard from '@/components/shared/BlogCard';
import { BlogCards } from '@/constants';
import React from 'react';

const BlogPageComponent = () => {
  return (
    <div className="container">
      <div className="blog flex items-center">
        <div className=" w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            {BlogCards &&
              BlogCards.map((item, index) => (
                <div key={index}>
                  <BlogCard
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    link={item.link}
                    description={item.description}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageComponent;
