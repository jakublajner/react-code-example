import { Helmet } from "react-helmet-async";

import Statistics from "../sections/Statistics";

export default function StatisticsPage() {
  return (
    <>
      <Helmet>
        <title>Statistics | Example App</title>
      </Helmet>

      <Statistics />
    </>
  );
}
