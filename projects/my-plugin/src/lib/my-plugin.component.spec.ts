import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPluginComponent } from './my-plugin.component';

describe('MyPluginComponent', () => {
  let component: MyPluginComponent;
  let fixture: ComponentFixture<MyPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
