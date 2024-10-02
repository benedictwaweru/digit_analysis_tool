import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Flex, Spacer } from "@chakra-ui/react";
import { NumericInput } from "./InputFields";

export function MarketTabs() {
  return (
		<Tabs isFitted variant="solid-rounded">
			<TabList mb="1em" h="10">
				<Tab>Rise/Fall</Tab>
				<Divider mx={4} orientation="vertical" />
				<Tab>Even/Odd</Tab>
				<Divider mx={4} orientation="vertical" />
				<Tab>Over/Under</Tab>
				<Divider mx={4} orientation="vertical" />
				<Tab>Matches/Differs</Tab>
			</TabList>
			<Divider m={4} orientation="horizontal" />
			<TabPanels>
				<TabPanel>
					<p>one!</p>
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
				<TabPanel>
					<Flex>
						<NumericInput inputName="Over" />
						<Spacer />
						<NumericInput inputName="Under" />
					</Flex>
					<Divider m={4} orientation="horizontal" />
				</TabPanel>
				<TabPanel>
					<p>four!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
  );
}
