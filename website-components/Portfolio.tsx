"use client";

import React, { useEffect, useReducer, useState } from "react";
import Title from "./ui/Title";
import { config } from "@/constant";
import SubTitle from "./ui/SubTitle";
import Paragraph from "./ui/Paragraph";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Button from "./ui/Button";
import { ArrowTopRightIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface ProjectProps {
  title: string;
  cover_url: string;
  description: string;
  id: string;
}

function Projects() {
  const router = useRouter();

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
    const res = await fetch(`/api/projects?limit=6`, {
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
    <div className="py-12 flex flex-col lg:items-center" id="portfolio">
      <div className="lg:text-center">
        <Title title={config.portfolio.title} />
        <SubTitle title={config.portfolio.subTitle} />
        <Paragraph content={config.portfolio.content} />
        <div className="inline-block" data-aos="fade-up">
          <Button
            onClick={() => {
              router.push("/projects");
            }}
          >
            <span className="mr-1">
              <EyeOpenIcon />
            </span>{" "}
            View all Projects
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <Carousel
          opts={{
            align: "start",
          }}
          data-aos="fade-in"
          className="w-full max-w-sm md:max-w-5xl m-auto"
        >
          <CarouselContent>
            {response.loading ? (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="p-4">
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-28 w-full bg-slate-200 rounded"></div>
                        <div className="space-y-3">
                          <div className="h-2 bg-slate-200 rounded"></div>
                          <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ) : (
              <>
                {response?.data?.map((project: ProjectProps, index: number) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                    data-aos="fade-up"
                  >
                    <div className="p-1">
                      <Card className="p-4">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex aspect-square items-center justify-center mt-4">
                          <Image
                            width={`300`}
                            height={300}
                            src={project.cover_url}
                            alt="Project"
                          />
                        </CardContent>
                        <CardFooter className="flex gap-4">
                          <Button
                            onClick={() => {
                              router.push(`/projects/${project.id}`);
                            }}
                          >
                            <EyeOpenIcon /> Details
                          </Button>
                          <Button variant="plain">
                            Source code <ArrowTopRightIcon />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
