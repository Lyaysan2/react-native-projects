import {storesContext} from '../stores/RootStore';
import React from 'react';

export const useRootStore = () => React.useContext(storesContext);
