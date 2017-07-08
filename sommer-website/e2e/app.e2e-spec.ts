import { SommerWebsitePage } from './app.po';

describe('sommer-website App', function() {
  let page: SommerWebsitePage;

  beforeEach(() => {
    page = new SommerWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
