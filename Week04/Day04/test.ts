'use strict'

import * as test from 'tape';

import { summ } from'./smtg';

test(function (t) {
  t.equal(summ(1, 2), 3);
  t.end();
});