import { Component, Input } from '@angular/core';
import { HtmlFormElements } from './component/model/form.model';

@Component({
  selector: 'lib-my-plugin',
  template: `
    <p>
      <lib-html-parser [formGroupNameId]="'formGroupNameId'"
      [elements]="elements" ></lib-html-parser>
    </p>
  `,
  styles: [
  ]
})
export class MyPluginComponent {
     @Input() elements!: HtmlFormElements[];   
     @Input() formGroupNameId!:string;

}
