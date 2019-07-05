import moment from 'moment';
import passwordHash from 'password-hash';

export default {
  users: [
    {
      id: 1,
      email: 'jeremy@example.com',
      first_name: 'Jeremy',
      last_name: 'Samson',
      password: passwordHash.generate('password'),
      phoneNumber: '08136532017',
      address: '10 Zaria Road, kaduna',
      is_admin: true
    },
    {
      id: 2,
      email: 'Moses@example.com',
      first_name: 'Moses',
      last_name: 'Matthew',
      phoneNumber: '08136532017',
      address: '10 Zaria Road, kaduna',
      password: passwordHash.generate('password'),
      is_admin: false
    },
    {
      id: 3,
      email: 'kelvin@example.com',
      first_name: 'Kelvin',
      last_name: 'Michelson',
      phoneNumber: '08136532017',
      address: '10 Zaria Road, kaduna',
      password: passwordHash.generate('password'),
      is_admin: false
    }
  ],
  properties: [
    {
      id: 1,
      owner: 1,
      status: 'available',
      price: '40000',
      state: 'Kaduna State',
      city: 'Zaria',
      address: '10 Zaria Road',
      type: '3 Bedroom',
      created_on: moment(),
      image_url: 'http:cloud'
    },
    {
      id: 2,
      owner: 1,
      status: 'sold',
      price: '40000',
      state: 'Kaduna State',
      city: 'Zaria',
      address: '10 Zaria Road',
      type: '3 Bedroom',
      created_on: moment(),
      image_url: 'http:cloud'
    }
  ]
};
