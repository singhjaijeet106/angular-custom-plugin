import { NgModule } from '@angular/core';
import { MyPluginComponent } from './my-plugin.component';
import { HtmlParserComponent } from './component/html-parser/html-parser.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTypeTextComponent } from './component/html-parser/elements/input-type-text/input-type-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from './component/html-parser/elements/input-select/input-select.component';


@NgModule({
  declarations: [
    MyPluginComponent,
    HtmlParserComponent,
    InputTypeTextComponent,
    InputSelectComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    MyPluginComponent
  ]
})
export class MyPluginModule { }
