import Contacts from '../../../models/contacts';

export default async req => {
  const { id } = req.params;
  if (id) return Contacts.findByPk(id);
  return Contacts.findAll();
};