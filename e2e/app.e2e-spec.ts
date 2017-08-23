import { MachinexMocPage } from './app.po';

describe('machinex-moc App', function() {
  let page: MachinexMocPage;

  beforeEach(() => {
    page = new MachinexMocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
