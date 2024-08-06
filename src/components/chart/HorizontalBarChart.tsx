import { BarChart } from "@mui/x-charts/BarChart";
import { DatasetElementType } from "@mui/x-charts/internals";

type BarChartProps = {
  data?: DatasetElementType<string | number>[];
  dataKeyY: string;
  dataKeyX: string;
  label: string;
};

const HorizontalBarChart = ({ data, dataKeyY, dataKeyX, label }: BarChartProps) => {
  const chartSetting = {
    series: [{ dataKey: dataKeyY, label }],
    height: 400,
  };

  return (
    <BarChart
      dataset={data}
      xAxis={[
        {
          scaleType: "band",
          dataKey: dataKeyX,
          valueFormatter: (value) => value.substring(0, 6),
        },
      ]}
      grid={{ horizontal: true }}
      {...chartSetting}
    />
  );
};

export default HorizontalBarChart;
