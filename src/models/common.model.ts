export interface ITasks {
    id: string,
    text: string,
    day: string,
    remainder: true | false
}
export const getDate = ():string=>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

     return (mm + '/' + dd + '/' + yyyy);
}

export interface IProduct {
    id: string,
    name: string,
    description: string,
    price: number,
    date: string
}