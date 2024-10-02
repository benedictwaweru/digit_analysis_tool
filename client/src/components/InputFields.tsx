import {
  Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";

interface props {
  inputName: string
}

// TODO: Accept input type as props and validate them
export function TextInput() {
  return (
    <Input variant="filled" placeholder="Email" />
  );
}

// TODO: Style span tag inside label with Tailwind CSS and replace span tag with prop
export function NumericInput({ inputName }: props) {
  return (
		<label>
			<span className="text-xs font-semibold italic">{inputName}</span>
			<NumberInput
				defaultValue={100}
				min={5}
				max={500}
				keepWithinRange={false}
				clampValueOnBlur={false}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper
						bg="blue.200"
						_active={{ bg: "blue.300" }}
						children="+"
					/>
					<NumberDecrementStepper
						bg="red.200"
						_active={{ bg: "red.300" }}
						children="-"
					/>
				</NumberInputStepper>
			</NumberInput>
		</label>
  );
}
