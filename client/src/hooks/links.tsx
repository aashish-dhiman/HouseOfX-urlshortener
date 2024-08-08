/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../providers/QueryClient";

interface linkType {
    id: string;
    original_url: string;
    short_url: string;
    link_click: number;
    scan_count: number;
    created_at: string;
}

export const useFetchLinks = () => {
    return useQuery({
        queryKey: ["links"],
        queryFn: async (): Promise<linkType[]> => {
            const { data } = await axios.get(
                "http://localhost:8080/api/get-links"
            );
            return data;
        },
    });
};
export const useCreateLink = () => {
    return useMutation({
        mutationFn: async (original_url: string) => {
            return axios.post(
                "http://localhost:8080/api/create-link",
                { original_url },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["links"] });
        },
        onError: () => {
            alert("URL already exist!");
        },
    });
};

export const useGetQR = () => {
    return useMutation({
        mutationFn: async (short_url: string) => {
            const { data } = await axios.post(
                `http://localhost:8080/api/generateQR`,
                { short_url },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["links"] });
        },
        onError: () => {
            alert("QR can't be generated!");
        },
    });
};
