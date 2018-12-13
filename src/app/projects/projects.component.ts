import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Project } from '../shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private http: HttpClient, public data:DataService) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.data.getProjects()
    .subscribe(data => {
      this.projects = data;
      console.log(data)
    });
  }
}
