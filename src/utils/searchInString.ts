export const searchInString = (str: string, search: string []) => {
    let isFound: boolean = false;

    for (let i = 0; i < search.length; i++) {
        if (str.toLowerCase().search(search[i]) !== -1) {
            isFound = true;
            break;
        }
    }

    return isFound;
}