export const getLongDateFormat = (date: Date): string => {
  const formatter = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
  });

  const dateFormated = formatter.format(date);

  return dateFormated;
};
