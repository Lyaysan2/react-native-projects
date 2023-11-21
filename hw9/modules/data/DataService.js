import DataRepository from "./DataRepository";
import DataModel from "./DataModel";
import LocalRepository from "../../localStorage/LocalRepository";

export default class DataService {
    dataRepository;
    localRepository;
    isLoading = false;

    constructor() {
        this.dataRepository = new DataRepository();
        this.localRepository = new LocalRepository('Data');
    }

    setData = async () => {
        this.setIsLoading(true);
        const dataApi = await this.dataRepository.getDataFromApi();
        const dataModel = dataApi.data.map(item =>
            new DataModel(item.id, item.title)
        );
        this.setIsLoading(false);
        return this.localRepository.setItems(dataModel);
    };

    getData = async () => {
        this.setIsLoading(true);
        const data = this.localRepository.getItems();
        this.setIsLoading(false);
    };

    removeAllData = () => {
        return this.localRepository.removeAllItems();
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}