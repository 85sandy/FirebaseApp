import { ConsultingAppPage } from './app.po';

describe('consulting-app App', () => {
  let page: ConsultingAppPage;

  beforeEach(() => {
    page = new ConsultingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
