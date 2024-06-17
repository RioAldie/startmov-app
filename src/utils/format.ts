export const customFormatNumber = (number: number) => {
  const parts = number.toFixed(3).split('.'); // Ensure 3 decimal places
  const integerPart = parts[0];
  const decimalPart = parts[1];

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.'
  );

  return `${formattedIntegerPart}.${decimalPart}`;
};
