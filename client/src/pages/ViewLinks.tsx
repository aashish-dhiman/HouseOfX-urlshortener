/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchLinks, useGetQR } from "../hooks/links";
import { useState } from "react";

interface Props {}

const ViewLinks = (props: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const { data: links, isError, isLoading } = useFetchLinks();

    const { mutate, data, isSuccess, isPending } = useGetQR();

    const generateQR = (short_url: string) => {
        setDialogOpen(true);
        mutate(short_url);
    };

    const handleDownload = (url: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "qr-code.png";
        link.click();
    };

    if (isLoading)
        return (
            <div className="text-2xl mx-auto font-medium flex items-center justify-center">
                Loading Links!
            </div>
        );
    if (isError)
        return (
            <div className="text-2xl text-red-500 mx-auto font-medium flex items-center justify-center">
                Error iin fetching links!
            </div>
        );
    return (
        <div className="w-full space-y-10">
            <h2 className="text-4xl text-center font-medium mx-auto w-full">
                Your Sliced Links!
            </h2>
            <div className="flex items-start justify-evenly font-bold text-lg gap-2">
                <div className="flex-1">ID</div>
                <div className="flex-1">Short Link</div>
                <div className="flex-1">Original Link</div>
                <div className="flex-1">Link Clicks</div>
                <div className="flex-1">QR Scans</div>
                <div className="flex-1">QR</div>
            </div>
            {links?.map((link, i) => {
                return (
                    <div className="flex items-start justify-evenly font-bold text-lg gap-2">
                        <div className="flex-1">{link.id}</div>
                        <div className="flex-1">
                            <a
                                href={`http://localhost:8080/api/${link.short_url}?origin=link`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500"
                            >
                                {link.short_url}
                            </a>
                        </div>
                        <div className="flex-1">
                            <a
                                href={`${link.original_url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500"
                            >
                                {link.original_url.slice(0, 15) + ".."}
                            </a>
                        </div>
                        <div className="flex-1">{link.link_click}</div>
                        <div className="flex-1">{link.scan_count}</div>
                        <div className="flex-1">
                            <button
                                className="text-sm bg-slate-900 py-2 px-4 rounded-full text-white"
                                onClick={() => generateQR(link.short_url)}
                            >
                                Get QR
                            </button>
                        </div>
                    </div>
                );
            })}

            {/* //show QR */}
            {dialogOpen && data && isSuccess && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent backdrop-blur-xl rounded-lg p-10 flex items-center justify-center flex-col">
                    <span
                        className="text-sm cursor-pointer font-bold absolute top-2 right-2"
                        onClick={() => setDialogOpen(false)}
                    >
                        X
                    </span>
                    <img src={data} alt="QR" className="size-[200px]" />

                    <button
                        className="px-3 py-1 mt-5 bg-blue-600 text-white rounded-lg text-sm"
                        onClick={() => handleDownload(data)}
                    >
                        Download QR
                    </button>
                </div>
            )}
        </div>
    );
};

export default ViewLinks;
