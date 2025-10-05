import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlParserComponent } from './html-parser.component';

describe('HtmlParserComponent', () => {
  let component: HtmlParserComponent;
  let fixture: ComponentFixture<HtmlParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlParserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
