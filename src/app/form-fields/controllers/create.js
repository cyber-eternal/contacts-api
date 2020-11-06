import { checkMissingFields } from '../../../components/utils/helper';
import FormFields from '../../../models/form-fields';

export default async req => {
  checkMissingFields(req.body, ['label', 'name', 'type', 'errorMessage']);
  return FormFields.create(req.body);
};