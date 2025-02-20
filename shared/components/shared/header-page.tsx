'use client'

import React, { useCallback } from "react";
import { Header } from "./header";
// import { NextPage } from "next";
// import { Breadcrumb } from "../ui/breadcrumb";
// import Breadcrumbs from "./breadсrumbs";
// import { useRouter } from "next/router";

type BreadcrumbData = {
    // data returned by server
    text: string;
    url: string;
};
// data for this page that we're expecting from backend
type Props = {
    breadcrumbs: BreadcrumbData[];
    namePage: string;
    className?: string;
};

export const HeaderPage: React.FC = () => {
    // const breadCrumbsData: CrumbItem[] = props.breadcrumbs.map((c) => {
    //     return {
    //         label: c.text,
    //         path: c.url,
    //     };
    // });
    // const getDefaultTextGenerator = useCallback((subpath: string) => {
    //     return {
    //         post: "Posts",
    //         settings: "User Settings",
    //     }[subpath];
    // }, []);

    // const getTextGenerator = useCallback((param: string, query: Object) => {
    //     return {
    //         post_id: async () => await fetch(`/posts/${query.post_id}/`).title,
    //     }[param];
    // }, []);

    // const router = useRouter();
    // const { slug } = router.query;

    return (
        <main className="main-block">
            <Header />
            {/* <Breadcrumbs slug={slug} /> */}
        </main>
    );
};
