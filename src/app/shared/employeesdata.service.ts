import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';



export class EmployeesdataService implements InMemoryDbService {
  createDb() {
    let employees = [{
      id: 5,
      name: 'Vero',
      company: '',
      age: 10,
      birthday: '08/08/2018',
      favorite_color: '',
      project: 'the best'
    },
    {
      id: 6,
      name: 'monica',
      company: '',
      age: 10,
      birthday: '08/08/2018',
      favorite_color: '',
      project: 'p1'
    },
    {
      id: 7,
      name: 'gertrudis',
      company: '',
      age: 35,
      birthday: '08/08/2018',
      favorite_color: 'purple',
      project: 'p2'
    }
    ];
    let project = [{
      id: 5,
      name: 'the best',
      team_size: 5,
      client_name: 'Came'
    },
    {
      id: 6,
      name: 'p1',
      team_size: 8,
      client_name: 'Came'
    },
    {
      id: 7,
      name: 'p2',
      team_size: 3,
      client_name: 'Came'
    }
  ];

  
    let userLogin = [{
      userName: 'vlondonoo',
      password: '1234'
    }]
    return {employees, project, userLogin};
  }
  constructor() { }
}
