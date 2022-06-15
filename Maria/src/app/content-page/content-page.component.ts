import { Component, OnInit } from '@angular/core';
import { pets } from '../pets';
import { IPets } from '../IPets';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  pets:IPets[]=pets;

  constructor() { }

  ngOnInit(): void {
  }

}
