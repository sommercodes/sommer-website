import { SommerWebsitePage } from './app.po';

describe('sommer-website App', () => {
  let page: SommerWebsitePage;

  beforeEach(() => {
    page = new SommerWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
