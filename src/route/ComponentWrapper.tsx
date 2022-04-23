import loadable from "@loadable/component";
import NavigationBar from "../component/NavigationBar";
import { splitCamelCase } from "../utils/common";

const ComponentWrapper = (props: { page: string }) => {
  const { page, ...rest } = props;
  const Component = loadable(() => import("../page/" + page));

  return (
    <>
      <NavigationBar />
      <div className="header">{splitCamelCase(page)}</div>
      <Component {...rest} />
    </>
  );
};

export default ComponentWrapper;
