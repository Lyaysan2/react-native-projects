import DataRepository from "./DataRepository";
import DataModel from "./DataModel";
import LocalRepository from "../../localStorage/LocalRepository";

export default class DataService {
    dataRepository;
    localRepository;

    constructor() {
        this.dataRepository = new DataRepository();
        this.localRepository = new LocalRepository('Data');
    }

    setData = async () => {
        const dataApi = await this.dataRepository.getDataFromApi();
        const dataModel = dataApi.data.slice(0, 15).map(item =>
            new DataModel(item.id, item.title)
        );
        return this.localRepository.setItems(dataModel);
    };

    getData = async () => {
        return this.localRepository.getItems();
    };

    removeAllData = () => {
        return this.localRepository.removeAllItems();
    }
}