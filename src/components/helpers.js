import { backgroundGradients, patterns } from "./ThumbnailTool/constansts";

export const parseThumbnail = (rawString) => {

    if(typeof rawString !== 'string' || !rawString.includes(',')) return false;
    const values = rawString.split(',');

    let pattern = patterns[values[0]] || '';
    let background = backgroundGradients[values[1]] || '';

    const result = `${pattern && pattern}${(pattern && background) && ','}${background && background}`
    console.log(result);
    return result;

}
