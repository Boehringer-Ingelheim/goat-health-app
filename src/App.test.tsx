const BASE_URL = 'http://localhost:8080';

describe('App Screenshots', () => {
  it('/home', async () => {
    await page.goto(`${BASE_URL}/home`);
    await page.screenshot({
      path: `dist/${deviceName}-screenshot-home.png`
        .toLowerCase()
        .replace(' ', '-'),
    });
  });

  const CHAPTERS = ['01', '02'];
  for (let i = 0; i < CHAPTERS.length; i++) {
    it(`/chapter/${CHAPTERS[i]}/01`, async () => {
      await page.goto(`${BASE_URL}/chapter/${CHAPTERS[i]}/01`);
      await page.screenshot({
        path: `dist/${deviceName}-screenshot-chapter-${CHAPTERS[i]}-01.png`
          .toLowerCase()
          .replace(' ', '-'),
      });
    });
  }
});

export {};
