import { DragonBoatPlannerPage } from './app.po';

describe('dragon-boat-planner App', () => {
  let page: DragonBoatPlannerPage;

  beforeEach(() => {
    page = new DragonBoatPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
