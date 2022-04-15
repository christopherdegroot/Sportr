import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";

const RangeSlider = (props) => {
  const { defaultValue, onChangeEnd } = props;
  const [sliderValue, setSliderValue] = useState(defaultValue);

  return (
    <Slider
      aria-label="slider-ex-6"
      defaultValue={sliderValue}
      onChange={(val) => setSliderValue(val)}
      onChangeEnd={(val) => console.log("Update KM Range", val)}
    >
      <SliderMark value={25} mt="2" ml="-2.5" fontSize="sm">
        25km
      </SliderMark>
      <SliderMark value={50} mt="2" ml="-2.5" fontSize="sm">
        50km
      </SliderMark>
      <SliderMark value={75} mt="2" ml="-2.5" fontSize="sm">
        75km
      </SliderMark>

      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6}>{sliderValue}</SliderThumb>
    </Slider>
  );
};
export default RangeSlider;
