import { TIMEOUT_SEC } from './config';


const timeout = second => {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error(
            `Request took too long! Timeout after ${second} second.`
        )), second * 1000);
    });
}

const getJSON = async url => {
    try {
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

        const data = await res.json();

        if (!res.ok) throw new Error(
            `${data.message} (${res.status})`
        );

        return data
    } catch (err) {
        throw err;
    }
}

export { getJSON };