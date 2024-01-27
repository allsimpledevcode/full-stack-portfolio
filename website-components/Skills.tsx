'use client';

import React from "react";
import Title from "@/website-components/ui/Title";
import SubTitle from "@/website-components/ui/SubTitle";
import Paragraph from "@/website-components/ui/Paragraph";
import Button from "@/website-components/ui/Button";
import { RocketIcon } from "@radix-ui/react-icons";
import { config } from "@/constant";
import { useRouter } from "next/navigation";

function Skills() {
  const router = useRouter();
  return (
    <div className="flex flex-col sm:justify-center justify-center gap-11 py-12" id="skills" data-aos="fade-up">
      <div className="sm:w-1/2 sm:m-auto md:text-center">
        <Title title={config.mySkills.title} />
        <SubTitle title={config.mySkills.subTitle} />
        <Paragraph content={config.mySkills.content} />
        <div className="mt-2 sm:inline-block" data-aos="fade-up">
          <Button onClick={() => {
            router.push("/#contact")
          }}><RocketIcon/><span className="ml-1">{config.mySkills.actionButton.name}</span></Button>
        </div>
      </div>
      <div>
        <div className="flex gap-10 flex-col sm:flex-row sm:justify-evenly">
          {config.mySkills.skills.map((skill, index: number) => (
            <div className="w-48" key={index.toString()} data-aos="fade-up">
              <skill.icon width={36} height={36} className="text-slate-500"/>
              <h4 className="text-lg font-medium mt-4 mb-1">{skill.title}</h4>
              <p className="text-slate-400 font-light">{skill.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
