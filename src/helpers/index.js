export const parseDispatchText = (text) => {
  const dispatchFields = [
    'client_id',
    'contractor_id',
    'dispatch_id',
    'time_stamp',
    'job_id',
    'max_eta',
    'text',
    'phone',
  ];
  const parsedText = text
    .replace(/=>/g, ': ')
    .replace(/[^\d\s_,.:\-A-Z]/gi, '')
    .split(/,/)
    .filter((value) => dispatchFields.find((item) => value.includes(item)));

  return parsedText.map((str) => str.replace(':', ''));
};
