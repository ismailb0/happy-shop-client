import React from "react";
import { shallow } from "enzyme";
import { unwrap } from "@material-ui/core/test-utils";
import ProductPage from "../ProductPage";

const ComponentNaked = unwrap(ProductPage);

describe("<ProductPage />", () => {
  it("with shallow", () => {
    const product = {
      brand: "Sephora Collection",
      description: "A gel lip gloss with plumped-up, light-reflecting shine.\r\n",
      image: "https://static-reg.lximg.com/images/product_images/closeup_34208_SephoraCollection_UltraShineLipGel_01PerfectNude_WEB_a0ea7cca39eec787b338105af4ff4a85097902bf_1523780022.png",
      name: "Ultra Shine Lip Gel",
      price: 19.0
    };
    const props = {
      location: {
        state: {
          product
        }
      }
    }
    const wrapper = shallow(<ComponentNaked classes={{}} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
