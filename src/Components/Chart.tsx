import Box from "@mui/material/Box";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function PieAnimation() {
  const data = [
    { id: 0, color: "#7352C7", value: 47, label: "47%" },
    { id: 1, color: "#64B5F6", value: 40, label: "40%" },
    { id: 2, color: "#D9E6F0", value: 13, label: "13%" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <PieChart
        height={250}
        hideLegend={true}
        sx={{
          height: 150,
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
            fontWeight: "bold",
          },
        }}
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            data,
            innerRadius: 75,
            arcLabel: (params) => params.label ?? "",
            arcLabelMinAngle: 20,
            cy: 185,
          },
        ]}
      />
    </Box>
  );
}
