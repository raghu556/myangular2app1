import { TestBed, inject } from '@angular/core/testing';

import { ReadWriteLocalstorageDataService } from './read-write-localstorage-data.service';

describe('ReadWriteLocalstorageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadWriteLocalstorageDataService]
    });
  });

  it('should be created', inject([ReadWriteLocalstorageDataService], (service: ReadWriteLocalstorageDataService) => {
    expect(service).toBeTruthy();
  }));
});
