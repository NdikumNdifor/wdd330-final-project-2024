function convertToJson(res){
    if(!res.ok){
        throw new Error("Bad response") 
    }else {
        return res.json();
    } 
}

export class LocalJsonData{
    constructor(category){
        this.category = category;
        this.path = `/json/${this.category}.json`;
    }

    async getData() {
        console.log(this.path)
        return fetch(this.path)
            .then(convertToJson)
            .then((data) => data);
    }
}