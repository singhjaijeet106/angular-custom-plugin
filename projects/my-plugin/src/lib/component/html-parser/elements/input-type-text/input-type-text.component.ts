import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-input-type-text',
  templateUrl: './input-type-text.component.html',
  styleUrls: ['./input-type-text.component.css']
})
export class InputTypeTextComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() control!: FormControl;
  @Input() name!:string;

  ngOnInit(): void {
    console.log("InputTypeTextComponent - ngOnInit method");
  }

}
