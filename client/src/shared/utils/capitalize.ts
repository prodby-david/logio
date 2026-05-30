export function capitalize(word: string){
    return  word.toLowerCase()
    .split(/\s+/)
    .map(word => word.charAt(0)
    .toUpperCase() + word.slice(1))
    .join(" ");
}