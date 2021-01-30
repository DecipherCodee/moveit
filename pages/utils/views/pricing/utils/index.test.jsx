import { shallow } from "enzyme";
import { useCStore } from ".";

describe("component", () => {
  describe("useC", () => {
    const C = () => {
      const { useC } = useCStore();
      return useC();
    };
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<C />);
    });

    it("renders", () => {
      expect(wrapper).toHaveLength(1);
    });
  });
  describe("useStore", () => {});
});
