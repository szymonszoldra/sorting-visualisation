import { createContext } from 'react';

import { Context } from '../types';

const AppContext = createContext<Context>({} as Context);

export default AppContext;
