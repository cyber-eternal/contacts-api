import { checkMissingFields, validatePhoneNumber } from '../../../components/utils/helper';
import Contacts from '../../../models/contacts';
import FormFields from '../../../models/form-fields';

export default async req => {
  const formFields = (await FormFields.findAll({ where: { required: true }, raw: true })).map(i => i.name);
  checkMissingFields(req.body, formFields);
  if (!validatePhoneNumber(req.body.phone)) throw new Error('Phone number is not valid');
  return Contacts.create(req.body);
};