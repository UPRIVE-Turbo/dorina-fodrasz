import * as migration_20260615_195534_initial from './20260615_195534_initial';

export const migrations = [
  {
    up: migration_20260615_195534_initial.up,
    down: migration_20260615_195534_initial.down,
    name: '20260615_195534_initial'
  },
];
