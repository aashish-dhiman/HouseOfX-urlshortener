/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { FormEvent, useState } from "react";
import { useCreateLink } from "../hooks/links";

interface Props {}

const CreateLink = (props: Props) => {
    const [url, setUrl] = useState("");
    const { mutate, data: shortUrl, isError, error } = useCreateLink();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate(url);
        setUrl("");
    };
    return (
        <div className="mx-auto w-full h-full flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="p-2 px-3 rounded-full bg-slate-200 w-[300px] shadow-lg">
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value);
                        }}
                        placeholder="https://houseofx.in/"
                        required
                        className="bg-slate-200 w-full border-none focus:border-none focus:outline-none"
                    />
                </div>
                <button className="bg-blue-600 text-white text-sm px-3 hover:scale-[0.98] transition-all duration-200 ease-in-out rounded-full shadow-lg">
                    Shorten URL
                </button>
            </form>
        </div>
    );
};

export default CreateLink;
