// utils
import { inferQueryKeyStore, mergeQueryKeys } from '@lukemorales/query-key-factory';
import { cerebrolearnHiddenQueryKeys } from './hidden.query';
// others


// ----------------------------------------------------------------------

export const cerebroQueryKeys = mergeQueryKeys(cerebrolearnHiddenQueryKeys);

export type CerebroQueryKeys = inferQueryKeyStore<typeof cerebroQueryKeys>;
