export const getLongDateFormat = (date: Date) => {
  const formatter = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
  });

  const dateFormated = formatter.format(date);

  return dateFormated;
};
