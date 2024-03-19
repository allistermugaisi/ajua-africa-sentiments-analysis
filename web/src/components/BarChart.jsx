import { BarChart } from "@tremor/react";

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export const BarChartHero = ({
  totalPositiveSentiments,
  totalNeutralSentiments,
  totalNegativeSentiments,
}) => {
  const chartdata = [
    {
      name: "Positive sentiments",
      "Positive sentiments": totalPositiveSentiments,
    },
    {
      name: "Neutral sentiments",
      "Neutral sentiments": totalNeutralSentiments,
    },
    {
      name: "Negative sentiments",
      "Negative sentiments": totalNegativeSentiments,
    },
  ];

  return (
    <BarChart
      data={chartdata}
      index="name"
      categories={[
        "Positive sentiments",
        "Neutral sentiments",
        "Negative sentiments",
      ]}
      colors={["green", "yellow", "red"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      onValueChange={(v) => console.log(v)}
    />
  );
};
