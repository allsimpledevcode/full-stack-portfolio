'use client';

import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
import { useEffect, useReducer } from "react"

interface dataReducer {
    loading?: boolean,
    project?: string,
    blog?: string   
}

export default function AdminPage() {
    const [data, setData] = useReducer((prev: any, next: any) => {
        return  { ...prev, ...next }
    }, {
        loading: true,
        project: null,
        blog: null
    })

    const fetchDashboardDetails = async () => {
        const response = await fetch("/api/app").then(res => res.json());

        setData({
            loading: false,
            ...response
        })
    }

    useEffect(() => {
        fetchDashboardDetails()
    }, [])

    return (
        <div className="flex gap-5">
            <Card className="w-52 p-4">
                <CardTitle>
                    Total projects
                </CardTitle>
                <CardContent className="text-center mt-6">
                    {
                        data.loading ? (
                            <div className="animate-pulse">
                                <h2 className="h-2 bg-slate-200 rounded"></h2>
                            </div>
                        ): (
                            <h2 className="text-4xl font-semibold">{data?.project}</h2>
                        )
                    }
                </CardContent>
            </Card>
            <Card className="w-52 p-4">
                <CardTitle>
                    Total blogs
                </CardTitle>
                <CardContent className="text-center mt-6">
                    {
                        data.loading ? (
                            <div className="animate-pulse">
                                <h2 className="h-2 bg-slate-200 rounded"></h2>
                            </div>
                        ): (
                            <h2 className="text-4xl font-semibold">{data?.blog}</h2>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}