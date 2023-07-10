import { redirect } from "react-router-dom";

export const requireAuth = async (request) => {
    const isLoggedIn = localStorage.getItem("id") ?? false;
    if (!isLoggedIn) {
        const url = new URL(request.url);
        const {pathname} = url;
        const searchParmas = new URLSearchParams(url.searchParams)
        searchParmas.append("message", "You must login First")
        searchParmas.append("redirectTo", pathname)
        console.log("searchparams", searchParmas.toString())
        throw redirect(`/login?${searchParmas.toString()}`);
    }
    return null;
}