export default interface IUIDService {
    reset(): any;
    createUID(category: string, defaultUID: number): number;
    createUID(category: string): number;
    createUID(): number;
}
