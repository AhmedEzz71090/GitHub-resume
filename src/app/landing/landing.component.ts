import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ResumeService} from '../resume.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  url: string | undefined;

  constructor(private router: Router, private http: HttpClient, private service: ResumeService) {
  }

  ngOnInit(): void {
  }

  generate(): void {
    // URL is the link typed in the input
    this.http.request('GET', `${this.url}`).subscribe((res: any) => {
      this.service.data = res;
      this.router.navigate(['/resume']);
    }, error => {
      this.router.navigate(['/not-found']);
    });
  }

  change(e: any): void {
    this.url = e;
  }
}
