import { CmpltPage } from './app.po';

describe('cmplt App', function() {
  let page: CmpltPage;

  beforeEach(() => {
    page = new CmpltPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
