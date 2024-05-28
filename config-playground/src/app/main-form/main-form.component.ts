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
  STATE_INIT: number = 0;
  STATE_LOADING: number = 1;
  STATE_LOADED: number = 2;
  state: number = this.STATE_INIT;
  //displayV : boolean = false;
  //displaySpinner: boolean = false;
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
    //this.displaySpinner = true;
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
    this.state = this.STATE_LOADING;
    fetch(myurl).then((response) => {
      if (response.status !== 200) {
        alert('Failed to load configuration from\n\n' + url + '\n\nHTTP status ' + response.status);
        this.state = this.STATE_INIT;
        return;
      }
      //alert('Configuration loaded from\n\n' + url);
      response.json().then((json) => {
        if(this.id == 1){
          this.appService.view1JSON = json
        }else if(this.id === 2){
          this.appService.view2JSON = json
        }
        this.state = this.STATE_LOADED;
      
        //alert("here is your json");
      });
    }).catch(function(e) {
      alert('Failed to load configuration from\n\n' + url + '\n\n' + e.toString());
    });
  }

  isLoaded(): boolean {
    return this.state === this.STATE_LOADED;
  }
  isLoading(): boolean {
    return this.state === this.STATE_LOADING;
  }
}


