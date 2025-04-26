import {
  Box,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { ReactElement } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PieAnimation from "../Components/Chart";

const monthlyData = [
  { month: "Jan", investment: 30, loss: 20, profit: 50, maintenance: 0 },
  { month: "Feb", investment: 120, loss: 10, profit: 140, maintenance: 30 },
  { month: "Mar", investment: 25, loss: 15, profit: 30, maintenance: 20 },
  { month: "Apr", investment: 35, loss: 20, profit: 40, maintenance: 0 },
  { month: "May", investment: 40, loss: 25, profit: 35, maintenance: 15 },
  { month: "Jun", investment: 45, loss: 30, profit: 50, maintenance: 25 },
  { month: "Jul", investment: 50, loss: 35, profit: 45, maintenance: 0 },
  { month: "Aug", investment: 20, loss: 15, profit: 25, maintenance: 10 },
  { month: "Sep", investment: 35, loss: 20, profit: 30, maintenance: 15 },
  { month: "Oct", investment: 45, loss: 25, profit: 35, maintenance: 20 },
  { month: "Nov", investment: 30, loss: 20, profit: 25, maintenance: 0 },
  { month: "Dec", investment: 40, loss: 25, profit: 30, maintenance: 15 },
];

const stockData = [
  { name: "Bajaj Finery", price: 1839.0, profit: 10, trend: "up" },
  { name: "TTML", price: 100.0, profit: -10, trend: "down" },
  { name: "Reliance", price: 200.0, profit: 10, trend: "up" },
  { name: "TTML", price: 189.0, profit: -10, trend: "down" },
  { name: "Stolon", price: 189.0, profit: -10, trend: "down" },
];

const data = [
  {
    icons: (
      <>
        <ContentCopyIcon />
        <MoreHorizIcon />
      </>
    ),
    salary: "$500.00",
    type: "Total Earning",
    backgroundColor: "linear-gradient(135deg, #7352C7 0%, #5930B3 100%)",
  },
  {
    icons: (
      <>
        <ShoppingBagOutlinedIcon />
        <MoreHorizIcon />
      </>
    ),
    salary: "$961",
    type: "Total Order",
    backgroundColor: "linear-gradient(135deg, #2196F3 0%, #1E88E5 100%)",
  },
  {
    icons: (
      <>
        <AccountBalanceWalletOutlinedIcon />
        <MoreHorizIcon />
      </>
    ),
    salary: "$203k",
    type: "Total Income",
    backgroundColor: "linear-gradient(135deg, #2196F3 0%, #1E88E5 100%)",
  },
];
const HomePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#F4F5F7",
        borderRadius: 2,
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3 }}>
        {data.map((d) => (
          <CardComp
            icons={d.icons}
            salary={d.salary}
            type={d.type}
            backgroundColor={d.backgroundColor}
          />
        ))}
      </Box>

      {/* Charts Section */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {/* Growth Chart */}
        <Box
          sx={{
            flexGrow: 1,
            minWidth: { xs: "100%", lg: "calc(66.666% - 12px)" },
          }}
        >
          <Card
            sx={{ borderRadius: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Box>
                  <Typography color="text.secondary">Total Growth</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    $2,324.00
                  </Typography>
                </Box>
                <Select
                  defaultValue="today"
                  size="small"
                  sx={{
                    minWidth: 120,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <MenuItem value="today">Today</MenuItem>
                  <MenuItem value="week">Week</MenuItem>
                  <MenuItem value="month">Month</MenuItem>
                </Select>
              </Box>
              <Box sx={{ width: "100%", height: 350 }}>
                <BarChart
                  series={[
                    {
                      data: monthlyData.map((d) => d.investment),
                      label: "Investment",
                      color: "#64B5F6",
                    },
                    {
                      data: monthlyData.map((d) => d.loss),
                      label: "Loss",
                      color: "#42A5F5",
                    },
                    {
                      data: monthlyData.map((d) => d.profit),
                      label: "Profit",
                      color: "#7352C7",
                    },
                    {
                      data: monthlyData.map((d) => d.maintenance),
                      label: "Maintenance",
                      color: "#E3F2FD",
                    },
                  ]}
                  xAxis={[
                    {
                      data: monthlyData.map((d) => d.month),
                      scaleType: "band",
                      tickLabelStyle: { fontSize: 11 },
                    },
                  ]}
                  height={350}
                  sx={{
                    ".MuiBarElement-root": {
                      borderRadius: "4px 4px 0 0",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
          <Box sx={{ display: "flex", width: "100%", gap: 3, mt: 3 }}>
            <Card
              sx={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                width: "50%",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Response Stats</Typography>
                  <MoreHorizIcon sx={{ color: "gray" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: 2,
                    my: 3,
                  }}
                >
                  <ComCom
                    color={"#623BBA"}
                    title={"Response time"}
                    des={"3min"}
                  />
                  <ComCom color={"gray"} title={"Answer rate"} des={"78.5%"} />
                  <ComCom
                    color={"gray"}
                    title={"Closing ratio"}
                    des={"83.2%"}
                  />
                </Box>
                <PieAnimation />
              </CardContent>
            </Card>
            <Card
              sx={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                width: "50%",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Response Stats</Typography>
                  <MoreHorizIcon sx={{ color: "gray" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: 2,
                    my: 3,
                  }}
                >
                  <ComCom
                    color={"#623BBA"}
                    title={"Response time"}
                    des={"3min"}
                  />
                  <ComCom color={"gray"} title={"Answer rate"} des={"78.5%"} />
                  <ComCom
                    color={"gray"}
                    title={"Closing ratio"}
                    des={"83.2%"}
                  />
                </Box>
                <PieAnimation />
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Popular Stocks */}
        <Box
          sx={{
            flexGrow: 1,
            minWidth: { xs: "100%", lg: "calc(33.333% - 12px)" },
          }}
        >
          <Card
            sx={{ borderRadius: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Popular Stocks
                </Typography>
                <MoreHorizIcon />
              </Box>
              <Stack spacing={2}>
                {stockData.map((stock, index) => (
                  <Card
                    key={index}
                    sx={{
                      bgcolor: index === 0 ? "#F3F0FF" : "white",
                      boxShadow: "none",
                      border: "1px solid",
                      borderColor:
                        index === 0 ? "transparent" : "rgba(0,0,0,0.1)",
                    }}
                  >
                    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 500 }}
                          >
                            {stock.name}
                          </Typography>
                          <Typography
                            color={
                              stock.profit > 0 ? "success.main" : "error.main"
                            }
                            variant="caption"
                            sx={{ fontWeight: 500 }}
                          >
                            {stock.profit}%{" "}
                            {stock.profit > 0 ? "Profit" : "Loss"}
                          </Typography>
                        </Box>
                        <Box textAlign="right">
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
                            ${stock.price}
                          </Typography>
                          {stock.trend === "up" ? (
                            <KeyboardArrowUpIcon color="success" />
                          ) : (
                            <KeyboardArrowDownIcon color="error" />
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

const CardComp = ({
  icons,
  salary,
  type,
  backgroundColor,
}: {
  icons: ReactElement;
  salary: string;
  type: string;
  backgroundColor: string;
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minWidth: {
          xs: "100%",
          sm: "calc(50% - 24px)",
          lg: "calc(33.333% - 24px)",
        },
      }}
    >
      <Card
        sx={{
          background: backgroundColor,
          color: "white",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          height: "100%",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            {icons}
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {salary}
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>{type}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const ComCom = ({ color, title, des }: any) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          height: 48,
          width: 4,
          bgcolor: color,
          marginRight: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 0.2,
        }}
      >
        <Typography sx={{ color: "grey", fontSize: 16 }}>{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
          <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
            {des}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
