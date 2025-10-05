import { Component, Input, OnInit } from '@angular/core';
import { HtmlFormElements } from '../model/form.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-html-parser',
  templateUrl: './html-parser.component.html',
  styleUrls: ['./html-parser.component.css']
})
export class HtmlParserComponent implements OnInit {
  @Input() elements!: HtmlFormElements[];   
  form!: FormGroup;
  @Input() formGroupNameId!:string;
  config: any;


 constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit(): void {


    console.log(this.elements);

    this.form = this.formBuilder.group({});
    
    this.elements.forEach(el=>{
      const validators = [];

      if(el.required){ validators.push(Validators.required); }
      
      if(el.max!==undefined){ validators.push(Validators.max(el.max)); }
      if(el.min!==undefined){ validators.push(Validators.max(el.min)); }

      let defaultValue: any = '';
      if (el.type === 'select' && el.options) {
        const selectedOpt = el.options.find(o => o.selected);
        defaultValue = selectedOpt ? selectedOpt.value : '';
      } else if (el.type === 'checkbox') {
        defaultValue = false;
      }
      this.form.addControl(el.name,new FormControl(defaultValue,validators));
    })
  }

  
  onSubmit(){
    
  }

}
