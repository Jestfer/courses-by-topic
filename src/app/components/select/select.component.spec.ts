import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { By } from '@angular/platform-browser';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let selectEl;

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
  });

  it('should set same amount of options for nativeElem as set in _options', () => {
    component._options = ['One', 'Two', 'Three', 'Four'];
    fixture.detectChanges();
    expect(selectEl.nativeElement.attributes[1].value).toEqual('[\'One\', \'Two\', \'Three\', \'Four\']');
  });
});
