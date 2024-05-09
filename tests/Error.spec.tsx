import { render } from "@testing-library/react";
import Error from "../src/components/Error/index";

test("render error component correctly", () => {
  const { getByTestId } = render(
    <Error messageError="Something went wrong" setErrorState={() => {}} />
  ); 
  expect(getByTestId("layer")).not.toBeNull();
});
