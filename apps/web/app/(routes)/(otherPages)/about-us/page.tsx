// import { metadata } from "@/layout";
import { Metadata } from "next";
// import { htmlContent } from "./htmlContent";

export const metadata: Metadata = {
    title: "Stop Rebuilding React Components from Scratch - Meet UI Brix, Your Open Source UI Library",
    description: "Stop Rebuilding React Components from Scratch - Meet UIBrix, Your Open Source UI Library"
}

function AboutPage(){
    return(
        <div className="pagrewrapper">
            <h1>What is UI Brix?</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        </div>
    )
}

export default AboutPage;