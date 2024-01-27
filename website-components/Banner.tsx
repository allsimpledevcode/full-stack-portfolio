'use client';

import React from "react";
import { config } from "@/constant";
import Image from "next/image";
import Profile from "@/public/images/profile.png";
import Title from "@/website-components/ui/Title";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

function Banner() {
    const router = useRouter();

    return (
        <div className="flex relative z-10 flex-col md:flex-row-reverse md:items-center md:justify-between gap-10 pt-6 pb-12" id="home">
            <div>
                <Image src={Profile} alt="Profile" className="max-w-sm w-80 m-auto" data-aos="fade-up"/> 
            </div>
            <div className="max-w-lg">
                <Title title={config.banner.title}/>
                <h3 className="text-5xl text-slate-600 font-bold mb-2" data-aos="fade-up">I have <span className="text-green-500">Creative Design</span> Experience</h3>
                <Paragraph content={config.banner.subTitle}/>
                <div className="mt-10 flex gap-6 items-center" data-aos="fade-up">
                    <Button onClick={() => {
                        router.push("/#contact")
                    }}>Contact Me</Button>
                    <Button variant="plain" onClick={() => {
                        router.push("/projects")
                    }}>View Portfolio <ArrowTopRightIcon/></Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;