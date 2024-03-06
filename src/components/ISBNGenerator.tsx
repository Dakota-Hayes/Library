export function ISBNGenerator(){
    const isbn = Math.floor(Math.random() * 9999);
    return String(isbn);
}