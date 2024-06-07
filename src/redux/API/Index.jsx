import qs from 'qs';

// Serialized query string

export const SerializedQs = (params) =>
  qs.stringify(params, { arrayFormat: 'brackets' });
