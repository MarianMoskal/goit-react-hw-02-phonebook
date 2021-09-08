import { Label, Input } from "./index";

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

export default Filter;
