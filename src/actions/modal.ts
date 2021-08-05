type Dispatcher = (_: any) => {};

export enum Type {
  ShowModal = "ShowModal",
  ClearModal = "ClearModal",
}

export const showModal = (
  dispatch: Dispatcher,
  title: string,
  prompt: string,
  callback: () => void,
  callbackNo: () => void,
  yes?: string,
  no?: string,
  justYes?: boolean
) => {
  dispatch({
    type: Type.ShowModal,
    title,
    prompt,
    callback,
    callbackNo,
    yes,
    no,
    justYes,
  });
};

export const clearModal = (dispatch: Dispatcher) => {
  dispatch({ type: Type.ClearModal });
};
