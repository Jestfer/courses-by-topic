import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let inputEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the following properties', () => {
    expect(component._value).not.toBe(null);
  });

  it('should have an empty value by default', () => {
    expect(component._value).toEqual('');
  });

  it('should set a value in nativeElement when component _value is set', () => {
    component._value = 'jumanji';
    fixture.detectChanges();
    expect(inputEl.value).toEqual('jumanji');
  });
});
