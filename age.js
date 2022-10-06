function ageCalculator(yyyy, mm, dd) {
  const birthDate = new Date(yyyy, mm, dd);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  currentDate.getMonth() <= birthDate.getMonth()
    ? currentDate.getDate() < birthDate.getDate()
      ? (age -= 1)
      : age
    : age;
  return age;
}
