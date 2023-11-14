import DataRepository from "./DataRepository";
import DataModel from "./DataModel";

export default class DataService {
    dataRepository;

    constructor() {
        this.dataRepository = new DataRepository();
    }

    getData = async () => {
        const res = await this.dataRepository.getData();

        return res.data.slice(0, 15).map(item =>
            new DataModel(item.id, item.title)
        );
    };
}