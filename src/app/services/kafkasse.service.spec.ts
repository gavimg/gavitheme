import { TestBed } from '@angular/core/testing';

import { KafkasseService } from './kafkasse.service';

describe('KafkasseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KafkasseService = TestBed.get(KafkasseService);
    expect(service).toBeTruthy();
  });
});
