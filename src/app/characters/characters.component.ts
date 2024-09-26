import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgFor],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  content: any[] = [];

  constructor(private characters: CharactersService) {}

  ngOnInit(): void {
      this.characters.getCharacters().subscribe(
        (content) => {
          this.content = content;
        },
        (error) => {
          console.log("Error fetching content ", error);
        }
      );
  }
}
