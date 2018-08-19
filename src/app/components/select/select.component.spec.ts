import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { By } from '@angular/platform-browser';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let selectEl, optionEls;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    selectEl = fixture.debugElement.query(By.css('select'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the following propertes', () => {
    expect(component._options).not.toBe(null);
    expect(component._value).not.toBe(null);
    expect(component._disabled).not.toBe(null);
  });

  it('should set same amount of options for nativeElem as set in _options', () => {
    component._options = ['One', 'Two', 'Three', 'Four'];
    fixture.detectChanges();
    // expect(selectEl.nativeElement.children.length).toEqual(4);

    optionEls = fixture.debugElement.queryAll(By.css('option'));
    expect(optionEls.length).toBe(4);
  });

  it('should have an empty value by default', () => {
    expect(component._value).toEqual('');
  });

  it('should change component value when an option is clicked', () => {
    component._options = ['One', 'Two', 'Three', 'Four'];
    fixture.detectChanges();

    optionEls = fixture.debugElement.queryAll(By.css('option'));
    optionEls[2].nativeElement.click(); // option nativeElem
    expect(component._value).toEqual('Three');
  });

  it('should disable nativeElem when component is set to disabled', () => {
    component._disabled = '';
    component.ngOnInit();
    expect(selectEl.nativeElement.disabled).toBe(true);
  });
});
