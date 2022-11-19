import { createContext, FC, ReactNode, useReducer } from "react";

const initialState = {
  msg: "",
  type: "",
};

// Reducer mb separate File!
const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "RESET_ALERT":
      return initialState;
    default:
      return state;
  }
};
// Reducer mb separate File!

interface IAlert {
  msg: string;
  type: string;
}

type AlertContextType = ReturnType<typeof AlertManager>;

const initialContext = {
  ...initialState,
  setAlert: () => false,
};
const AlertContext = createContext<AlertContextType>(initialContext);

interface IAlertManagerResult {
  msg: string;
  type: string;
  setAlert: (alert: IAlert) => void;
}

const AlertManager = (): IAlertManagerResult => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (alert: IAlert) => {
    dispatch({
      type: "SET_ALERT",
      payload: alert,
    });

    setTimeout(() => dispatch({ type: "RESET_ALERT" }), 3000);
  };

  return { ...state, setAlert };
};

export const AlertProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <AlertContext.Provider value={AlertManager()}>{children}</AlertContext.Provider>
);

export default AlertContext;
