import * as Actions from "@actions/modal";

export default (_, action) => {
  switch (action.type) {
    case Actions.Type.ShowModal:
      const { title, prompt, callback, callbackNo, yes, no, justYes } = action;
      return { title, prompt, callback, callbackNo, yes, no, justYes };
    case Actions.Type.ClearModal:
      return null;
  }
};
