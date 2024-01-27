"use client";

import React, { useEffect, useReducer } from "react";
import Title from "@/website-components/ui/Title";
import SubTitle from "@/website-components/ui/SubTitle";
import Paragraph from "@/website-components/ui/Paragraph";
import Button from "@/website-components/ui/Button";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { config } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BlogProps {
  title: string;
  cover_url: string;
  description: string;
  id: string;
}

function Blogs() {
  const router =  useRouter();
  const [response, setResponse] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    {
      data: [],
      loading: true,
      searchTerm: "",
      page: 0,
    }
  );

  const fetchBlogs = async () => {
    setResponse({ loading: true });
    const res = await fetch(`/api/blogs?limit=6`, {
      method: "GET",
    });
    const response = await res.json();

    setResponse({
      data: response.data,
      loading: false,
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="py-12 relative z-10" id="blogs">
      <div className="flex flex-col justify-center lg:items-center gap-4">
        <div className="lg:text-center">
          <Title title={config.blogs.title} />
          <SubTitle title={config.blogs.subTitle} />
          <Paragraph content={config.blogs.content} />
        </div>
        <div>
          <div className="flex gap-10 flex-col md:flex-row">
            {response.loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-28 w-full bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {response.data.map((blog: BlogProps, index: number) => (
                  <div className="w-full" key={index.toString()} data-aos="fade-up">
                    <Image src={blog.cover_url} alt="Project" width={`300`} height={300}/>
                    <Link href={`/blogs/${blog.id}`} className="text-lg text-green-600 font-medium mt-4 block">
                      {blog.title}
                    </Link>
                    <p className="text-slate-400 font-light">
                      {blog.description}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 lg:flex lg:justify-center m-auto">
        <Button onClick={() => {
          router.push("/blogs");
        }}>
          <EyeOpenIcon /> {config.blogs.actionButton}
        </Button>
      </div>
    </div>
  );
}

export default Blogs;
