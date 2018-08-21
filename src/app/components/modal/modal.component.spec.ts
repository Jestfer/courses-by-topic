import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ModalService } from '../../services/modal.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ ModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    modalService = TestBed.get(ModalService);
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the following properties', () => {
    expect(component.id).not.toBe(null);
  });

  it('should push modal to the array in modal.service when it is created', () => {
    component.id = 'mikasa';
    fixture.detectChanges();
    expect(modalService.modals.length).toBe(1);
    expect(modalService.modals[0].id).toEqual('mikasa');
  });
});
