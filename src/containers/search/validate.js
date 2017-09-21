import { I18n } from 'react-redux-i18n';

export default function(values) {
  const errors = {};

  if(values.query && values.query.length < 3) {
    errors.query = I18n.t('shared.formValidation.minLength', { size : 3 });
  }

  return errors;
}
