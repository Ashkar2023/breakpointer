export const parseUnit = (obj: Record<string, string>) => {
    let parsedObj: Record<string, number> = {};

    for (let key in obj) {
        parsedObj[key] = parseInt(obj[key]);
    }

    return parsedObj
}

// WRITE Tests