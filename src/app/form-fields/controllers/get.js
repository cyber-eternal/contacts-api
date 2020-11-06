import Forms from '../../../models/form-fields';

export default async () => {
  return Forms.findAll();
};