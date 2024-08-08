import React from "react";
import CreateLink from "../components/CreateLink";
import ViewLinks from "./ViewLinks";

interface Props {}

const Home = (props: Props) => {
    return (
        <div className="px-6 py-20 mx-auto w-full space-y-14">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-2xl sm:text-5xl font-bold text-blue-600">
                    Make Your Links Shooooort!
                </h1>
                <p className="text-lg font-medium mt-5">
                    Use our URL shortener tool and get your URL sliced in
                    seconds!
                </p>
            </div>

            <CreateLink />

            <ViewLinks />
        </div>
    );
};

export default Home;
