import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({});
  model = { input1: '', input2: '', input3: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'domain',
      type: 'input',
      templateOptions: {
        label: 'Domain',
        placeholder: 'Enter Domain',
        required: true
      }
    },
    {
      key: 'institution',
      type: 'input',
      templateOptions: {
        label: 'Institution',
        placeholder: 'Enter Institution value',
        required: true
      }
    },
    {
      key: 'view',
      type: 'input',
      templateOptions: {
        label: 'View',
        placeholder: 'Enter view value',
        required: true
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      confirm('Configuration submitted!');
    }
  }

}


