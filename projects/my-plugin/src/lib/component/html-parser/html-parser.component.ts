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
  @Input() formGroupNameId!: string;
  config: any;
  errors: string[] = [];
  rows: HtmlFormElements[][] = [];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.elements);

    this.errors = this.validateFormElements(this.elements);
    if (this.errors.length > 0) {
      console.error('Validation failed:', this.errors);
      return;
    }

    this.createForm();

  }


  onSubmit() {

  }

  getRows(elements: any[]): any[][] {
    const rows = [];
    for (let i = 0; i < elements.length; i += 4) {
      rows.push(elements.slice(i, i + 4));
    }
    return rows;
  }

  trackByFn(index: number, el: any): any {
    return el.id || index;
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  private createForm() {
    console.log("create Form")

    this.form = this.formBuilder.group({});

    this.elements.forEach(el => {
      const validators = [];

      if (el.required) { validators.push(Validators.required); }

      if (el.max !== undefined) { validators.push(Validators.max(el.max)); }
      if (el.min !== undefined) { validators.push(Validators.max(el.min)); }

      let defaultValue: any = '';
      if (el.type === 'select' && el.options) {
        const selectedOpt = el.options.find(o => o.selected);
        defaultValue = selectedOpt ? selectedOpt.value : '';
      } else if (el.type === 'checkbox') {
        defaultValue = false;
      }
      this.form.addControl(el.name, new FormControl(defaultValue, validators));
    });

    this.rows = this.getRows(this.elements);
  }

  private validateFormElements(elements: HtmlFormElements[]): string[] {
    const errors: string[] = [];
    const idSet = new Set<number>();
    let firstElementCount = 0;
    let nullNextElementCount = 0;

    elements.forEach((el, index) => {
      const elLabel = `Element ${index + 1} (name: ${el.name || 'N/A'})`;
      //validate unique id for all elements:
      if (idSet.has(el.id)) errors.push(`${elLabel}: Duplicate id "${el.id}".`);
      idSet.add(el.id);

      if (!el.type) errors.push(`Element ${elLabel}: "type" is required.`);
      if (!el.name) errors.push(`Element ${elLabel}: "name" is required.`);
      if (!el.label) errors.push(`Element ${elLabel}: "label" is required.`);
      if (el.required === undefined) errors.push(`Element ${elLabel}: "required" must be true/false.`);

      // Validate numeric constraints
      if (el.min !== undefined && el.max !== undefined && el.min > el.max)
        errors.push(`Element ${elLabel}: "min" cannot be greater than "max".`);

      // If it's a select/dropdown type, validate options
      if (el.type === 'select' && (!el.options || el.options.length === 0))
        errors.push(`Element ${elLabel}}: select must have options.`);

      if (el.options) {
        el.options.forEach((opt, i) => {
          if (!opt.label || !opt.value)
            errors.push(`Element ${elLabel} option ${i + 1}: label and value are required.`);
        });
      }

      // --- Count special flags ---
      if (el.isFirstElement) firstElementCount++;
      if (el.nextElement == null) nullNextElementCount++;

    });

    if (firstElementCount !== 1)
      errors.push(`Exactly one element must have "isFirstElement = true" (found ${firstElementCount}).`);
    if (nullNextElementCount !== 1)
      errors.push(`Exactly one element must have "nextElement = null" (found ${nullNextElementCount}).`);
    return errors;
  }

  
}