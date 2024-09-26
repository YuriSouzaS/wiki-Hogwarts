import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [NgFor],
  templateUrl: './diario.component.html',
  styleUrl: './diario.component.css'
})

export class DiarioComponent implements OnInit {
  content: any[] = [];

  constructor(private bookservice: BooksService) {}

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe(
      (content) => {
      this.content = content;
    },
    (error) => {
      console.log("Error fetching content", error);
    });
  }
}
