import { PictimePage } from './app.po';

describe('pictime App', function() {
  let page: PictimePage;

  beforeEach(() => {
    page = new PictimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
