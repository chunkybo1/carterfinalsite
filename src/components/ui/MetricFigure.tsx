import React from "react";

/**
 * MetricFigure — renders a money/stat figure with the unified metric treatment:
 * a smaller muted currency affix, the large display numeral, and a smaller
 * raised suffix (M+, K, etc.). Pairs with the `.metric` / `.metric-affix` /
 * `.metric-suffix` utilities in globals.css so verdict cards and hero stats
 * read as one designed system. Lining tabular figures keep the numbers aligned.
 *
 * Pass a value like "$3.2M", "$950K", or "$50M+".
 */
export const MetricFigure = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) => {
  const match = value.match(/^(\$?)([\d.,]+)(.*)$/);

  if (!match) {
    return <span className={`metric ${className}`}>{value}</span>;
  }

  const [, prefix, num, suffix] = match;

  return (
    <span className={`metric ${className}`}>
      {prefix && <span className="metric-affix opacity-50">{prefix}</span>}
      {num}
      {suffix && <span className="metric-suffix opacity-70">{suffix}</span>}
    </span>
  );
};
