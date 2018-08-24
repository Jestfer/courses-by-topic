import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsComponent } from './topics.component';
import { By } from '@angular/platform-browser';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { InputComponent } from '../input/input.component';

fdescribe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;
  let addTopicBtn;
  let topicModal;
  let closeTopicBtn;
  let nameInput;
  let descriptionInput;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsComponent, ModalComponent, InputComponent ],
      providers: [ ModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    addTopicBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    topicModal = fixture.debugElement.query(By.css('#new-topic'));
    closeTopicBtn = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    nameInput = fixture.debugElement.queryAll(By.css('app-input'))[0];
    descriptionInput = fixture.debugElement.queryAll(By.css('app-input'))[1];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerHTML).toEqual('Courses by Topic');
    expect(component.title).toEqual('Courses by Topic');
  });

  it('should not display topic-modal on topicsComponent init', () => {
    expect(topicModal.styles.display).toBeUndefined();
  });

  it('should be a button to add a new Topic', () => {
    expect(addTopicBtn.innerHTML).toEqual('Add Topic');
  });

  it('should display topic-modal after clicking on "Add Topic" btn', () => {
    addTopicBtn.click();
    expect(topicModal.styles.display).toEqual('block');
  });

  it('should hide topic-modal after clicking on "Close" btn', () => {
    addTopicBtn.click();
    expect(topicModal.styles.display).toEqual('block');

    closeTopicBtn.click();
    expect(topicModal.styles.display).toEqual('none');
  });

  it('should open topic-modal with two input fields: name and description', () => {
    addTopicBtn.click();
    expect(nameInput.attributes.placeholder).toEqual('name');
    expect(descriptionInput.attributes.placeholder).toEqual('description');
  });

  // it('should create a FormGroup object with the right data only', () => {

  // });
});
