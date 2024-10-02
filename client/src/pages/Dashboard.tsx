import { Flex, Box, Spacer, Divider } from "@chakra-ui/react";
import { SelectMenu } from "../components/SelectMenu";
import { NumericInput } from "../components/InputFields";
import { MarketTabs } from "../components/MarketTabs";
import NavBar from "../components/NavBar";
import { PriceStats } from "../components/PriceStats";

export default function Dashboard() {
  return (
		<>
			<NavBar />
			<section className="flex flex-row h-min">
				<Box bg="white" m={4} w="100%" h="100%">
					<Flex>
						<Box p={4}>
							<SelectMenu />
						</Box>
						<Spacer />
						<Box p={4}>
							<PriceStats />
						</Box>
						<Spacer />
						<Box p={4}>
							<NumericInput inputName="Ticks:" />
						</Box>
					</Flex>
					<Divider m={4} orientation="horizontal" />
					<Box>
						<MarketTabs />
					</Box>
					<Divider m={4} orientation="horizontal" />
				</Box>
				<Divider m={4} orientation="vertical" />
				<Box bg="white" w="50%" h="100%">
					<h1>Bot</h1>
				</Box>
			</section>
		</>
  );
}