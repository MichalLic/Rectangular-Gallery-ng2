import { RectangularGalleryPage } from './app.po';

describe('rectangular-gallery App', function() {
  let page: RectangularGalleryPage;

  beforeEach(() => {
    page = new RectangularGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
