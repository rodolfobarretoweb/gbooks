import { EN } from '../configs/constants';
import { shared } from './shared';
import { search } from './search';
import { details } from './details';
import { favorite } from './favorite';

export const langs = {
  [EN] : { shared, search, details, favorite }
};
