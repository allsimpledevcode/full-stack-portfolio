import React from "react";

function SubTitle({ title = 'Welcome' }: { title: string }) {
    return (
        <h3 className="text-3xl text-slate-600 font-medium mb-2" data-aos="fade-up">{title}</h3>
    )
}

export default SubTitle;