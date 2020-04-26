import formConfig from "./formConfig";

const form = {
  title: "📃 Dynamic Form",
  description: `This form renders input fields based on user-inputted JSON. This was implemented as a React.js test for an interview and I decided to deploy it due to the frequency I get asked to do something like this on interviews.`,
  inputTitle: "INPUT",
  outputTitle: "OUTPUT",
  formTitle: "FORM",
  submitTitle: "SUBMIT",
  JSONWarning: "🤨 That's not a valid JSON array!",
  noItemsWarning: "😕 No form items to render.",
  noDataWarning: "🤔 No data returned yet.",
  requiredWarning: "🤨 Please complete the required fields: ",
  invalidJSONError: "ERROR: invalid json",
  formConfig,
};

export default form;
