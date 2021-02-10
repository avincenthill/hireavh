import formConfig from './formConfig';

const form = {
  title: '📃 Dynamic Form',
  description: `PERSONAL PROJECT: This form renders inputs based on a configuration array of JSON. This was implemented as a React.js test for an interview and I decided to deploy it due to the frequency I get asked to make something like this while applying for jobs.`,
  descriptionA: `PERSONAL PROJECT: This form renders inputs based on a configuration array of JSON, for example:`,
  descriptionB: `[
    {
      "tag": "input",
      "name": "first_name",
      "type": "text",
      "human_label": "First Name",
      "is_required": "true"
    }
  ]`,
  descriptionC: `It outputs JSON when the form is submitted. This was implemented as a React.js test for an interview and I decided to deploy it due to the frequency I get asked to make something like this while applying for jobs.`,
  inputTitle: 'JSON CONFIG',
  outputTitle: 'FORM DATA',
  formTitle: 'DYNAMIC FORM',
  submitTitle: 'SUBMIT',
  JSONWarning: "🤨 That's not a valid input configuration array!",
  noItemsWarning: '😕 No form items to render.',
  noDataWarning: '🤔 No data returned yet.',
  requiredWarning: '🤨 Please complete the required fields: ',
  invalidJSONError: 'ERROR: invalid json',
  formConfig,
};

export default form;
