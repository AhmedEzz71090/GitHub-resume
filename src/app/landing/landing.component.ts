import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ResumeService} from '../resume.service';
import {element} from 'protractor';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  userName: string | undefined;
  disabled = true;

  constructor(private router: Router, private http: HttpClient, private service: ResumeService) {
  }

  ngOnInit(): void {
  }

  generate(): void {
    const baseUrl = 'http://localhost:8080/api/buildResume/';
    this.http.request('GET', `${baseUrl}${this.userName}`).subscribe((res: any) => {
      this.service.data = res;
      this.router.navigate(['/resume']);
    }, error => {
      this.router.navigate(['/not-found']);
    });
  }

  change(e: any): void {
    this.userName = e;
    if (e) {
      this.disabled = false;
    } else  {
      this.disabled = true;
    }
  }
}
