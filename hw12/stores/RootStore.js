import React from 'react';
import {LangStore} from '../modules/lang/LangStore';

class RootStore {
  langStore;

  constructor() {
    this.langStore = new LangStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
