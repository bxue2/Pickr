//Month Day, Year
export function convertToDate(unformat){
    let currDate = new Date(unformat);
    // console.log("unformat", unformat);
    console.log(currDate);
    let dateArr = currDate.toString().split(" ");
    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
}
