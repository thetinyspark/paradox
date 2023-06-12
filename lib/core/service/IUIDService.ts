export default interface IUIDService{
    reset();
    createUID(category:string,defaultUID:number):number;
    createUID(category:string):number;
    createUID():number;
}