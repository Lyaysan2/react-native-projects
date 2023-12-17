import {makeAutoObservable} from 'mobx';
import LangService from './LangService';
import {LangType} from './LangType';

export class LangStore {
  lang = null;

  isLoading = false;

  langService;

  constructor() {
    makeAutoObservable(this);
    this.langService = new LangService();
  }

  getLang = async () => {
    this.setIsLoading(true);

    this.langService
      .getLang()
      .then(result => {
        this.setLang(result);
        this.changeLang(result);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  changeLang = async () => {
    this.setIsLoading(true);
    let lang = LangType.RU === this.lang ? LangType.EN : LangType.RU;
    this.langService
      .changeLang(lang)
      .then(() => this.setLang(lang))
      .finally(() => {
        this.setIsLoading(false);
      });
  };
  setLang = value => {
    this.lang = value;
  };

  setIsLoading = value => {
    this.isLoading = value;
  };
}
