import { LightningPage } from './app.po';

describe('lightning App', () => {
  let page: LightningPage;

  beforeEach(() => {
    page = new LightningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
