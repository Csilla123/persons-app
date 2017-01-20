import { PersonsAppPage } from './app.po';

describe('persons-app App', function() {
  let page: PersonsAppPage;

  beforeEach(() => {
    page = new PersonsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
