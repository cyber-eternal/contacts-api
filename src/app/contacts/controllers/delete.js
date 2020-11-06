import { checkMissingFields } from '../../../components/utils/helper';
import Contacts from '../../../models/contacts';

export default async req => {
  checkMissingFields(req.params, ['id']);
  const { id } = req.params;
  await Contacts.destroy({ where: { id } });
  return 'Successfully deleted';
};