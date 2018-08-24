import { Component, Input, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
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

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this._disabled === '') {
      this.renderer.setAttribute(this.input.nativeElement, 'disabled', 'true');
    }
  }
}
