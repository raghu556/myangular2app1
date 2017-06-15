import { Myapp1Page } from './app.po';

describe('myapp1 App', () => {
  let page: Myapp1Page;

  beforeEach(() => {
    page = new Myapp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
