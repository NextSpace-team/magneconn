import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Link,
  List,
  Heading,
  Center,
  Flex,
  useBreakpointValue,
  Select,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ChartDstLastMonth } from "../components/chart_dst";
import { ChartBz7d, ChartBz1d, ChartBz3d, ChartBz6h } from "../components/chart_bz";
import { ChartOneDayPredict } from "../components/chart_predict";
import { ChartPlasmaRealTime, ChartPlasma3d, ChartPlasme7d, ChartPlasma6h, ChartPlasma2h, ChartPlasma1d } from '../components/chart_plasma';
import Paragraph from "../components/paragraph";
import { fetchDstNowData } from '../components/dst_now';
import { fetchBzNowData } from '../components/bz_now';
import { fetchPredictData } from '../components/predict';

const chartData = [
  {
    category: "DST",
    chartName: "ChartDstLastMonth",
    chartLabel: "DST Last Month",
  },
  {
    category: "Bz",
    chartName: "ChartBz6h",
    chartLabel: "Bz Last 6 hours",
  },
  {
    category: "Bz",
    chartName: "ChartBz1d",
    chartLabel: "Bz last 24h",
  },
  {
    category: "Bz",
    chartName: "ChartBz3d",
    chartLabel: "Bz last 3 days",
  },
  {
    category: "Bz",
    chartName: "ChartBz7d",
    chartLabel: "Bz last 7 days",
  },
  {
    category: "Bz(min)×K",
    chartName: "ChartOneDayPredict",
    chartLabel: "Bz(min)×K (6h predict)",
  },
  {
    category: "Plasma",
    chartName: "ChartPlasmaRealTime",
    chartLabel: "Plasma Real-Time",
  },
  {
    category: "Plasma",
    chartName: "ChartPlasma3d",
    chartLabel: "Plasma Last 3 days",
  },
  {
    category: "Plasma",
    chartName: "ChartPlasme7d",
    chartLabel: "Plasma Last 7 days",
  },
  {
    category: "Plasma",
    chartName: "ChartPlasma6h",
    chartLabel: "Plasma Last 6 hours",
  },
  {
    category: "Plasma",
    chartName: "ChartPlasma2h",
    chartLabel: "Plasma Last 2 hours",
  },
  {
    category: "Plasma",
    chartName: "ChartPlasma1d",
    chartLabel: "Plasma Last 24 hours",
  },
];

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("DST");
  const [selectedChart, setSelectedChart] = useState("ChartDstLastMonth");
  const [dstData, setDstData] = useState({ dst: null, stormStrength: null });
  const [bzData, setBzData] = useState({ bz: null, stormStrength: null });
  const [predictData, setPredictData] = useState(null);
  const [stormStrength, setStormStrength] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleChartSwitch = (chartName) => {
    setSelectedChart(chartName);
  };

  const chartWidth = 1200;
  const chartHeight = 600;

  const isMobile = useBreakpointValue({ base: true, md: false });

  const uniqueCategories = [...new Set(chartData.map((chart) => chart.category))];

  const filteredCharts = chartData.filter((chart) => chart.category === selectedCategory);

  return (
    <Layout textAlign={"center"} w={"100%"} height={"100%"}>
      <Box display={{ md: "unset" }}>
        <Box flexGrow={1} mt={100} >
          <Section delay={0.1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Heading as="h2" fontFamily={"Inter Tight, sans-serif"} fontWeight={"regular"} mb={"1.5rem"} color={"_yellow"}>
                Amplitude Chart ({selectedCategory})
              </Heading>
              <Select w={"20%"} color={"_yellow"} value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Box>
            <Center>
              {selectedChart === "ChartOneDayPredict" ? (
                <ChartOneDayPredict width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartDstLastMonth" ? (
                <ChartDstLastMonth width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartBz7d" ? (
                <ChartBz7d width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartBz1d" ? (
                <ChartBz1d width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartBz3d" ? (
                <ChartBz3d width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartBz6h" ? (
                <ChartBz6h width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartPlasmaRealTime" ? (
                <ChartPlasmaRealTime width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartPlasma3d" ? (
                <ChartPlasma3d width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartPlasme7d" ? (
                <ChartPlasme7d width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartPlasma6h" ? (
                <ChartPlasma6h width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartPlasma2h" ? (
                <ChartPlasma2h width={chartWidth} height={chartHeight} />
              ) : selectedChart === "ChartPlasma1d" ? (
                <ChartPlasma1d width={chartWidth} height={chartHeight} />
              ) : null}
            </Center>
          </Section>
        </Box>
        <Box>
          <Flex
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            alignContent="space-between"
            mt={isMobile ? 0 : 10}
          >
            <List style={{ textAlign: "center" }}>
              {filteredCharts.map((chart) => (
                <Link key={chart.chartName}>
                  <Button
                    mr={isMobile ? 5 : 10}
                    height={isMobile ? "2rem" : "3rem"}
                    mb={4}
                    backgroundColor={selectedChart === chart.chartName ? "_yellow" : "gray.700"}
                    color={selectedChart === chart.chartName ? "black" : "_yellow"}
                    onClick={() => handleChartSwitch(chart.chartName)}
                  >
                    {chart.chartLabel}
                  </Button>
                </Link>
              ))}
            </List>
          </Flex>
        </Box>
      </Box>
    </Layout >
  );
};

export default Home;
