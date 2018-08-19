import { Component, Input, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @ViewChild('select') select: ElementRef;

  @Input('options') _options: Array<any>;
  @Input('value') _value: String = '';
  @Input('disabled') _disabled: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this._disabled === '') {
      this.renderer.setAttribute(this.select.nativeElement, 'disabled', 'true');
    }
  }
}
