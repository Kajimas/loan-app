/*
Title: base-layout.component.ts
Author: William Egge
Date: 23 July 2023
Description: The base layout component for the Loan App.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  project: string;

  constructor() {
    this.project = 'Loan App';
  }

  ngOnInit(): void {
  }
}
