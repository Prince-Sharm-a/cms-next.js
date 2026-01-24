export default function dateFormat(date){
    if(date instanceof Date){
        return new Date(date).toLocaleDateString("en-IN",{day:"numeric", month:"short",year:"numeric"});
    } else if(typeof date === "string"){
        return new Date(date).toLocaleDateString("en-IN",{day:"numeric", month:"short",year:"numeric"});
    } else {
        return "Date Not Found"
    }
}