import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

export function PriceStats() {
  // TODO: Set stat values to be dynamic and stat arrow to change accordingly
  return (
		<Stat>
			<StatLabel className="text-xs font-semibold italic">PRICE:</StatLabel>
			<StatNumber>345,670.06</StatNumber>
			<StatHelpText>
				<StatArrow type="increase" />
				23.36%
			</StatHelpText>
		</Stat>
  );
}