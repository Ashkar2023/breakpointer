export const parseUnit = (obj: Record<string, string | number>) => {
    let parsedObj: Record<string, number> = {};

    for (let key in obj) {
        switch (typeof obj[key]) {
            case "number":
                parsedObj[key] = obj[key];
                break;
            case "string":
                parsedObj[key] = parseInt(obj[key]);
                break;
        }
    }

    return parsedObj
}

// TODO - test cases