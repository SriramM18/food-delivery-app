import Footer from "../Footer";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";

test("Footer Logo should be present once the website is rendered", () => {
  const footer = render(
    <StaticRouter>
      <Footer />
    </StaticRouter>
  );

  const logo = footer.getByTestId("footer-logo");

  expect(logo.innerHTML).toBe("Go Foods.");
});
