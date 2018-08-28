import { Component, Input, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: InputComponent }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input: ElementRef;

  @Input('placeholder') _placeholder: string;

  @Input('value') _value: String = '';
  set value(param: String) {
    this._value = param;
  }
  get value(): String {
    return this._value;
  }

  @Input('disabled') _disabled: any;

  _onChange: Function;
  _propagateChange: Function;
  _onTouched: Function;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this._disabled === '') {
      this.renderer.setAttribute(this.input.nativeElement, 'disabled', 'true');
    }
  }

  onChange(inputVal) {
    this._value = inputVal;

    if (this._propagateChange) {
      this._propagateChange(this._value);
    }
  }

  writeValue(val: any): void {
    if (this._value !== '') {
      this._value = val;
    }
  }
  registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
