import { Component, OnInit, Input, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;

  constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.modalService.add(this);
  }

  // Se aplica en cada test del suite, pero no en la app, comprobar si es al renderizar la vista de otro comp!
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.el.nativeElement.remove();
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
