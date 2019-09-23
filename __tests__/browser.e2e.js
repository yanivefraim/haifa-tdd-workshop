test('should register a new game', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Eyal';

  await navigate();

  await newGame(p1, p2);

  expect(await getPlayer1Title()).toBe(p1);
  expect(await getPlayer2Title()).toBe(p2);
});

test('should show "X" after first player clicks', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Eyal';

  await navigate();

  await newGame(p1, p2);

  await clickACellAt(0);

  expect(await getACellAt(0)).toBe('X');
});

test('first player should win the game', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Eyal';

  await navigate();

  await newGame(p1, p2);

  await clickACellAt(0);
  await clickACellAt(3);
  expect(await hasWinner()).toBeFalsy();
  await clickACellAt(1);
  await clickACellAt(4);
  await clickACellAt(2);

  // await page.screenshot({ path: './sc.png' });
  expect(await getWinner()).toBe(`${p1} won!!!`);
});

async function hasWinner() {
  return !!(await page.$('[data-testid="winner"]'));
}

async function getWinner() {
  return page.$eval('[data-testid="winner"]', el => el.innerText);
}

async function getACellAt(index) {
  return await page.$$eval('td', (tds, i) => tds[i].innerText, index);
}

async function clickACellAt(index) {
  await page.$$eval(
    'td',
    (tds, i) => {
      return tds[i].click();
    },
    index
  );
}

function getPlayer2Title() {
  return page.$eval(
    '[data-testid="p2-title"]',
    titleElement => titleElement.innerText
  );
}

function getPlayer1Title() {
  return page.$eval(
    '[data-testid="p1-title"]',
    titleElement => titleElement.innerText
  );
}

async function newGame(p1, p2) {
  await page.type('[data-testid="p1-input"]', p1);
  await page.type('[data-testid="p2-input"]', p2);
  await page.click('[data-testid="new-game"]');
}

async function navigate() {
  await page.goto('http://localhost:3000');
}
