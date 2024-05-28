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
  model = {
    domain: 'sqa-eu04.alma.exlibrisgroup.com',
    institution: '49HBZ_FDO',
    view: 'VU1'
  };
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
    if (!this.form.valid) {
      return;
    }
    let url = this.makeConfigUrl(this.model.domain, this.model.institution, this.model.view);
    this.getConfiguration(url);
  }

  makeConfigUrl(domain: string, institution: string, view: string) : string {
    if (!/^https?:\/\//.test(domain)) {
      domain = 'https://'+ domain;
    }
    if (!/\/$/.test(domain)) {
      domain += '/';
    }
    let url = `${domain}primaws/rest/pub/configuration/vid/${institution}:${view}`
    return url;
  }

  getConfiguration(url: string) {
    fetch(url, {mode: 'no-cors'}).then(function(response) {
      alert('Configuration loaded from\n\n' + url);
    }).catch(function(e) {
      alert('Failed to load configuration from\n\n' + url + '\n\n' + e.toString());
    });
  }
}


