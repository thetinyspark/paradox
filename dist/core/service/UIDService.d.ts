import IUIDService from "./IUIDService";
export default class UIDService implements IUIDService {
    private ids;
    reset(): void;
    createUID(category?: string, defaultUID?: number): number;
}
