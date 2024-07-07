import { FeatureFirst } from "./FeatureFirst";
import { FeatureSecond } from "./FeatureSecond";
import { FeatureThird } from "./FeatureThird";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[40px] lg:py-[120px] lg:gap-y-[80px] overflow-x-hidden">
      <FeatureFirst />
      <FeatureSecond />
      <FeatureThird />
    </div>
  );
}
