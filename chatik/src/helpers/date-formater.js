const getDate = (date) => {
  const newDate = new Date(date);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
    newDate
  );
  const month = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(newDate);
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(newDate);

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(newDate);

  const year = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(newDate);

  return { day: day, month: month, time: time, year: year, weekday: weekday };
};

const isDateInThisWeek = (date) => {
  const today = new Date();
  const firstDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay())
  );
  const lastDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 6)
  );
  return date >= firstDayOfWeek && date <= lastDayOfWeek ? true : false;
};

const isToDay = (date) => {
  const today = new Date();
  const result =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
  return result;
};

export default function dateFormatter(options) {
  const last_message_date = new Date(options.fn(this));
  const result = getDate(last_message_date);
  if (isToDay(last_message_date)) {
    return result.time;
  }
  if (isDateInThisWeek(last_message_date)) {
    return result.weekday;
  }
  return `${result.day} ${result.month} ${result.year}  `;
}
