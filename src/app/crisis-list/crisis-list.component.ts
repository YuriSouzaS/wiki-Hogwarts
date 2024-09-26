import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-crisis-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css'
})

export class CrisisListComponent implements OnInit {
  content: any[] = [];

  constructor(private spellsservice: SpellsService) {}

  ngOnInit(): void {
      this.spellsservice.getSpells().subscribe(
        (content) => {
          this.content = content;
        },
        (error) => {
          console.log("Error fetching content", error);
        }
      );
  }
}
