import { Label, Input } from "./index";
import PropTypes from "prop-types";

function Filter(p) {
  return (
    <>
      <Label htmlFor="filter">Find contact by name</Label>
      <Input
        onChange={p.onChange}
        type="text"
        name="filter"
        id="filter"
        placeholder="Let's find the contact"
      />
    </>
  );
}

Filter.propTypes = {
  onChamge: PropTypes.func,
};

export default Filter;
