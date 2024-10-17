import { getAllTld } from "@onsol/tldparser";
import { Connection } from "@solana/web3.js";

const RPC_URL = process.env.RPC;

// initialize a Solana Connection
const connection = new Connection(RPC_URL!);

export const GET = async () => {
    const startTime = performance.now();

    // get all active AllDomains TLDs
    const allTlds = await getAllTld(connection);

    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    return Response.json({
        tlds: allTlds,
        timeTaken: timeTaken.toFixed(2) + " ms"
    });
}
