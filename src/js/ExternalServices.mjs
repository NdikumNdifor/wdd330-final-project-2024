
// Convert server response to json and
// throw an error if there is a problem with the response
async function convertToJson(res) {
    const responseJSON = await fetch(path).json();
    if(res.ok) {
        return responseJSON
    }else{
        throw{name: "errorServices", mesage:responseJSON}
    } 
}