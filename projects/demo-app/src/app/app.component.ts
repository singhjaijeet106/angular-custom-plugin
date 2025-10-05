import { Component,OnInit } from '@angular/core';
import { HtmlFormElements } from 'dist/my-plugin/lib/component/model/form.model';
import  jsonElement from '../app/model/form-element.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  formElements: HtmlFormElements[] = jsonElement;

  ngOnInit(): void {
    
  }

}
