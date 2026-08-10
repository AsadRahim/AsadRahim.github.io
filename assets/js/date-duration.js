(function () {
  'use strict';

  const MONTH_VALUE = /^(\d{4})-(0[1-9]|1[0-2])$/;

  function parseMonth(value) {
    const match = MONTH_VALUE.exec(value || '');

    if (!match) {
      return null;
    }

    return {
      year: Number(match[1]),
      month: Number(match[2])
    };
  }

  function monthCount(start, end) {
    // The source dates have month precision, so count both boundary months.
    return ((end.year - start.year) * 12) + end.month - start.month + 1;
  }

  function pluralize(value, unit) {
    return `${value} ${unit}${value === 1 ? '' : 's'}`;
  }

  function formatDuration(months) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const parts = [];

    if (years) {
      parts.push(pluralize(years, 'year'));
    }

    if (remainingMonths) {
      parts.push(pluralize(remainingMonths, 'month'));
    }

    return parts.join(' ');
  }

  function currentMonth() {
    const now = new Date();

    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1
    };
  }

  document.querySelectorAll('[data-date-duration]').forEach(function (element) {
    const start = parseMonth(element.dataset.startDate);
    const end = element.dataset.endDate
      ? parseMonth(element.dataset.endDate)
      : currentMonth();

    if (!start || !end) {
      return;
    }

    const months = monthCount(start, end);

    if (months < 1) {
      return;
    }

    element.textContent = `(${formatDuration(months)})`;
  });
}());
