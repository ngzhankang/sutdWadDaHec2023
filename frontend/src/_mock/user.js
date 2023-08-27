import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import tutees from '../data/tutee'
import tutors from '../data/tutor'

// ----------------------------------------------------------------------



/*
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.name.fullName(),
  isVerified: faker.datatype.boolean(),
  status: Math.floor(Math.random() * 10).toString(),
  role: sample(['P', 'S']).concat("", Math.floor(Math.random() * 4 + 1).toString(), " ", sample(['Math', 'Eng', 'Sci']))
}));

*/

export default users;
