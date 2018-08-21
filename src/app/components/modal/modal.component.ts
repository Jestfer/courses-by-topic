import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id: string;

  constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // add self (this modal instance) to the modal service so it's accessible from controllers
    // as soon as it is created
    this.modalService.add(this);
  }

  open() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'display',
      'block'
    );
  }

  close() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'display',
      'none'
    );
  }
}
