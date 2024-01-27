"use client";

import React, { useEffect, useReducer } from "react";
import WebsiteMainLayout from "@/website-components/layout/WebsiteMainLayout";
import SubTitle from "@/website-components/ui/SubTitle";
import Paragraph from "@/website-components/ui/Paragraph";
import Image from "next/image";
import { Editor } from "novel";

interface ProjectProps {
  params: {
    slug: string;
  };
}

function Project({ params }: ProjectProps) {
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

  const fetchProjects = async () => {
    setResponse({ loading: true });
    const res = await fetch(`/api/projects?id=${params.slug}`, {
      method: "GET",
    });
    const response = await res.json();

    setResponse({
      data: response.data,
      loading: false,
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <WebsiteMainLayout>
      <section className="pt-4 pb-10 relative z-10">
        {response.loading ? (
          <div className="animate-pulse flex space-x-4 mt-12">
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
            <ul className="flex mb-2 gap-3">
              {response.data.tags.map((tag: string, index: number) => (
                <li
                  className="text-xs text-slate-400 border border-slate-400 px-2 py-1 rounded "
                  key={index.toString()}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <SubTitle title={response.data.title} />
            <Paragraph content={response.data.description} />
            <div>
              <Image
                src={response.data.cover_url}
                width={500}
                height={500}
                className="w-full"
                alt={response.data.title}
              />
              <Editor
                editorProps={{
                  editable: () => {
                    return false
                  }
                }}
                onDebouncedUpdate={() => {}}
                defaultValue={response.data.content}
                className="mt-2 border-none p-0 m-0"
                disableLocalStorage
              />
            </div>
          </>
        )}
      </section>
    </WebsiteMainLayout>
  );
}

export default Project;
