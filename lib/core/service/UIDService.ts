export default class UIDService{

    private ids:Map<string,number[]> = new Map<string,number[]>();

    createUID(category:string="no_category",defaultUID:number=-1):number{
        if( !this.ids.has(category) ){
            this.ids.set(category, []);
        }

        const ids = this.ids.get(category);
        const maxID = Math.max(...ids,0);
        const id = defaultUID > maxID + 1 ? defaultUID : maxID + 1;
        ids.push(id);

        return id;
    }
}