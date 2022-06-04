import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  data: any | undefined;

  constructor(public service: ResumeService) {
  }

  ngOnInit(): void {
    this.data = this.service?.data;
  }
}
