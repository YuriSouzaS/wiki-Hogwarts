import { Component, OnInit } from '@angular/core';
import { ContentHomeService } from '../content-home.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [NgFor],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})

export class SectionOneComponent implements OnInit {
  content: any[] = [];

  constructor(private contentService: ContentHomeService) {}

  ngOnInit(): void {
      this.contentService.getHouses().subscribe(
        (content) => {
          this.content = content;
        },
        (error) => {
          console.log("Error fetching content", error);
        }
      );
  }
}
