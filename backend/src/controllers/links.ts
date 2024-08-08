import { Request, Response } from "express";
import { nanoid } from "nanoid";
import db from "../db/database";
import { linkType } from "../types/LinkType";
import QRCode from "qrcode";

export const createLink = async (req: Request, res: Response) => {
    try {
        const { original_url } = req.body;

        const checkExist = await db("links").where({ original_url }).first();
        if (checkExist)
            return res.status(409).send({
                error: "URL already has been shortened!",
            });

        const shortUrl: string = nanoid(7);
        await db("links").insert({
            original_url: original_url,
            short_url: shortUrl,
        });

        res.status(200).send(shortUrl);
    } catch (error) {
        console.log("error: ", error);
        res.status(501).send(error);
    }
};

export const getLinks = async (req: Request, res: Response) => {
    try {
        const links: linkType[] = await db("links").select("*");
        res.status(200).send(links);
    } catch (error) {
        console.log("error: ", error);
        res.status(501).send(error);
    }
};

export const redirectLinks = async (req: Request, res: Response) => {
    try {
        const { shortUrl } = req.params;
        const { origin } = req.query;
        console.log("origin: ", origin);

        const link: linkType = await db("links")
            .where({ short_url: shortUrl })
            .first();

        if (link) {
            //increment the count based on the origin link or qr
            origin == "link"
                ? await db("links")
                      .where({ short_url: shortUrl })
                      .increment("link_click", 1)
                : await db("links")
                      .where({ short_url: shortUrl })
                      .increment("scan_count", 1);
            res.redirect(link.original_url);
        } else {
            res.status(404).send("Link Not Found!");
        }
    } catch (error) {
        console.log("error: ", error);
        res.status(501).send(error);
    }
};

export const QRGenerator = async (req: Request, res: Response) => {
    try {
        const { short_url } = req.body;
        const link = await db("links").where({ short_url: short_url }).first();
        if (!link)
            return res.status(404).send({
                message: "No links found!",
            });
        const qrCodeImage = await QRCode.toDataURL(
            `http://localhost:8080/api/${short_url}?origin=qr`
        );
        res.send(qrCodeImage);
    } catch (err) {
        console.error("Error generating QR code:", err);
        res.status(500).send("Internal Server Error");
    }
};
