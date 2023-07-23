import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      principle: [''],
      interest: [''],
      years: [''],
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
