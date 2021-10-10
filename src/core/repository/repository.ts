export interface IRepository<Model> {
    createAll?(model: Model): Promise<void>;
    findAll?(): Promise<Model[]>;
    deleteAll?(model: Model): Promise<Array<Model>>;
}