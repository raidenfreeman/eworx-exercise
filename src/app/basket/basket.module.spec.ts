import { BasketModule } from './basket.module';

describe('BasketModule', () => {
  let basketModule: BasketModule;

  beforeEach(() => {
    basketModule = new BasketModule();
  });

  it('should create an instance', () => {
    expect(basketModule).toBeTruthy();
  });
});
