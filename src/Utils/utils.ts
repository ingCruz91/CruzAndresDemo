function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date: Date = new Date(dateString);
  return date.toLocaleDateString('es-ES', options);
}

export default formatDate;
