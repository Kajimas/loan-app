/*
Title: home.component.ts
Author: William Egge
Date: 23 July 2023
Description: The home component for the Loan App.
*/


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loanForm: FormGroup;
  monthlyPayment: number;
  totalInterest: number;

  constructor(private formBuilder: FormBuilder) {
    this.loanForm = this.formBuilder.group({
      principle: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      interest: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      years: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  onSubmit(): void {
    const values = this.loanForm.value;
    const principle = values.principle;
    const interestRate = values.interest / 100 / 12;
    const payments = values.years * 12;

    // Calculation logic
    this.monthlyPayment =
      (principle * interestRate * Math.pow(1 + interestRate, payments)) /
      (Math.pow(1 + interestRate, payments) - 1);
    this.totalInterest = this.monthlyPayment * payments - principle;
  }
  ngOnInit(): void {
  }
}
