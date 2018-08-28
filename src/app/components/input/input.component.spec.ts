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
    expect(component._placeholder).not.toBe(null);
  });

  it('should have an empty value by default', () => {
    expect(component._value).toEqual('');
  });

  it('should set a value in nativeElement when component _value is set', () => {
    component._value = 'jumanji';
    fixture.detectChanges();
    expect(inputEl.value).toEqual('jumanji');
  });

  it('should disable nativeEl when component is disabled', () => {
    component._disabled = '';
    component.ngOnInit();
    expect(inputEl.disabled).toBe(true);
  });

  it('should change comp. value when onChange() is run with a different value', () => {
    component.onChange('Chess');
    fixture.detectChanges();
    expect(component._value).toEqual('Chess');
  });
});
