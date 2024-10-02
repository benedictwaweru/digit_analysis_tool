import { Select } from "@chakra-ui/react";

// TODO: Style span tag inside label with Tailwind CSS
export function SelectMenu() {
	return (
		<label htmlFor="">
			<span className="text-xs font-semibold italic">Market Type</span>
			<Select placeholder="-" variant="filled">
				<option value="volatility-10-index">Volatility 10 Index</option>
				<option value="volatility-10-1s-index">Volatility 10 (1s) Index</option>
				<option value="volatility-25-index">Volatility 25 Index</option>
				<option value="volatility-25-1s-index">Volatility 25 (1s) Index</option>
				<option value="volatility-50-index">Volatility 50 Index</option>
				<option value="volatility-50-1s-index">Volatility 50 (1s) Index</option>
				<option value="volatility-75-index">Volatility 75 Index</option>
				<option value="volatility-75-1s-index">Volatility 75 (1s) Index</option>
				<option value="volatility-100-index">Volatility 100 Index</option>
				<option value="volatility-100-1s-index">Volatility 100 (1s) Index</option>
				<option value="jump-10-index">Jump 10 Index</option>
				<option value="jump-25-index">Jump 25 Index</option>
				<option value="jump-50-index">Jump 50 Index</option>
				<option value="jump-75-index">Jump 75 Index</option>
				<option value="jump-100-index">Jump 100 Index</option>
				<option value="bear-market">Bear Market</option>
				<option value="bull-market">Bull Market</option>
			</Select>
		</label>
	);
}
