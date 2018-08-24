import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  title: String = 'Courses by Topic';
  form: FormGroup;

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(),
      description: new FormControl()
    });
  }

  addTopic() {
    console.log(this.form);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
