import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input('value') _value: String = '';
  set value(param: String) {
    this._value = param;
  }

  get value(): String {
    return this._value;
  }

  constructor() { }

  ngOnInit() {
  }

}
