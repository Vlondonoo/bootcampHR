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
      id: 5,
      name: '',
      company: '',
      age: 10,
      birthday: '08/08/2018',
      favorite_color: '',
      project: ''
    }
    ];
    let project = [{
      id: 5,
      name: 'the best',
      team_size: 5,
      client_name: 'Came'
    }]
    return { employees };
  }
  constructor() { }
}
