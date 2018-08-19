import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsComponent } from './topics.component';
import { By } from '@angular/platform-browser';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;
  let addTopicBtn;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    addTopicBtn = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerHTML).toEqual('Courses by Topic');
    expect(component.title).toEqual('Courses by Topic');
  });

  it('should be a button to add a new Topic', () => {
    expect(addTopicBtn.innerHTML).toEqual('Add Topic');
  });
});
