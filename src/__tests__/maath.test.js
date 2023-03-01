import Daemon from '../daemon';
import Magician from '../magician';

test('attack without stoned', () => {
  const user = new Daemon('Max');
  expect(user.attack).toBe(100);
});

test('attack with stoned', () => {
  const user = new Magician('Alex');
  user.stoned = true;
  user.distance = 5;
  user.attack = 80;
  expect(user.attack).toBe(28);
});
