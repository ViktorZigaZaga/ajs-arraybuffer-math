import Maath from './maath';

export default class Daemon extends Maath {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
