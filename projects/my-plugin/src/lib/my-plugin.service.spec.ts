import { TestBed } from '@angular/core/testing';

import { MyPluginService } from './my-plugin.service';

describe('MyPluginService', () => {
  let service: MyPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
