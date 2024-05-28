import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  constructor(private appService: AppService ) { }


  ngOnInit(): void {
  }



  @Input() id : number = 0;
  form = new FormGroup({});
  model = {
    domain: 'sqa-eu04.alma.exlibrisgroup.com',
    institution: '49HBZ_FDO',
    view: 'VU1'
  };
  displayV : boolean = false;
  displaySpinner: boolean = false;
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
    this.displaySpinner = true;
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
    let myurl = 'http://il-borisg-vm:1801/primaws/rest/external/getResponse?institute=TRAINING_1_INST&url='
    + encodeURIComponent(url);
    fetch(myurl).then((response) => {
      
      //alert('Configuration loaded from\n\n' + url);
      response.json().then((json) => {
        if(this.id == 1){
          this.appService.view1JSON = json
        }else if(this.id === 2){
          this.appService.view2JSON = json
        }
      
        //alert("here is your json");
      });
    }).catch(function(e) {
      alert('Failed to load configuration from\n\n' + url + '\n\n' + e.toString());
    }).finally(() => {
      this.displaySpinner = false;
      this.displayV = true;
    })
  }
}


